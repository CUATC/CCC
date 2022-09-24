import {
    Box,
    Grid,
    Typography,
    Button,
    makeStyles,
    Card,
    TableCell,
    TableRow,
    withStyles,
} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import React, {
    useState,
    useEffect
} from "react";
import {
    toast
} from "react-toastify";
import {
    Link
} from "react-router-dom";
import axios from "axios";
import {
    ServerURL
} from "../../ServerURL";
import $ from "jquery";
const useStyle = makeStyles((theme) => ({
    btntoggle: {
        height: "30px",
        padding: "5px 20px",
        color: "white",
        border: `1px solid ${theme.palette.secondary.btnborder}`,
        marginTop: "20px",
        borderRadius: "5px",
        background: theme.palette.secondary.btnbg,
        "&:hover": {
            background: "#007ACC",
        },
    },
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
    wb: {
        background: theme.palette.secondary.wb,
    },
}));

const TBlock = ({
    myPunks,
    setlogoutopen,
    userAction,
    setActivation,
    userWalletAddress,
    setcurrentSellingNftObject,
    setjdogeState,
    setfiltermodalopen2,
    sortBy,
    setcurrent3dLink,
    setviewmodalopen,
    setopeninput,
    setmintID,
    cashbackData2,
    setmyDoges,
    myDoges,
    intTwo,
    _stakedNft,
    _MyPunks,
}) => {
    const [inputfield, setinputfield] = useState("");
    const [serverState, setserverState] = useState(false);
    const classes = useStyle();

    const handleFieldChange2 = (event) => {
        setinputfield(event.target.value);
    };

    const GetSeachedValues = async () => {
        setserverState(true);
        if (!inputfield) {
            let data = [...myPunks, ..._stakedNft];

            setmyDoges(data);
        } else {
            if (isNaN(inputfield)) {
                let toSearch = inputfield.toLowerCase();
                if (
                    toSearch == "human" ||
                    toSearch == "punk" ||
                    toSearch == "ninja" ||
                    toSearch == "winkster" ||
                    toSearch == "mcdonald" ||
                    toSearch == "justinsun" ||
                    toSearch == "Unknown" ||
                    toSearch == "OompaLoompa"
                ) {
                    await axios
                        .post(ServerURL + `/searchjdoge`, {
                            criteria: "type",
                            data: inputfield,
                            walletAddress: userWalletAddress,
                        })
                        .then((res) => {
                            setmyDoges(res.data);
                        });
                } else {
                    await axios
                        .post(ServerURL + `/searchjdoge`, {
                            criteria: "attribute",
                            data: inputfield,
                            walletAddress: userWalletAddress,
                        })
                        .then((res) => {
                            console.log(res.data, "res---->");
                            setmyDoges(res.data);
                        });
                }
            } else {
                if (Number(inputfield) >= 1 && Number(inputfield) <= 10000) {
                    await axios
                        .post(ServerURL + `/searchjdoge`, {
                            criteria: "id",
                            data: inputfield,
                            walletAddress: userWalletAddress,
                        })
                        .then((res) => {
                            console.log(res, "res--->");
                            setmyDoges(res.data);
                        });
                } else {
                    toast.error("Data not Found");
                }
            }
        }
        setserverState(false);
    };

    async function sortByValue(sortinfo) {
        await axios
            .post(ServerURL + `/nftlistjdoge`, {
                walletAddress: userWalletAddress,
                criteria: sortinfo.criteria,
                value: sortinfo.value,
            })
            .then((res) => {
                setmyDoges(res.data);
            });
    }

    useEffect(() => {
        let abortController = new AbortController();
        if (sortBy.value != undefined) {
            sortByValue(sortBy);
        }
        return () => {
            abortController.abort();
        };
    }, [sortBy]);

    useEffect(() => {
        let abortController = new AbortController();
        intTwo();
        return () => {
            abortController.abort();
        };
    }, []);

    useEffect(() => {
        let abortController = new AbortController();
        (async () => {
            await _MyPunks();
        })();
        return () => {
            abortController.abort();
        };
    }, []);
    return ( <
        div style = {
            {
                maxWidth: "1350px",
                margin: "105px auto 0px auto"
            }
        } >
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
        Typography paragraph className = {
            classes.colortoggle
        }
        style = {
            {
                textAlign: "center"
            }
        } >
        Search Here <
        /Typography> <
        input value = {
            inputfield
        }
        onChange = {
            handleFieldChange2
        }
        autoComplete = "off"
        className = {
            classes.colortoggle
        }
        style = {
            {
                width: "98%",
                border: "1px solid #E2BDBD",
                borderRadius: "5px",
                padding: "14px 0px 14px 0px",
                background: "none",
                textIndent: "8px",
            }
        }
        id = "outlined-basic"
        placeholder = "Enter Your Search"
        variant = "outlined" /
        > {
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
                    () => GetSeachedValues()
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
        } <
        Button onClick = {
            () => {
                setfiltermodalopen2(true);
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

        <
        Box style = {
            {
                color: "#FD0001",
                fontSize: "26px",
                fontWeight: "bold"
            }
        } >
        <
        span > SELECT TBlocks & PLAY < /span> <
        br / >
        <
        Box style = {
            {
                textAlign: "left",
                fontSize: "18px"
            }
        }
        className = {
            classes.colortoggle
        } >
        <
        span >
        Connect your tron wallet, then select your TBlocks to enter in
        the game. <
        /span> <
        br / >
        <
        span >
        Don 't worry if you dont have a TBlocks, you can still play! or{" "} <
        Link to = "/"
        style = {
            {
                textDecoration: "none"
            }
        } >
        mint one. <
        /Link> <
        /span> <
        /Box> <
        br / >

        {
            userWalletAddress ? ( <
                Box style = {
                    {
                        textAlign: "left",
                        fontSize: "18px"
                    }
                }
                className = {
                    classes.colortoggle
                } >
                <
                span > My TBlocks Details < /span> <
                br / >
                <
                br / >
                <
                span > 10 % Cashback: < /span> {
                    cashbackData2.length > 0 ? (
                        cashbackData2[0].resultant > 0 ? ( <
                            Button style = {
                                {
                                    background: "green",
                                    borderRadius: "20px"
                                }
                            }
                            className = {
                                classes.colortoggle
                            } >
                            Active <
                            /Button>
                        ) : ( <
                            Button style = {
                                {
                                    background: "red",
                                    borderRadius: "20px"
                                }
                            }
                            className = {
                                classes.colortoggle
                            } >
                            False <
                            /Button>
                        )
                    ) : ( <
                        Button style = {
                            {
                                background: "red",
                                borderRadius: "20px"
                            }
                        }
                        className = {
                            classes.colortoggle
                        } >
                        False <
                        /Button>
                    )
                } {
                    " "
                } <
                br / >
                <
                span > TBL Pool: < /span> <
                Button >
                <
                span className = {
                    classes.colortoggle
                } > {
                    cashbackData2.length > 0 ?
                    cashbackData2[0].length > 0 ?
                    (cashbackData2[0].resultant * 50 * 9000) / 10 :
                    "Not Minted yet" :
                        "Not Minted yet"
                } <
                /span> <
                /Button> <
                br / >
                <
                span > Minted TBlocks: < /span> <
                Button > {
                    cashbackData2.length > 0 ? ( <
                        span className = {
                            classes.colortoggle
                        } > {
                            cashbackData2[0].length
                        } <
                        /span>
                    ) : ( <
                        span className = {
                            classes.colortoggle
                        } >
                        "Not Minted Yet" <
                        /span>
                    )
                } <
                /Button> {
                    /* <br />
                                      <span>Minted TBlocks(TRC20): </span>
                                      <Button>
                                        {cashbackData2.length > 0 ? (
                                          <span className={classes.colortoggle}>
                                            {cashbackData2[0].Trc20Count}
                                          </span>
                                        ) : (
                                          <span className={classes.colortoggle}>
                                            "Not Minted Yet"
                                          </span>
                                        )}
                                      </Button> */
                } <
                br / >
                <
                span > Owned TBlocks: < /span> <
                Button > {
                    myDoges.length > 0 ? ( <
                        span className = {
                            classes.colortoggle
                        } > {
                            myDoges.length
                        } <
                        /span>
                    ) : ( <
                        span className = {
                            classes.colortoggle
                        } >
                        "Not Minted Yet" <
                        /span>
                    )
                } <
                /Button> <
                br / >
                <
                /Box>
            ) : null
        } <
        /Box> <
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
                textAlign: "center"
            }
        } >
        <
        Grid item xs = {
            12
        } > {
            userWalletAddress && userWalletAddress ? ( <
                Typography style = {
                    {
                        fontSize: "16px",
                        fontSize: "bold"
                    }
                }
                variant = "h4"
                component = "h1"
                className = {
                    classes.colortoggle
                } >
                {
                    " "
                }
                Welcome {
                    " "
                } <
                /Typography>
            ) : ( <
                Typography variant = "h4"
                component = "h1"
                className = {
                    classes.colortoggle
                } >
                {
                    " "
                }
                Connect your Tron Wallet {
                    " "
                } <
                /Typography>
            )
        }

        {
            userWalletAddress || userAction == 200 ? ( <
                div > {
                    userWalletAddress ? ( <
                        Button variant = "filled"
                        style = {
                            {
                                border: "1px solid white",
                                borderRadius: "50px",
                                color: "white",
                                marginTop: "25px",
                                background: "#007ACC",
                            }
                        }
                        onClick = {
                            () => {
                                setActivation(true);
                                setlogoutopen(true);
                            }
                        } >
                        {
                            userWalletAddress ? .slice(0, 6) +
                            "..." +
                            userWalletAddress ? .slice(-4)
                        } <
                        /Button>
                    ) : ( <
                        Button variant = "filled"
                        style = {
                            {
                                border: "1px solid white",
                                borderRadius: "50px",
                                color: "white",
                                marginTop: "25px",
                                background: "#007ACC",
                            }
                        } >
                        loading...
                        <
                        /Button>
                    )
                }

                <
                br / >
                <
                br / >

                <
                Grid container item xs = {
                    12
                }
                md = {
                    12
                }
                style = {
                    {
                        textAlign: "center",
                        marginTop: "40px"
                    }
                } >
                {
                    myDoges.length > 0 ?
                    myDoges
                    .sort(function(x, y) {
                        // true values first
                        // return (x === y)? 0 : x? -1 : 1;
                        // false values first
                        return x.stakingStatus === y.stakingStatus ?
                            0 :
                            x.stakingStatus ?
                            1 :
                            -1;
                    })
                    .map((obj, index) => {
                        // stakingStatus
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
                            Card style = {
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
                            CardMedia style = {
                                {
                                    maxWidth: "400px",
                                    cursor: "pointer",
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
                            br / > { /* MintID ({obj.mintId}) */ } <
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
                            } >
                            Game Score:
                            <
                            /Typography> <
                            Typography className = {
                                classes.colortoggle
                            } >
                            MintID: {
                                obj.mintId
                            } <
                            /Typography> <
                            /CardContent> <
                            Box className = {
                                classes.wb
                            }
                            style = {
                                {
                                    padding: "10px",
                                    textAlign: "center",
                                }
                            } >
                            {
                                obj.stakingStatus === true ? (
                                    ""
                                ) : ( <
                                    Box >
                                    <
                                    Link to = {
                                        `/TBlocksinfo/${obj.nftid}`
                                    }
                                    style = {
                                        {
                                            textDecoration: "none"
                                        }
                                    } >
                                    <
                                    Button style = {
                                        {
                                            background: "#039BE5",
                                            color: "white",
                                            width: "80%",
                                        }
                                    }
                                    onClick = {
                                        () => {
                                            setcurrentSellingNftObject(obj);
                                            setjdogeState(true);
                                            setcurrent3dLink(obj.view3D);
                                            setviewmodalopen(true);
                                        }
                                    } >
                                    NFT Details <
                                    /Button> <
                                    /Link> <
                                    br / >

                                    <
                                    Button onClick = {
                                        () => {
                                            $(document).unbind("contextmenu");
                                            $(document).unbind("cut copy paste");
                                            setmintID(obj.mintId);
                                            setopeninput(true);
                                        }
                                    }
                                    style = {
                                        {
                                            marginTop: "10px",
                                            background: "#FDA600",
                                            color: "white",
                                            width: "80%",
                                        }
                                    } >
                                    Transfer NFT <
                                    /Button>

                                    <
                                    br / >
                                    <
                                    /Box>
                                )
                            }

                            <
                            a href = {
                                `${obj.GameLink}`
                            }
                            target = "_blank"
                            style = {
                                {
                                    textDecoration: "none"
                                }
                            } >
                            <
                            Button fullWidth = {
                                true
                            }
                            onClick = {
                                () => {
                                    // setPlayId(obj.nftid)
                                    // setPlayopen(true)
                                }
                            }
                            style = {
                                {
                                    marginTop: "10px",
                                    background: "#D40000",
                                    color: "white",
                                    width: "80%",
                                }
                            } >
                            Play <
                            /Button> <
                            /a> <
                            /Box> <
                            /Card> <
                            /Grid>
                        );
                    }) :
                        null
                } {
                    myDoges.length <= 0 ? ( <
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
                        /Box>
                    ) : null
                } <
                /Grid> <
                /div>
            ) : ( <
                Button variant = "filled"
                item className = {
                    classes.btntoggle
                }
                onClick = {
                    () => {
                        setActivation(true);
                    }
                } >
                Connect Wallet <
                /Button>
            )
        } <
        /Grid> <
        /Grid> <
        Grid item container style = {
            {
                marginTop: "90px"
            }
        } >
        <
        Grid container item justifyContent = "flex-start" >
        <
        Grid item >
        <
        a href = "https://t.me/tblocksw"
        target = "_blank" >
        <
        i style = {
            {
                color: "rgb(51, 51, 51)",
                fontSize: "30px"
            }
        }
        className = "fab fa-telegram" >
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
        className = "fab fa-twitter" >
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
        className = "fab fa-discord" >
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
                marginLeft: "9px",
                fontSize: "30px",
            }
        }
        className = "fas fa-sticky-note" >
        < /i> <
        /a> <
        /Grid> <
        /Grid> <
        /Grid> <
        /Grid> <
        /div>
    );
};
export default React.memo(TBlock);