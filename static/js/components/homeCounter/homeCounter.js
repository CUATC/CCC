import {
    Box,
    Button,
    Container,
    Typography,
    makeStyles,

} from "@material-ui/core";

import {
    useState
} from "react";
import {
    Link
} from "react-router-dom";
import {
    toast
} from "react-toastify";


import "./homecounter.css";
import Switch from "react-switch";
import {
    environment
} from "../../environment";


// Theme code

const useStyle = makeStyles((theme) => ({
    bw: {
        color: theme.palette.secondary.bw,
    },
    gw: {
        color: theme.palette.secondary.gw,
    },
}));

const HomeCounter = ({
        userWalletAddress,
        nftPrice,
        nftPriceToken,
        totalSupply,
        setlogoutopen,
        userAction,
        setActivation,
        galleryPunks,
        totalAvailable,
        setMintArray,
        setBuyConfirmation,
        isMintProcessing,
        setisMintProcessing,
        setmintNumber,
        setMongoIds,
        contractNft,
        setloading,
        setisTrc20,
        isTrc20,
        allowance,
        nftTokenprice,
        tronWeb,
        balanceOf,
        contractToken,
        setupdateInfo,
        setairdropState,
        loading,
        setrandomSelectionIds,
        // _NftMint,
    }) => {
        const [counter2, setcounter2] = useState(1);
        // const [nftPrice, setnftPrice] = useState("Connect Wallet");
        // const [nftPriceToken, setnftPriceToken] = useState("Connect Wallet");
        // const [totalAvailable, settotalAvailable] = useState("Connect Wallet");
        // const [totalSupply, settotalSupply] = useState("Connect Wallet");
        const classes = useStyle();

        // approval function

        // const _mintNftTRX = async () => {};

        const approveTokenTransaction = async () => {
            try {
                toast.success("TRC20 Minting...");

                const approveTokenresponse = await contractToken
                    .approve(environment.contractAddressNFT, balanceOf)
                    .send();
                const transaction = setInterval(() => {
                    tronWeb.trx
                        .getUnconfirmedTransactionInfo(approveTokenresponse.toString())
                        .then(async (value) => {
                            if (value.receipt.result == "SUCCESS") {
                                clearInterval(transaction);
                                setmintNumber(+counter2);
                                setBuyConfirmation(true);
                                setisMintProcessing(true);
                            } else {
                                toast.error("Failed to Approve");
                                clearInterval(transaction);
                                setloading(false);
                            }
                        })
                        .catch((value) => {
                            console.log("error", value);
                        });
                }, 2000);
            } catch (error) {
                setloading(false);
                console.log(error.message, "error");
            }
        };

        return ( <
            div style = {
                {
                    maxWidth: "1232px",
                    margin: "8px auto"
                }
            } >
            <
            Box textAlign = "center"
            style = {
                {
                    padding: "20px 0px",
                    border: "6px outset #8e8e8e",
                }
            } >
            <
            Container >
            <
            Typography style = {
                {
                    fontSize: "30px",
                    fontWeight: "bold"
                }
            }
            variant = "h5"
            fontSize = {
                {
                    xs: "16px",
                    md: "30px"
                }
            }
            className = {
                classes.twoVW + " " + classes.gw
            } >
            You can Mint up to 10 TBlocks at once <
            /Typography>

            {
                userWalletAddress || userAction == 200 ? ( <
                        div > {
                            userWalletAddress ? < Button
                            className = {
                                classes.gw
                            }
                            variant = "outlined"
                            bgcolor = "transparent"
                            style = {
                                {
                                    border: "4px solid #4e4e4e",
                                    borderRadius: "50px",
                                    marginTop: "25px",
                                }
                            }
                            onClick = {
                                () => {
                                    setlogoutopen(true);
                                }
                            } >
                            {
                                userWalletAddress && userWalletAddress ? .slice(0, 6) +
                                "..." +
                                userWalletAddress ? .slice(-4)
                            } <
                            /Button>:<Button   className={classes.gw}
                            variant = "outlined"
                            bgcolor = "transparent"
                            style = {
                                {
                                    border: "4px solid #4e4e4e",
                                    borderRadius: "50px",
                                    marginTop: "25px",
                                }
                            } > Loading... < /Button>  }

                            {
                                userWalletAddress == "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW" ||
                                    userWalletAddress == "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW" ||
                                    userWalletAddress == "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW" ? ( <
                                        Link style = {
                                            {
                                                textDecoration: "none"
                                            }
                                        }
                                        to = "/admin" >
                                        <
                                        Button className = {
                                            classes.gw
                                        }
                                        variant = "outlined"
                                        bgcolor = "transparent"
                                        style = {
                                            {
                                                border: "4px solid #4e4e4e",
                                                borderRadius: "50px",
                                                marginTop: "25px",
                                                marginLeft: "10px",
                                            }
                                        } >
                                        Admin_Panel <
                                        /Button> <
                                        /Link>
                                    ) : null
                            } <
                            /div>
                        ): ( <
                            div > {
                                " "
                            } <
                            Button variant = "outlined"
                            bgcolor = "transparent"
                            style = {
                                {
                                    border: "4px solid #4e4e4e",
                                    borderRadius: "50px",
                                    marginTop: "25px",
                                }
                            }
                            className = {
                                classes.gw
                            }
                            onClick = {
                                () => {
                                    setActivation(true);
                                }
                            } >
                            Connect Wallet <
                            /Button> <
                            /div>
                        )
                    } <
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
                            i className = "fas fa-chevron-circle-down" > < /i> <
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
                            i className = "fas fa-chevron-circle-up" > < /i> <
                            /Button> <
                            br / > {!isMintProcessing ? ( <
                                    Button onClick = {
                                        async () => {
                                            if (!userWalletAddress) {
                                                return toast.error("Please connect your wallet");
                                            }
                                            if (counter2 <= 0 && counter2 >= 10) {
                                                return toast.error("Enter valid value");
                                            }
                                            setairdropState(false);
                                            if (contractNft) {
                                                if (galleryPunks.length > 0) {
                                                    setupdateInfo(true);
                                                    setloading(true);
                                                    if (isTrc20 && allowance < nftTokenprice * counter2) {
                                                        await approveTokenTransaction();
                                                    } else {
                                                        // _NftMint(+counter2);
                                                        setmintNumber(+counter2);
                                                        setBuyConfirmation(true);
                                                        setisMintProcessing(true);
                                                    }
                                                } else {
                                                    toast.error("Please wait Data is not processed yet");
                                                }
                                            } else {
                                                toast.error("You are currently on Wrong Network!");
                                            }
                                            // } else {
                                            //   toast.error("Enter valid value");
                                            // }
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
                            Box style = {
                                {
                                    marginTop: "10px"
                                }
                            } >
                            <
                            Switch onChange = {
                                () => {
                                    setisTrc20((prev) => !prev);
                                }
                            }
                            checked = {
                                isTrc20
                            }
                            /> {
                                /* <label class="switch">
                                                  <input
                                                    onClick={() => {
                                                      setisTrc20((prev) => !prev);
                                                    }}
                                                    type="checkbox"
                                                  />
                                                  <span class="slider round"></span>
                                                </label> */
                            } <
                            /Box> <
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
                    }

                    <
                    Typography
                className = {
                    classes.gw
                }
                paragraph
                style = {
                    {
                        marginTop: "20px",
                        fontWeight: "bold"
                    }
                }
                fontSize = {
                        {
                            xs: "16px",
                            md: "30px"
                        }
                    } >
                    Minting with: {
                        isTrc20 ? "TRC20" : "TRX"
                    } <
                    /Typography>

                    <
                    Typography
                className = {
                    classes.gw
                }
                paragraph
                style = {
                    {
                        marginTop: "20px",
                        fontWeight: "bold"
                    }
                }
                fontSize = {
                        {
                            xs: "16px",
                            md: "30px"
                        }
                    } >
                    Total Supply: {
                        totalSupply
                    } <
                    /Typography> <
                    Typography
                className = {
                    classes.gw
                }
                paragraph
                style = {
                    {
                        marginTop: "20px",
                        fontWeight: "bold"
                    }
                }
                fontSize = {
                        {
                            xs: "16px",
                            md: "30px"
                        }
                    } >
                    Total Available: {
                        totalAvailable
                    } <
                    /Typography> <
                    Typography
                className = {
                    classes.gw
                }
                paragraph
                style = {
                    {
                        fontWeight: "bold"
                    }
                }
                fontSize = {
                        {
                            xs: "16px",
                            md: "30px"
                        }
                    } >
                    NFT Price: {
                        isTrc20 ? nftPriceToken : nftPrice
                    } { /* NFT Price: {isTrc20 ? "9" : "1"} */ } <
                    /Typography> <
                    /Container> <
                    /Box> <
                    /div>
            );
        };

        export default HomeCounter;