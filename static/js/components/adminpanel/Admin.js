import {
    Box,
    Button,
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    withStyles,
} from "@material-ui/core";
import {
    useState,
    useEffect
} from "react";
import {
    toast
} from "react-toastify";
import axios from "axios";
import {
    ServerURL
} from "../../ServerURL";
import {
    ethers
} from "ethers";

// Theme code

const useStyle = makeStyles((theme) => ({
    bw: {
        color: theme.palette.secondary.bw,
    },
    gw: {
        color: theme.palette.secondary.gw,
    },
    tablecell: {
        background: theme.palette.secondary.tabbacckground,
    },
}));

// Table related Data

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#007ACC",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.tabbacckground,
    },
}))(TableRow);

const Admin = ({
    setMintArray,
    setBuyConfirmation,
    isMintProcessing,
    setisMintProcessing,
    setmintNumber,
    setMongoIds,
    userWalletAddress,
    contractNft,
    airdropWalletAddress,
    setairdropWalletAddress,
    setairdropState,
    setloading,
    cashbackData,
    setupdateIds,
    intTwo,
}) => {
    const [counter2, setcounter2] = useState(1);
    const classes = useStyle();
    const matches = useMediaQuery("(max-width:900px)");

    // async function generateRandom(counterValue) {
    //   let tempNumArray = [];
    //   try {
    //     for (let index = 0; index < counterValue; index++) {
    //       tempNumArray.push(index);
    //     }
    //     console.log(tempNumArray, "tempNumArray");
    //     setMintArray(tempNumArray);
    //   } catch (error) {
    //     setloading(false);
    //     console.log(error);
    //   }
    // }

    const mintSpecificIds = async () => {
        try {
            let IdsArray = speificIds.split(",");
            let AddressesArray = speificWalletAddress.split(",");
            if (IdsArray.length === AddressesArray.length) {
                const arrOfNum = IdsArray.map((str) => {
                    return Number(str);
                });
                if (!arrOfNum.includes(NaN)) {
                    setloading(true);
                    setisMintProcessing(true);
                    toast.success("success");
                    toast.success("Specific Ids Minting...");
                    const mintNftresponse = await contractNft
                        .mintspecificIds(AddressesArray, IdsArray)
                        .send();
                    toast.success(mintNftresponse);
                    await axios
                        .post(ServerURL + `/mintspecificIdsHandler`, {
                            walletAddresses: speificWalletAddress,
                            IdsArray: IdsArray,
                            transId: mintNftresponse,
                        })
                        .then((res) => {
                            if (res.data == "success") {
                                toast.success("NFT Minted");
                            } else {
                                toast.error(res.data);
                            }
                            setisMintProcessing(false);
                            setloading(false);
                        });
                } else {
                    toast.error("Please Enter a Valid Ids");
                }
            } else {
                toast.error("Ids Array and Address Array length must be Same");
            }
        } catch (error) {
            setisMintProcessing(false);
            setloading(false);
            console.log(error);
        }
    };

    const [speificComponent, setspeificComponent] = useState(false);
    const [speificIds, setspeificIds] = useState("");
    const [speificWalletAddress, setspeificWalletAddress] = useState("");
    const [trackcomponent, settrackcomponent] = useState(false);
    const [send, setsend] = useState(false);

    async function TransferTrx(wallet, value) {
        await axios
            .post(ServerURL + `/redeem`, {
                walletAddress: wallet,
                claim: value
            })
            .then((res) => {
                if (res.data) {
                    toast.success("Status Updated for Cashback");
                    setupdateIds((prevCheck) => !prevCheck);
                    setsend(false);
                }
            });
    }

    useEffect(() => {
        intTwo();
    }, [intTwo]);

    return ( <
        div style = {
            {
                marginTop: "30px"
            }
        } >
        <
        Grid container >
        <
        Grid item xs = {!matches ? 6 : 12
        }
        style = {
            {
                marginTop: "60px",
                marginLeft: "auto",
                marginRight: "auto"
            }
        } >
        <
        Box style = {
            {
                textAlign: "center",
                margin: "auto"
            }
        } >
        <
        Typography className = {
            classes.bw
        }
        style = {
            {
                fontSize: "30px",
                fontWeight: "bold"
            }
        } >
        Airdrop Data <
        /Typography> <
        input value = {
            airdropWalletAddress
        }
        onChange = {
            (event) => {
                setairdropWalletAddress(event.target.value);
            }
        }
        autoComplete = "off"
        className = {
            classes.bw + " " + "eventfield"
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
        placeholder = "Receiver's WalletAddress"
        label = "Receiver's WalletAddress"
        variant = "outlined" /
        >

        <
        br / > {!isMintProcessing ? ( <
                Box style = {
                    {
                        marginTop: "20px"
                    }
                } >
                <
                Button onClick = {
                    () => {
                        if (counter2 < 1) {
                            setcounter2(0);
                            toast.error("Please Enter valid value");
                        } else {
                            if (counter2 == 1) {
                                toast.error("You can Mint only Valid number of NFTs");
                            } else {
                                setcounter2((prevState) => prevState - 1);
                            }
                        }
                    }
                }
                style = {
                    {
                        fontSize: "30px",
                        color: "#D40000"
                    }
                } >
                <
                i class = "fas fa-chevron-circle-down" > < /i> <
                /Button> <
                Button className = {
                    classes.bw
                } > {
                    counter2
                } < /Button>{" "} <
                Button onClick = {
                    () => {
                        if (counter2 > 10) {
                            setcounter2(10);
                            toast.error("You can Mint within range of 1-10 NFTs");
                        } else {
                            if (counter2 == 10) {
                                toast.error("You can Mint within range of 1-10 NFTs");
                            } else {
                                setcounter2((prevState) => prevState + 1);
                            }
                        }
                    }
                }
                style = {
                    {
                        fontSize: "30px",
                        color: "#D40000"
                    }
                } >
                <
                i class = "fas fa-chevron-circle-up" > < /i> <
                /Button> <
                br / > {!isMintProcessing ? ( <
                        Button onClick = {
                            async () => {
                                if (userWalletAddress != "-----") {
                                    if (
                                        counter2 >= 1 &&
                                        counter2 <= 10 &&
                                        airdropWalletAddress
                                    ) {
                                        if (contractNft) {
                                            setloading(true);
                                            setairdropState(true);
                                            setmintNumber(+counter2);
                                            setBuyConfirmation(true);
                                            setisMintProcessing(true);
                                        } else {
                                            toast.error("You are currently on Wrong Network!");
                                        }
                                    } else {
                                        toast.error("Enter valid value");
                                    }
                                } else {
                                    toast.error("Please connect your wallet");
                                }
                            }
                        }
                        className = {
                            classes.gw
                        }
                        style = {
                            {
                                border: "4px solid #4e4e4e",
                                borderRadius: "50px",
                                marginTop: "25px",
                            }
                        } >
                        MINT TBlocks <
                        /Button>
                    ) : ( <
                        Button className = {
                            classes.gw
                        }
                        style = {
                            {
                                border: "4px solid #4e4e4e",
                                borderRadius: "50px",
                                marginTop: "25px",
                            }
                        } >
                        MINTING...
                        <
                        /Button>
                    )
                } <
                /Box>
            ) : ( <
                Button className = {
                    classes.gw
                }
                onClick = {
                    () => {
                        toast.warning("Minting in Progress Please be patient");
                    }
                }
                style = {
                    {
                        border: "4px solid #4e4e4e",
                        borderRadius: "50px",
                        marginTop: "25px",
                    }
                } >
                MINTING...
                <
                /Button>
            )
        } <
        /Box> <
        /Grid>

        <
        Grid item xs = {
            12
        }
        style = {
            {
                textAlign: "center",
                marginTop: "30px"
            }
        } >
        <
        Button onClick = {
            () => {
                settrackcomponent(!trackcomponent);
                setupdateIds(true);
            }
        }
        style = {
            {
                background: "#D40000",
                color: "white"
            }
        } >
        Track Buying Status <
        /Button> <
        /Grid> {
            trackcomponent ? ( <
                Grid justifyContent = "center"
                style = {
                    {
                        margin: "0px auto 50px auto"
                    }
                }
                container >
                <
                Grid item xs = {
                    12
                }
                md = {
                    8
                }
                style = {
                    {
                        marginTop: "40px"
                    }
                } >
                <
                TableContainer >
                <
                Table style = {
                    {
                        width: "90%",
                        margin: "auto"
                    }
                }
                aria - label = "customized table" >
                <
                TableHead >
                <
                TableRow >
                <
                StyledTableCell > Owner Address < /StyledTableCell> <
                StyledTableCell align = "left" >
                Owned NFT 's <
                /StyledTableCell> <
                StyledTableCell align = "left" > Amount < /StyledTableCell> <
                StyledTableCell align = "left" > Status < /StyledTableCell> <
                StyledTableCell align = "left" > Action < /StyledTableCell> <
                /TableRow> <
                /TableHead> <
                TableBody > {
                    trackcomponent ?
                    cashbackData.length > 0 ?
                    cashbackData.map((obj, index) => {
                        return ( <
                            >
                            <
                            StyledTableRow className = {
                                classes.tabbacckground
                            } >
                            <
                            StyledTableCell className = {
                                classes.bw
                            }
                            component = "th"
                            scope = "row" >
                            {
                                obj.walletAddress
                            } <
                            /StyledTableCell> <
                            StyledTableCell className = {
                                classes.bw
                            }
                            component = "th"
                            scope = "row" >
                            {
                                obj.length
                            } <
                            /StyledTableCell>

                            <
                            StyledTableCell className = {
                                classes.bw
                            }
                            component = "th"
                            scope = "row" >
                            { <
                                Button
                                style = {
                                    {
                                        background: "green",
                                        color: "white",
                                    }
                                } >
                                {
                                    console.log(
                                        obj.resultant * 9000,
                                        "obj.resultant"
                                    )
                                } {
                                    (obj.resultant * 50 * 9000) / 10
                                }
                                TBL <
                                /Button>
                            } <
                            /StyledTableCell> <
                            StyledTableCell className = {
                                classes.bw
                            }
                            component = "th"
                            scope = "row" >
                            { <
                                Button
                                style = {
                                    {
                                        background: obj.resultant > 0 ? "red" : "green",
                                        color: "white",
                                    }
                                } >
                                {
                                    obj.resultant > 0 ?
                                    "Pending" :
                                        "Redeemed"
                                } <
                                /Button>
                            } <
                            /StyledTableCell> <
                            StyledTableCell className = {
                                classes.bw
                            }
                            component = "th"
                            scope = "row" >
                            {
                                obj.resultant > 0 ? (!send ? ( <
                                    Button onClick = {
                                        () => {
                                            toast.warning(
                                                "Loading Please Wait..."
                                            );
                                            setsend(true);
                                            TransferTrx(
                                                obj.walletAddress,
                                                obj.resultant
                                            );
                                        }
                                    }
                                    style = {
                                        {
                                            background: "green",
                                            color: "white",
                                        }
                                    } >
                                    Send <
                                    /Button>
                                ) : ( <
                                    Button style = {
                                        {
                                            background: "grey",
                                            color: "white",
                                        }
                                    } >
                                    Loading...
                                    <
                                    /Button>
                                )) : ( <
                                    Button style = {
                                        {
                                            background: "grey",
                                            color: "white",
                                        }
                                    } >
                                    Disabled <
                                    /Button>
                                )
                            } <
                            /StyledTableCell> <
                            /StyledTableRow>

                            { /* ##################################################################### */ }

                            { /* Code for TRC20 Data Display */ }

                            { /* ##################################################################### */ }

                            {
                                /* {obj.Trc20Count > 0 ? (
                                                                  <StyledTableRow
                                                                    className={classes.tabbacckground}
                                                                  >
                                                                    <StyledTableCell
                                                                      className={classes.bw}
                                                                      component="th"
                                                                      scope="row"
                                                                    >
                                                                      {obj.walletAddress}
                                                                    </StyledTableCell>
                                                                    <StyledTableCell
                                                                      className={classes.bw}
                                                                      component="th"
                                                                      scope="row"
                                                                    >
                                                                      {obj.Trc20Count}
                                                                    </StyledTableCell>

                                                                    <StyledTableCell
                                                                      className={classes.bw}
                                                                      component="th"
                                                                      scope="row"
                                                                    >
                                                                      {
                                                                        <Button
                                                                          style={{
                                                                            background: "red",
                                                                            color: "white",
                                                                          }}
                                                                        >
                                                                          TRC20
                                                                        </Button>
                                                                      }
                                                                    </StyledTableCell>
                                                                    <StyledTableCell
                                                                      className={classes.bw}
                                                                      component="th"
                                                                      scope="row"
                                                                    >
                                                                      {
                                                                        <Button
                                                                          style={{
                                                                            background: "grey",
                                                                            color: "white",
                                                                          }}
                                                                        >
                                                                          Disabled
                                                                        </Button>
                                                                      }
                                                                    </StyledTableCell>
                                                                    <StyledTableCell
                                                                      className={classes.bw}
                                                                      component="th"
                                                                      scope="row"
                                                                    >
                                                                      <Button
                                                                        style={{
                                                                          background: "grey",
                                                                          color: "white",
                                                                        }}
                                                                      >
                                                                        Disabled
                                                                      </Button>
                                                                    </StyledTableCell>
                                                                  </StyledTableRow>
                                                                ) : null} */
                            } <
                            />
                        );
                    }) :
                    null :
                        null
                } <
                /TableBody> <
                /Table> <
                /TableContainer> <
                /Grid> <
                /Grid>
            ) : null
        }

        <
        Grid item xs = {
            12
        }
        style = {
            {
                textAlign: "center",
                marginTop: "30px"
            }
        } >
        <
        Button onClick = {
            () => {
                setspeificComponent(!speificComponent);
            }
        }
        style = {
            {
                background: "#D40000",
                color: "white"
            }
        } >
        Mint with Specific Ids <
        /Button> <
        /Grid> {
            speificComponent ? ( <
                >
                <
                Grid item xs = {!matches ? 6 : 12
                }
                style = {
                    {
                        marginTop: "60px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }
                } >
                <
                Box style = {
                    {
                        textAlign: "center",
                        margin: "auto"
                    }
                } >
                <
                Typography className = {
                    classes.bw
                }
                style = {
                    {
                        fontSize: "30px",
                        fontWeight: "bold"
                    }
                } >
                Mint with SpecificIds <
                /Typography> <
                input value = {
                    speificWalletAddress
                }
                onChange = {
                    (event) => {
                        setspeificWalletAddress(event.target.value);
                    }
                }
                autoComplete = "off"
                className = {
                    classes.bw + " " + "eventfield"
                }
                style = {
                    {
                        width: "98%",
                        border: "1px solid #744F4F",
                        borderRadius: "5px",
                        padding: "14px 0px 14px 0px",
                        marginBottom: "20px",
                        background: "none",
                        textIndent: "8px",
                    }
                }
                id = "outlined-basic"
                placeholder = "Receiver's WalletAddress (WalletAddress must be comma seprated)"
                variant = "outlined" /
                >
                <
                br / >
                <
                input value = {
                    speificIds
                }
                onChange = {
                    (event) => {
                        setspeificIds(event.target.value);
                    }
                }
                autoComplete = "off"
                className = {
                    classes.bw + " " + "eventfield"
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
                placeholder = "Enter Specific Id (Ids must be comma seprated)"
                variant = "outlined" /
                >

                <
                br / > {!isMintProcessing ? ( <
                        Box style = {
                            {
                                marginTop: "20px"
                            }
                        } > {
                            /* <Button
                                                  onClick={() => {
                                                    if (counter2 < 1) {
                                                      setcounter2(0);
                                                      toast.error("Please Enter valid value");
                                                    } else {
                                                      if (counter2 == 1) {
                                                        toast.error(
                                                          "You can Mint only Valid number of NFTs"
                                                        );
                                                      } else {
                                                        setcounter2((prevState) => prevState - 1);
                                                      }
                                                    }
                                                  }}
                                                  style={{ fontSize: "30px", color: "#D40000" }}
                                                >
                                                  <i class="fas fa-chevron-circle-down"></i>
                                                </Button>
                                                <Button className={classes.bw}>{counter2}</Button>{" "}
                                                <Button
                                                  onClick={() => {
                                                    if (counter2 > 10) {
                                                      setcounter2(10);
                                                      toast.error("You can Mint within range of 1-10 NFTs");
                                                    } else {
                                                      if (counter2 == 10) {
                                                        toast.error(
                                                          "You can Mint within range of 1-10 NFTs"
                                                        );
                                                      } else {
                                                        setcounter2((prevState) => prevState + 1);
                                                      }
                                                    }
                                                  }}
                                                  style={{ fontSize: "30px", color: "#D40000" }}
                                                >
                                                  <i class="fas fa-chevron-circle-up"></i>
                                                </Button> */
                        } {
                            !isMintProcessing ? ( <
                                Button onClick = {
                                    async () => {
                                        if (userWalletAddress != "-----") {
                                            if (speificWalletAddress && speificIds) {
                                                if (contractNft) {
                                                    mintSpecificIds();
                                                } else {
                                                    toast.error(
                                                        "You are currently on Wrong Network!"
                                                    );
                                                }
                                            } else {
                                                toast.error("Enter valid value");
                                            }
                                        } else {
                                            toast.error("Please connect your wallet");
                                        }
                                    }
                                }
                                className = {
                                    classes.gw
                                }
                                style = {
                                    {
                                        border: "4px solid #4e4e4e",
                                        borderRadius: "50px",
                                        marginTop: "10px",
                                        marginBottom: "20px",
                                    }
                                } >
                                MINT TBlocks <
                                /Button>
                            ) : ( <
                                Button className = {
                                    classes.gw
                                }
                                style = {
                                    {
                                        border: "4px solid #4e4e4e",
                                        borderRadius: "50px",
                                        marginTop: "25px",
                                    }
                                } >
                                MINTING...
                                <
                                /Button>
                            )
                        } <
                        /Box>
                    ) : ( <
                        Button className = {
                            classes.gw
                        }
                        onClick = {
                            () => {
                                toast.warning("Minting in Progress Please be patient");
                            }
                        }
                        style = {
                            {
                                border: "4px solid #4e4e4e",
                                borderRadius: "50px",
                                marginTop: "25px",
                            }
                        } >
                        MINTING...
                        <
                        /Button>
                    )
                } <
                /Box> <
                /Grid> <
                />
            ) : null
        } <
        /Grid> <
        /div>
    );
};
export default Admin;