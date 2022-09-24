import {
    Grid,
    Typography,
    Box,
    Button,
    useMediaQuery,
    makeStyles,
} from "@material-ui/core";
import tron from "./Assets/tron.png";

import ethsvg from "./Assets/eth.svg";
import "./bridge.css";
import {
    AppContext
} from "../../utils";
import React, {
    useContext
} from "react";
import {
    Checkboxs
} from "../../NftSelectionModal";

import {
    toast
} from "react-toastify";
const useStyle = makeStyles((theme) => ({
    bw: {
        color: theme.palette.secondary.bw,
    },
    gw: {
        color: theme.palette.secondary.gw,
    },
    btntoggle: {
        height: "30px",
        padding: "15px 30px",
        color: "white",
        border: `1px solid ${theme.palette.secondary.btnborder}`,
        margin: "20px auto 20px auto",
        borderRadius: "5px",
        background: theme.palette.secondary.btnbg,
        "&:hover": {
            background: "#FF0000",
        },
    },
    mintedEth: {
        opacity: "0.3",
    },
}));

const BridgeAccount = ({
        isDarkMode,
        userWalletAddress,
        setlogoutopen,
        setActivation,
        userAction,
        setdetailsmodalopen,
        myPunks,
        setethDetailedNft,
        tronWeb
    }) => {
        const matches = useMediaQuery("(min-width:599px)");
        const classes = useStyle();
        // console.log(myPunks);
        const {
            account,
            signer,
            connect,
            chainId,
            disconnect
        } = useContext(AppContext);
        const [isCheck, setIsCheck] = React.useState([]);
        const [fData, setFData] = React.useState([]);
        const [isEthereum, setIsEthereum] = React.useState(false);
        const [_isTron, _setIsTron] = React.useState(false);
        const handleClick = (e) => {
            const {
                id,
                checked
            } = e.target;
            setIsCheck([...isCheck, +id]);
            if (!checked) {
                setIsCheck(isCheck.filter((item) => +item !== +id));
            }
        };


        const ethHandler = React.useCallback(async () => {

            if (!account) {
                return toast.error("Please Connect to your Wallet");
            }


            // let _data = {
            //   account,
            //   isCheck,
            // }
            // const mitEth = await axios.post(ServerURL
            //    + '/ethBridge',_data);
            // console.log(mitEth,"mitEth");
        }, [account, isCheck])





        const SignTransaction = React.useCallback(async () => {

            try {
                // sign a string message

                var str = userWalletAddress;
                // convert to hex format and remove the beginning "0x"
                var hexStrWithout0x = tronWeb.toHex(str).replace(/^0x/, '');
                // conert hex string to byte array
                var byteArray = tronWeb.utils.code.hexStr2byteArray(hexStrWithout0x)
                // keccak256 computing, then remove "0x" 
                var strHash = tronWeb.sha3(byteArray).replace(/^0x/, '');
                // sign 
                var signedStr = await tronWeb.trx.sign(strHash);
                var tail = signedStr.substring(128, 130);
                if (tail == '01') {
                    signedStr = signedStr.substring(0, 128) + '1c';
                } else if (tail == '00') {
                    signedStr = signedStr.substring(0, 128) + '1b';
                }
                // verify the signature
                var res = await tronWeb.trx.verifyMessage(strHash, signedStr, userWalletAddress)
                if (res) {
                    _setIsTron(true);
                } else {
                    _setIsTron(false);
                }
                console.log(res, "res");
            } catch (e) {
                toast.error("Please Connect to your Tron Wallet");
                console.log(e);
            }

            // let toHx = tronWeb.address.toHex(userWalletAddress)
            // var signedStr = await tronWeb.trx.sign(toHx);
            // console.log(signedStr,"signedStr");
            // // verify the signature
            // var res = await tronWeb.trx.verifyMessage(strHash,signedStr,userWalletAddress)
            // // console.log(res,"res");
        }, [tronWeb])


        const getEthItems = React.useCallback(async () => {
            if (isEthereum) {
                const _myEthPunk = myPunks.filter((item) => item.ethSwap === true);
                setFData(_myEthPunk)
            } else {

                setFData(myPunks)
            }
        })
        React.useEffect(() => {
            if (account) {
                getEthItems();
            }
        }, [myPunks, isEthereum]);
        return ( <
                div style = {
                    {
                        padding: "20px 0px 0px 0px",
                        maxWidth: "1460px",
                        margin: "105px auto auto auto",
                    }
                } >
                <
                Grid container > { /* This code is same as XP.NETWORK */ }

                {
                    /* <Grid item xs={6}>
                            <img style={{ width: "100px", height: "50px" }} src={jdoge1} />
                          </Grid>
                          <Grid item xs={6}>
                            <Button style={{ background: "dodgerblue", color: "white" }}>
                              Connect Wallet
                            </Button>
                          </Grid> */
                }

                <
                Grid item xs = {
                    12
                }
                style = {
                    {
                        display: "flex",
                        justifyContent: "center",
                    }
                } >
                <
                Box style = {
                    {
                        width: "100%",
                        textAlign: "center"
                    }
                } > {
                    account ? ( <
                        Button variant = "filled"
                        style = {
                            {
                                border: "1px solid white",
                                borderRadius: "50px",
                                color: "white",
                                marginTop: "25px",
                                marginBottom: "30px",
                                background: "#007ACC",
                            }
                        }
                        onClick = {
                            () => {
                                disconnect();
                            }
                        } >
                        {
                            account ? .slice(0, 6) + "..." + account ? .slice(-4)
                        } <
                        /Button>
                    ) : ( <
                        Button variant = "filled"
                        item className = {
                            classes.btntoggle
                        }
                        onClick = {
                            () => {
                                connect();
                            }
                        } >
                        Connect Wallet <
                        /Button>
                    )
                } <
                /Box> <
                /Grid> <
                Grid item xs = {
                    12
                }
                style = {
                    {
                        display: "flex",
                        justifyContent: "center",
                    }
                } >
                <
                Box display = "flex"
                justifyContent = "center" >
                <
                Button onClick = {
                    () => SignTransaction()
                }
                variant = "filled"
                style = {
                    {
                        border: "1px solid white",
                        borderRadius: "30px",
                        color: "white",
                        marginTop: "25px",
                        marginBottom: "30px",
                        background: "#007ACC",
                        width: "100%",


                    }
                } >
                Sign OwnerShip < /Button> <
                /Box> <
                /Grid>

                { /* Content Starts Here */ }

                <
                Grid container justifyContent = "space-around"
                style = {
                    {
                        marginTop: "30px"
                    }
                } >
                <
                Grid item xs = {
                    12
                }
                md = {
                    8
                }
                style = {
                    {
                        padding: "30px 10px",
                        // background: isDarkMode ? "grey" : "white",
                        width: "100%",
                        maxWidth: "750px",
                        // borderRadius: "20px",
                        // border: "2px solid white",
                        border: "6px outset rgb(142, 142, 142)",
                        marginBottom: "30px",
                    }
                } >

                <
                Box style = {
                    {
                        borderRadius: "10px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }
                } >
                <
                Typography className = {
                    classes.bw
                } > Your NFTs on < /Typography>   <
                Box >
                <
                Button onClick = {
                    () => setIsEthereum(false)
                }
                style = {
                    {
                        background: isDarkMode ? "#F7F8F9" : "#D3D3D3",
                        border: "2px solid white",
                        borderRadius: "10px",
                        marginLeft: "15px",
                    }
                } >
                <
                img style = {
                    {
                        width: "25px",
                        height: "25px",
                        marginRight: "10px"
                    }
                }
                src = {
                    tron
                }
                alt = ""

                /
                > {
                    " "
                } <
                span > Tron < /span>

                <
                /Button> {
                    _isTron && < Button
                    onClick = {
                        () => setIsEthereum(true)
                    }
                    style = {
                            {
                                background: isDarkMode ? "#F7F8F9" : "#D3D3D3",
                                border: "2px solid white",
                                borderRadius: "14px",
                                marginLeft: "15px",
                            }
                        } >
                        <
                        img
                    style = {
                        {
                            width: "25px",
                            height: "25px",
                            marginRight: "10px"
                        }
                    }
                    src = {
                        ethsvg
                    }
                    alt = "" /
                        > {
                            " "
                        } <
                        span > ETHEREUM < /span>

                        <
                        /Button>} <
                        /Box> <
                        /Box>

                        <
                        Grid
                    container
                    className = "scrollclass"
                    justifyContent = "center"
                    style = {
                            {
                                marginTop: "20px",
                                overflow: "Scroll",
                                height: "600px",
                                overflowX: "hidden",
                            }
                        } >
                        {+fData.length > 0 ? fData.map((obj, index) => {
                                    return ( <
                                        div key = {
                                            index
                                        } >
                                        <
                                        Grid item xs = {
                                            11
                                        }
                                        sm = {
                                            11
                                        }
                                        md = {
                                            11
                                        }
                                        style = {
                                            {
                                                textAlign: "center"
                                            }
                                        } >
                                        <
                                        Box style = {
                                            {
                                                borderRadius: "10px",
                                                width: "100%",
                                                maxWidth: "170px",
                                                background: isDarkMode ? "white" : "#D3D3D3",
                                                color: "#627EEA",
                                                margin: "0px auto 30px auto",
                                            }
                                        } >
                                        <
                                        img style = {
                                            {
                                                borderRadius: "8px",
                                                width: "100%",

                                            }
                                        }
                                        src = {
                                            obj.nftimage
                                        }
                                        className = {
                                            isEthereum ? "" : obj.ethSwap ? classes.mintedEth : ""
                                        }
                                        alt = "" /
                                        >

                                        <
                                        Typography style = {
                                            {
                                                color: "#2e2e2e"
                                            }
                                        } >
                                        Token - URI: {
                                            obj.mintId
                                        } <
                                        /Typography> <
                                        Typography style = {
                                            {
                                                color: "#2e2e2e"
                                            }
                                        } >
                                        ID: {
                                            obj.nftid
                                        } <
                                        /Typography> <
                                        Typography style = {
                                            {
                                                color: "#2e2e2e"
                                            }
                                        } >
                                        Type: {
                                            obj.nftattributes[0].Type
                                        } <
                                        /Typography> {
                                            obj.stakingStatus === true ? < Typography style = {
                                                    {
                                                        color: "red"
                                                    }
                                                } >
                                                Staked <
                                                /Typography>:""} <
                                                Box mt = {
                                                    1
                                                } >
                                                <
                                                Button
                                            onClick = {
                                                () => {
                                                    setethDetailedNft(obj);
                                                    setdetailsmodalopen(true);
                                                }
                                            }
                                            style = {
                                                    {
                                                        background: "#039BE5",
                                                        color: "white",
                                                        width: "80%",
                                                    }
                                                } >
                                                NFT Details < /Button> <
                                                /Box> <
                                                Box mt = {
                                                    1
                                                } >
                                                <
                                                Checkboxs
                                            id = {
                                                obj.nftid
                                            }
                                            type = "checkbox"
                                            name = {
                                                obj.nftOwner
                                            }
                                            handleClick = {
                                                handleClick
                                            }
                                            isChecked = {
                                                isCheck.includes(obj.nftid)
                                            }
                                            disabled = {
                                                obj.ethSwap
                                            }
                                            /> <
                                            /Box> <
                                            /Box> <
                                            /Grid> <
                                            /div>
                                        );
                                    }): < Box style = {
                                    {
                                        color: "red"
                                    }
                                }
                                fontSize = "1rem" >
                                Please connect to Tron and mint NFTs < /Box>} <
                                /Grid> <
                                /Grid> <
                                Grid item xs = {
                                    12
                                }
                                md = {
                                    4
                                }
                                style = {
                                    {
                                        // background: isDarkMode ? "grey" : "white",
                                        // borderRadius: "20px",
                                        border: "6px outset rgb(142, 142, 142)",
                                        padding: "30px 22px",
                                        width: "100%",
                                        maxWidth: "750px",

                                        marginBottom: "30px",
                                    }
                                } >
                                <
                                Box style = {
                                    {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }
                                } >
                                <
                                Typography className = {
                                    classes.bw
                                } > Destination < /Typography> <
                                Button style = {
                                    {
                                        background: isDarkMode ? "#F7F8F9" : "#D3D3D3",
                                        border: "2px solid white",
                                        borderRadius: "14px",
                                        marginLeft: "15px",
                                    }
                                } >
                                <
                                img style = {
                                    {
                                        width: "25px",
                                        height: "25px",
                                        marginRight: "10px"
                                    }
                                }
                                src = {
                                    ethsvg
                                }
                                />{" "} <
                                span > ETHEREUM < /span> <
                                i style = {
                                    {
                                        marginLeft: "10px"
                                    }
                                }

                                >
                                < /i> <
                                /Button> <
                                /Box>

                                <
                                Box textAlign = "center" >
                                <
                                input style = {
                                    {
                                        background: "white",
                                        borderRadius: "12px",
                                        color: "black",
                                        border: "2px solid #2e2e2e",
                                        width: "80%",
                                        height: "40px",
                                        textIndent: "9px",
                                        marginTop: "20px",
                                    }
                                }
                                placeholder = "Paste your Destination Address"
                                type = "text"
                                value = {
                                    account
                                }
                                disabled = {!_isTron
                                }
                                /> <
                                hr style = {
                                    {
                                        marginTop: "28px"
                                    }
                                }
                                /> <
                                /Box> <
                                Box alignItems = "center"
                                display = "flex"
                                // justifyContent="space-around"
                                >
                                <
                                Box >
                                MINT ON ETH <
                                /Box> <
                                Box
                                //  display="flex"
                                //  justifyContent="center"
                                pl = {
                                    12
                                } >
                                <
                                Button onClick = {
                                    () => ethHandler()
                                }
                                variant = "contained"
                                style = {
                                    {
                                        padding: ".5rem 1.5rem"
                                    }
                                }
                                disabled = {!_isTron
                                } >
                                MINT < /Button> <
                                /Box> <
                                /Box> <
                                /Grid> <
                                /Grid>

                                { /* Footer Starts Here */ }

                                <
                                Grid item container xs = {
                                    12
                                }
                                style = {
                                    {
                                        marginTop: "20px",
                                        marginBottom: "20px",

                                        padding: "20px 0px 0px 0px",
                                    }
                                } >
                                <
                                Grid item xs = {
                                    12
                                }
                                sm = {
                                    5
                                }
                                container style = {
                                    {
                                        marginTop: "10px",
                                        padding: matches ? "0px 0px 0px 40px" : "0px 0px 0px 0px",
                                    }
                                }
                                justifyContent = {
                                    matches ? "flex-start" : "center"
                                } >
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
                                /Grid>

                                <
                                /Grid> <
                                /Grid> <
                                /div>
                            );
                        };

                    export default BridgeAccount;