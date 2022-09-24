import {
    Box,
    Grid,
    Typography,
    Button,
    Card,
    makeStyles,
    CircularProgress,
} from "@material-ui/core";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {
    useState,
    useEffect
} from "react";
import {
    toast
} from "react-toastify";
import {
    Link
} from "react-router-dom";
import "./gallery.css";
import axios from "axios";
import {
    ServerURL
} from "../../ServerURL";
const useStyle = makeStyles((theme) => ({
    root: {
        color: "white",
    },
    colortoggle: {
        color: theme.palette.secondary.bw,
    },
    btntoggle: {
        height: "30px",
        padding: "5px 20px",
        color: "white",
        border: `1px solid ${theme.palette.secondary.btnborder}`,
        marginTop: "20px",
        borderRadius: "5px",
        background: theme.palette.secondary.btnbg,
    },
    cardbtnbgc: {
        background: theme.palette.secondary.cardbg,
    },
    minted: {
        opacity: "0.3",
    },
    wb: {
        background: theme.palette.secondary.wb,
    },
}));

const Gallery = ({
    galleryPunks,
    setfiltermodalopen,
    sortBy,
    setcurrentSellingNftObject,
    setfromgallery,
    setgalleryState,
    setcurrent3dLink,
    setviewmodalopen,
    setupperBound,
    upperBound,
    setloadmoreState,
    setfilterLoadmore,
    filterLoadmore,
    setdata,
    data,
    setloadmoreObject,
    loadmoreObject,
    setfield,
    field,
    initMinted,
}) => {
    const classes = useStyle();

    // Handling Filter by ID

    // const [argumentgallery, setargumentgallery] = useState('')
    // const [ErrorMessage, setErrorMessage] = useState(false)
    // const [originalDatasetGallery, setoriginalDatasetGallery] =
    //   useState(galleryPunks)
    // const [filteredDatasetGallery, setfilteredDatasetGallery] = useState(
    //   originalDatasetGallery
    // )

    // const displayerGallery = (parameter) => {
    //   if (parameter) {
    //     let result = originalDatasetGallery.filter((object) => {
    //       if (object.nftid == parameter) {
    //         setErrorMessage(false)
    //         return true
    //       } else {
    //         setErrorMessage(true)
    //         setfilteredDatasetGallery(originalDatasetGallery)
    //         // return false
    //         // setfilteredDataset(originalDataset)
    //       }
    //       // setErrorMessage(false)
    //     })

    //     if (result.length > 0) {
    //       setfilteredDatasetGallery(result)
    //       setErrorMessage(false)
    //       console.log(result)
    //     } else {
    //       setfilteredDatasetGallery(originalDatasetGallery)
    //       setErrorMessage(true)
    //     }
    //   } else {
    //     setfilteredDatasetGallery(originalDatasetGallery)
    //     setErrorMessage(false)

    //     // alert('Not found')
    //   }
    // }
    const [myGallery, setmyGallery] = useState("");

    const [srcbtn, setsrcbtn] = useState(false);
    const [serverState, setserverState] = useState(false);
    const [filterLoadMore, setfilterLoadMore] = useState(false);

    const handleFieldChange = (event) => {
        setfield(event.target.value);
    };

    // console.log("loadmoreObject", loadmoreObject);

    async function searchById(field) {
        // console.log("Field value", field);
        //  toast.success("Search by ID chala hy")
        if (!field) {
            // alert("idhr chala hy")
            setmyGallery(galleryPunks);
            // console.log("ni mila data")
        } else {
            if (isNaN(field)) {
                let toSearch = field.toLowerCase();
                if (
                    toSearch == "human" ||
                    toSearch == "punk" ||
                    toSearch == "ninja" ||
                    toSearch == "winkster" ||
                    toSearch == "mcdonald" ||
                    toSearch == "justinsun" ||
                    toSearch == "unknown" ||
                    toSearch == "oompaloompa"
                ) {
                    // setcriteriastate("type")
                    // console.log("TYPE CASE")
                    await axios
                        .post(ServerURL + `/search`, {
                            criteria: "type",
                            data: field
                        })
                        .then((res) => {
                            // console.log(res.data, "SERVER sy aya hy TYPE wala data")
                            setmyGallery(res.data);
                            // setloadmore2(false)
                            setfilterLoadMore(true);
                            // setsearchState(true)
                        });
                } else {
                    // setcriteriastate("attribute")
                    // console.log("ATTRIBUTE CASE")
                    await axios
                        .post(ServerURL + `/search`, {
                            criteria: "attribute",
                            data: field
                        })
                        .then((res) => {
                            // console.log(res.data, "SERVER sy aya hy TYPE wala data")
                            // setloadmore2(false)
                            setmyGallery(res.data);
                            setfilterLoadMore(true);
                            // setsearchState(true)
                        });
                }
                // console.log("Lowercase", toSearch)
            } else {
                if (Number(field) >= 1 && Number(field) <= 10000) {
                    // setcriteriastate("id")
                    // console.log("ID CASE")
                    await axios
                        .post(ServerURL + `/search`, {
                            criteria: "id",
                            data: field
                        })
                        .then((res) => {
                            // console.log(res.data, "SERVER")
                            //  setloadmore2(false)
                            setmyGallery(res.data);
                        });
                } else {
                    toast.error("Data not Found");
                    // console.log("Not found");
                }
            }
        }

        setsrcbtn(false);
        setserverState(false);
        setdata(false);
    }

    useEffect(() => {
        if (srcbtn || loadmoreObject.searchbyid) {
            searchById(field);
        }
    }, [srcbtn]);

    useEffect(() => {
        // if (filterLoadMore == false) {
        if (galleryPunks.length > 0 && loadmoreObject.defaultLoadmore) {
            setmyGallery(galleryPunks);
        }
        // }
    }, [galleryPunks]);

    async function sortByValue(sortinfo) {
        // console.log("sortinfo", sortinfo.value)
        //  toast.success("Sort by Value chala hy")
        await axios
            .post(ServerURL + `/nftlist1`, {
                maxLimit: upperBound,
                criteria: sortinfo.criteria,
                value: sortinfo.value,
            })
            .then((res) => {
                // console.log("response of filters", res.data)
                setmyGallery(res.data);
                setfilterLoadMore(true);
            });
        setdata(false);

        // Freecode hhy yh

        // if (sortinfo.criteria != "normal") {
        //   if (sortinfo.criteria == "Highest") {
        //     const sorted = sort(galleryPunks).desc(u => u[sortinfo.value])
        //     console.log("sorted", sorted);
        //     setmyGallery(sorted)
        //   } else {
        //     const sorted = sort(galleryPunks).asc(u => u[sortinfo.value])
        //     console.log("sorted", sorted);
        //     setmyGallery(sorted)
        //   }

        // } else if (sortinfo.criteria == "normal") {
        //   console.log(sortinfo.value);
        //   if (sortinfo.value == "Minted" || sortinfo.value == "Not_Minted") {

        //     if (sortinfo.value == "Minted") {

        //       const newObject = filterObject(galleryPunks, (key, value) => value.nftOwner !== "false")
        //       // console.log("newObject", Object.keys(newObject).length, newObject)
        //       let arrayData = []
        //       if (Object.keys(newObject).length > 0) {
        //         arrayData = Object.values(newObject)
        //         setmyGallery(arrayData)
        //       } else {
        //         setmyGallery(arrayData)
        //       }
        //     }
        //     else if (sortinfo.value == "Not_Minted") {
        //       const newObject = filterObject(galleryPunks, (key, value) => value.nftOwner == "false")
        //       // console.log("newObject", Object.keys(newObject).length)
        //       let arrayData = []
        //       if (Object.keys(newObject).length > 0) {
        //         arrayData = Object.values(newObject)
        //         setmyGallery(arrayData)
        //       } else {
        //         setmyGallery(arrayData)
        //       }
        //     }

        //   }
        //   else {
        //     const newObject = filterObject(galleryPunks, (key, value) => value.nftattributes[0].Type == sortinfo.value)
        //     console.log("newObject", Object.keys(newObject).length)
        //     let arrayData = []
        //     if (Object.keys(newObject).length > 0) {
        //       arrayData = Object.values(newObject)
        //       setmyGallery(arrayData)
        //     } else {
        //       setmyGallery(arrayData)
        //     }
        //   }

        // }
    }

    useEffect(() => {
        // console.log("sortBy", sortBy);
        if (sortBy && loadmoreObject.searchbyvalue) {
            sortByValue(sortBy);
        }
    }, [sortBy]);

    // Hnadling On Window load Dataset

    // let GalleryDataset = filteredDatasetGallery

    // function compare_qty(a, b) {
    //   let variable = sortBy.value
    //   // a should come before b in the sorted order
    //   if (a[variable] < b[variable]) {
    //     return -1
    //     // a should come after b in the sorted order
    //   } else if (a[variable] > b[variable]) {
    //     return 1
    //     // a and b are the same
    //   } else {
    //     return 0
    //   }
    // }

    // useEffect(() => {
    //   if (filteredDatasetGallery.length <= 0) {
    //     setoriginalDatasetGallery(galleryPunks)
    //     setfilteredDatasetGallery(galleryPunks)
    //     setgalleryServerResponse(false)
    //   } else if (filteredDatasetGallery.length > galleryPunks.length) {
    //     setoriginalDatasetGallery(galleryPunks)
    //     setfilteredDatasetGallery(galleryPunks)
    //     setgalleryServerResponse(false)
    //   }
    // }, [argumentgallery, galleryPunks, galleryServerResponse])

    // useEffect(() => {
    //   if (sortBy.category == 'sort') {
    //     if (sortBy.criteria == 'Highest') {
    //       GalleryDataset = originalDatasetGallery.sort(compare_qty).reverse()
    //     } else if (sortBy.criteria == 'Lowest') {
    //       GalleryDataset = originalDatasetGallery.sort(compare_qty)
    //     }
    //   }
    //   //  else if (sortBy.category == "type") {
    //   //     let categoryfilters = originalDatasetGallery.filter((obj) => {
    //   //         return obj.type == sortBy.value ? true : false
    //   //     })
    //   //     if (categoryfilters.length > 0) {
    //   //         // alert('chal rhi hn')
    //   //         GalleryDataset = [...GalleryDataset, categoryfilters]

    //   //     }
    //   // }
    // }, [sortBy])

    // Handling Load More

    // const [initialLimit, setinitialLimit] = useState(50)

    const loadMore = () => {
        // alert("simple load more")
        // setinitialLimit(initialLimit + 50)
        setupperBound(upperBound + 50);
        setloadmoreState(true);
    };

    const FilterloadMoreFunc = () => {
        // alert("second load more")
        // setinitialLimit(initialLimit + 50)
        setupperBound(upperBound + 50);
        if (filterLoadmore) {
            sortByValue(sortBy);
        }
        // sortByValue(sortBy)
    };

    //   useEffect(() => {

    //     if(loadmore2){
    //     setupperBound(upperBound + 50)
    //   if (filterLoadmore) {
    //     sortByValue(sortBy)
    //   }
    //     }

    //   return () => {
    //     setloadmore2(false)
    //   }

    // }, [loadmore2])

    window.onscroll = function(ev) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // you're at the bottom of the page
            setdata(true);
            // console.log("Bottom reached");
        }
    };

    useEffect(() => {
        // console.log("loadmoreObject.default", loadmoreObject.defaultLoadmore);

        if (data && loadmoreObject.defaultLoadmore) {
            // alert("Default Route Data")
            // console.log("Data**********Default route")
            setupperBound(upperBound + 50);
            setloadmoreState(true);
        } else if (data && loadmoreObject.searchbyid) {
            // console.log("Data********Search by ID")
            setupperBound(upperBound + 50);
            searchById(field);
        } else if (data && loadmoreObject.searchbyvalue) {
            // console.log("Data*******Sort by Value")
            setupperBound(upperBound + 50);
            sortByValue(sortBy);
        }
    }, [data]);
    //   const [data, setdata] = useState(false)

    //   $(window).scroll(function() {
    //     let counter = 0
    //     if($(window).scrollTop() == $(document).height() - $(window).height()) {
    //           // alert("hit the Bottom")
    //           counter++
    //           if(counter < 1){
    //             setdata(true)

    //           }

    //             console.log(counter,"counter");

    //     }
    // });

    // useEffect(() => {

    //   return () => {
    //     setfilterLoadmore(false)
    //   }
    // }, [])

    useEffect(() => {
        initMinted();
    }, [initMinted]);

    return ( <
        div >
        <
        Grid container style = {
            {
                padding: "40px"
            }
        } >
        <
        Grid container item xs = {
            12
        }
        md = {
            3
        }
        style = {
            {
                textAlign: "center"
            }
        } >
        <
        Grid item xs = {
            12
        } >
        <
        Typography className = {
            classes.colortoggle
        }
        paragraph style = {
            {
                textAlign: "center"
            }
        } >
        Search Here <
        /Typography>

        <
        input value = {
            field
        }
        onChange = {
            handleFieldChange
        }
        autoComplete = "off"
        className = {
            classes.colortoggle
        }
        style = {
            {
                width: "98%",
                border: "1px solid #744F4F",
                borderRadius: "5px",
                padding: "14px 0px 14px 0px",
                background: "none",
                textIndent: "8px",
            }
        }
        id = "outlined-basic"
        placeholder = "Enter your Search"
        variant = "outlined" /
        >

        {
            serverState ? ( <
                Button variant = "outlined"
                color = "primary"
                style = {
                    {
                        marginTop: "15px",
                        width: "98%"
                    }
                } >
                <
                span className = {
                    classes.colortoggle
                } > Loading... < /span>{" "} <
                /Button>
            ) : ( <
                Button onClick = {
                    () => {
                        setfilterLoadmore(false);
                        setsrcbtn(true);
                        setserverState(true);
                        setloadmoreObject({
                            defaultLoadmore: false,
                            searchbyid: true,
                            searchbyvalue: false,
                        });
                    }
                }
                variant = "outlined"
                color = "primary"
                style = {
                    {
                        marginTop: "15px",
                        width: "98%"
                    }
                } >
                <
                span className = {
                    classes.colortoggle
                } > Search < /span>{" "} <
                /Button>
            )
        }

        <
        Button onClick = {
            () => {
                setfiltermodalopen(true);
            }
        }
        variant = "outlined"
        color = "primary"
        style = {
            {
                marginTop: "15px",
                width: "98%"
            }
        } >
        <
        span className = {
            classes.colortoggle
        } > Filter < /span>{" "} <
        i className = {
            classes.colortoggle + " " + "fas fa-sliders-h"
        }
        style = {
            {
                fontSize: "18px",
                marginLeft: "6px"
            }
        } >
        < /i> <
        /Button>

        {
            /* <FormControlLabel style={{ float: "left", }}
                                        control={<Checkbox name="checkedA" />}
                                        label="Secondary"
                                    /> */
        } <
        /Grid> <
        /Grid> <
        Grid container item xs = {
            12
        }
        md = {
            9
        }
        style = {
            {
                textAlign: "center",
                marginTop: "40px"
            }
        } >
        {
            /* <Grid item xs={12} >
                                    <Typography variant="h4" component="h1"> Connect your Tron Wallet </Typography>
                                    <button item style={{ height: "30px", padding: "5px 20px", backgroundColor: "#497BEA", color: "white", border: "0px", marginTop: "20px", borderRadius: "5px" }}>Connect Wallet</button>
                                </Grid> */
        }

        {
            myGallery.length > 0 ?
                myGallery.slice(0, upperBound).map((obj, index) => {
                    return ( <
                        Grid key = {
                            index
                        }
                        style = {
                            {
                                marginBottom: "30px"
                            }
                        }
                        item xs = {
                            12
                        }
                        md = {
                            4
                        }
                        lg = {
                            3
                        } >
                        <
                        Link style = {
                            {
                                width: "100%",
                                textDecoration: "none"
                            }
                        }
                        to = {
                            `/TBlocksinfo/${obj.nftid}`
                        } >
                        <
                        Card onClick = {
                            () => {
                                setgalleryState(true);
                                setfromgallery(true);
                                setcurrentSellingNftObject(obj);
                                setcurrent3dLink(obj.view3D);
                                setviewmodalopen(true);
                            }
                        }
                        style = {
                            {
                                background: "transparent",
                                width: "400px",
                                maxWidth: "90%",
                                margin: "auto",
                                textAlign: "left",
                                border: "1px solid #DFDFDF",
                            }
                        } >

                        <
                        CardMedia className = {
                            obj.nftOwner == "false" ? classes.minted : null
                        }
                        style = {
                            {
                                maxWidth: "400px"
                            }
                        }
                        component = "img"
                        height = "auto"
                        image = {
                            obj.nftimage
                        }
                        alt = "green iguana" /
                        >
                        <
                        CardContent className = {
                            classes.wb
                        } >
                        <
                        Typography className = {
                            classes.colortoggle
                        }
                        variant = "h5"
                        component = "div" >
                        #ID {
                            obj.nftid
                        } <
                        /Typography> <
                        Typography paragraph style = {
                            {
                                color: "#6C757D"
                            }
                        } > {
                            obj.type == "SSR" ?
                            obj.type + " (Super Super Rare)" :
                                obj.type
                        } <
                        /Typography> <
                        Typography className = {
                            classes.colortoggle
                        } >
                        Type: {
                            obj.nftattributes[0].Type ?
                            obj.nftattributes[0].Type :
                                null
                        } <
                        /Typography> <
                        Typography className = {
                            classes.colortoggle
                        } >
                        Rank: {
                            obj.nftRank
                        } <
                        /Typography> <
                        Typography className = {
                            classes.colortoggle
                        }
                        paragraph >
                        Game Score:
                        <
                        /Typography> { /* <Typography className={classes.colortoggle}>Price:{obj.nftPrice}TRX</Typography> */ } <
                        /CardContent> {
                            /* <Box style={{ padding: '10px' }} className={classes.wb}>
                                                        {
                                                          // console.log(obj.nftattributes)
                                                          obj.nftattributes.map((attribute) => {
                                                            return (
                                                              <Button
                                                                className={
                                                                  classes.colortoggle + ' ' + classes.cardbtnbgc
                                                                }
                                                                style={{
                                                                  fontWeight: 'bolder',
                                                                  padding: '1px 5px 1px 5px',
                                                                  fontSize: '0.7rem',
                                                                  margin: '6px 6px 6px 0px',
                                                                  borderRadius: '30px',
                                                                }}
                                                              >
                                                                {attribute}
                                                              </Button>
                                                            )
                                                          })
                                                        }
                                
                                                        <Button
                                                          className={
                                                            classes.colortoggle + ' ' + classes.cardbtnbgc
                                                          }
                                                          style={{
                                                            fontWeight: 'bolder',
                                                            padding: '1px 5px 1px 5px',
                                                            fontSize: '0.7rem',
                                                            margin: '6px 6px 6px 0px',
                                                            borderRadius: '30px',
                                                          }}
                                                        >
                                                          More
                                                        </Button>
                                                      </Box> */
                        } <
                        /Card> <
                        Box width = "100%"
                        height = "10px" > < /Box> <
                        /Link> <
                        /Grid>
                    );
                }) :
                null
        }

        {
            myGallery.length <= 0 ? ( <
                Box width = "100%"
                style = {
                    {
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "40px",
                        color: "red",
                    }
                } >
                No TBlocks Available <
                br / >
                <
                br / >
                <
                CircularProgress / >
                <
                /Box>
            ) : null
        }

        { /* Load more buttons Starts here */ }

        {
            /* {myGallery.length <= 0 || filterLoadMore ? null : (
                        <div style={{ width: '100%' }}>
                          <Box
                            onClick={loadMore}
                            margin="auto"
                            width="130px"
                            padding="10px 0px 10px 0px"
                            color="white"
                            sx={{ background: 'dodgerblue', borderRadius: '10px', cursor: "pointer" }}
                          >
                            Load More
                          </Box>
                        </div>
                      )}

                    {
                        console.log("upperBound", upperBound)
                      }

                      {
                        filterLoadMore ? <div style={{ width: '100%' }}>
                          <Box
                            onClick={() => {
                              setsrcbtn(true)
                              setserverState(true)
                              FilterloadMoreFunc()

                            }}
                            margin="auto"
                            width="130px"
                            padding="10px 0px 10px 0px"
                            color="white"
                            sx={{ background: 'dodgerblue', borderRadius: '10px', cursor: "pointer" }}
                          >
                            Load More 2
                          </Box>
                        </div> : null
                      } */
        }

        { /* Load more buttons end here */ }

        {
            /* {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element) => {
                                        return <Grid style={{ marginBottom: "30px" }} item xs={12} md={4} lg={3}>
                                            <Card style={{ background: "transparent", width: "200px", maxWidth: "90%", margin: "auto", textAlign: "left", border: "1px solid #DFDFDF" }}>
                                                <CardMedia style={{ maxWidth: "330px" }}
                                                    component="img"
                                                    height="auto"
                                                    image="./Images/Capture.jpg"
                                                    alt="green iguana"
                                                />
                                                <CardContent style={{ background: "transparent" }}>
                                                    <Typography className={classes.colortoggle} variant="h5" component="div">
                                                        Tpunk
                                                    </Typography>
                                                    <Typography paragraph style={{ color: "#6C757D" }}>
                                                        Female
                                                    </Typography>
                                                    <Typography className={classes.colortoggle} gutterBottom paragraph>
                                                        Rank:1234
                                                    </Typography>

                                                </CardContent>
                                                <Box style={{ padding: "10px" }}>
                                                    <Button className={classes.colortoggle + " " + classes.cardbtnbgc} style={{
                                                        fontWeight: "bolder",
                                                        padding: '1px 5px 1px 5px',
                                                        fontSize: "0.7rem", margin: "6px 6px 6px 0px", borderRadius: "30px"
                                                    }}>Green Eye Shadow</Button>
                                                    <Button className={classes.colortoggle + " " + classes.cardbtnbgc} style={{
                                                        fontWeight: "bolder",
                                                        padding: '1px 5px 1px 5px',
                                                        fontSize: "0.7rem", margin: "6px 6px 6px 0px", borderRadius: "30px"
                                                    }}>Learn More</Button>
                                                    <Button className={classes.colortoggle + " " + classes.cardbtnbgc} style={{
                                                        fontWeight: "bolder",
                                                        padding: '1px 5px 1px 5px',
                                                        fontSize: "0.7rem", margin: "6px 6px 6px 0px", borderRadius: "30px"
                                                    }}>Shadow</Button>
                                                    <Button className={classes.colortoggle + " " + classes.cardbtnbgc} style={{
                                                        fontWeight: "bolder",
                                                        padding: '1px 5px 1px 5px',
                                                        fontSize: "0.7rem", margin: "6px 6px 6px 0px", borderRadius: "30px"
                                                    }}>More</Button>

                                                </Box>
                                            </Card>
                                        </Grid>
                                    })
                                } */
        } <
        /Grid> <
        Grid item container style = {
            {
                marginTop: "10px"
            }
        } >
        <
        Grid container item justifyContent = "flex-start" >
        <
        Grid item > {
            " "
        } <
        a href = "https://t.me/tblocksw"
        target = "_blank" >
        <
        i style = {
            {
                color: "rgb(51, 51, 51)",
                fontSize: "30px"
            }
        }
        class = "fab fa-telegram" >
        < /i> <
        /a> <
        /Grid> <
        Grid item >
        <
        a href = "https://twitter.com/tblocksw"
        target = "_blank" >
        <
        i style = {
            {
                color: "rgb(51, 51, 51)",
                marginLeft: "8px",
                fontSize: "30px",
            }
        }
        class = "fab fa-twitter" >
        < /i> <
        /a> <
        /Grid> <
        Grid item >
        <
        a href = "https://discord.gg/ChfDagP9"
        target = "_blank" >
        <
        i style = {
            {
                color: "rgb(51, 51, 51)",
                marginLeft: "8px",
                fontSize: "30px",
            }
        }
        class = "fab fa-discord" >
        < /i> <
        /a> <
        /Grid> <
        Grid item >
        <
        a href = "https://peridot-heather-e84.notion.site/Getting-Started-ad66f7fe2a654ebfbbdbc6861116991d"
        target = "_blank" >
        <
        i style = {
            {
                color: "rgb(51, 51, 51)",
                marginLeft: "8px",
                fontSize: "30px",
            }
        }
        class = "fas fa-sticky-note" >
        < /i> <
        /a> <
        /Grid> <
        /Grid> <
        /Grid> <
        /Grid> <
        /div>
    );
};

export default Gallery;