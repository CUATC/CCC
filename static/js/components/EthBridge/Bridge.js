import React from "react";
import {
    Box,
    Button,
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
// Images Import

import tron from "./Assets/tron.png";
import eth from "./Assets/eth.png";
import swap from "./Assets/swap.svg";
import {
    toast
} from "react-toastify";

import "./bridge.css";
import {
    Link
} from "react-router-dom";
import {
    useContext
} from "react";
import {
    AppContext
} from "../../utils";

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
}));

const Bridge = ({
    isDarkMode,
    userWalletAddress,
    setlogoutopen,
    setActivation,
    userAction,
}) => {
    const classes = useStyle();
    const matches = useMediaQuery("(min-width:599px)");
    const matches2 = useMediaQuery("(max-width:450px)");

    const {
        account,
        signer,
        connect,
        disconnect,
        chainId
    } =
    useContext(AppContext);

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
        {
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
                        // setlogoutopen(true);
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
                    async () => {
                        await connect();
                        // setActivation(true);
                    }
                } >
                Connect Wallet <
                /Button>
            )
        } <
        /Grid>

        { /* Content Starts Here */ }

        <
        Grid container justifyContent = "space-around"
        style = {
            {
                marginTop: "30px"
            }
        } >
        {
            /* <Grid
                        className="girdclass"
                        item
                        xs={12}
                        md={5}
                        style={{
                          padding: "10px 10px",
                          background: isDarkMode ? "grey" : "white",
                          width: "100%",
                          maxWidth: "750px",
                          borderRadius: "20px",
                          marginBottom: "30px",
                        }}
                      >
                        <Carousel slides={slides} autoplay={true} interval={3000} />
                      </Grid> */
        } <
        Grid item xs = {
            12
        }
        md = {
            8
        }
        style = {
            {
                // background: isDarkMode ? "grey" : "white",
                // borderRadius: "20px",
                border: "6px outset rgb(142, 142, 142)",
                padding: "30px 10px",
                width: "100%",
                maxWidth: "750px",
                textAlign: "center",
                marginBottom: "30px",
            }
        } >
        <
        Typography className = {
            classes.bw
        }
        style = {
            {
                fontSize: "20px",
                fontWeight: "bold"
            }
        } >
        Transfer NFTs between Blockchains <
        /Typography>

        <
        Box justifyContent = {
            "flex-start"
        }
        alignItems = "center"
        className = {
            classes.bw
        }
        style = {
            {
                display: "flex",
                background: "#24ACF2",
                padding: "10px 14px",
                width: matches2 ? "80%" : "50%",
                margin: "20px auto 10px auto",
                borderRadius: "10px",
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
        />{" "}
        TRON <
        Box style = {
            {
                width: "100%",
                textAlign: "right"
            }
        } >
        <
        i class = "fa-solid fa-caret-down" > < /i> <
        /Box> <
        /Box>

        <
        Box style = {
            {
                marginTop: "-20px"
            }
        } >
        <
        img src = {
            swap
        }
        /> <
        /Box>

        <
        Box justifyContent = {
            "flex-start"
        }
        alignItems = "center"
        className = {
            classes.bw
        }
        style = {
            {
                display: "flex",
                background: "#24ACF2",
                padding: "10px 14px",
                width: matches2 ? "80%" : "50%",
                margin: "-10px auto 0px auto",
                borderRadius: "10px",
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
            eth
        }
        />{" "}
        ETHEREUM <
        Box style = {
            {
                width: "100%",
                textAlign: "right"
            }
        } >

        <
        /Box> <
        /Box> {
            account ? ( <
                Link to = "/bridgeAccount"
                style = {
                    {
                        textDecoration: "none"
                    }
                } >
                <
                Button style = {
                    {
                        background: "#24ACF2",
                        padding: "10px 14px",
                        width: matches2 ? "80%" : "50%",
                        margin: "20px auto 10px auto",
                        borderRadius: "10px",
                    }
                }
                className = {
                    classes.bw
                } >
                Continue Bridging <
                /Button> <
                /Link>
            ) : ( <
                Button onClick = {
                    () => {
                        toast.error("Please connect your Wallet");
                    }
                }
                style = {
                    {
                        background: "#24ACF2",
                        padding: "10px 14px",
                        width: matches2 ? "80%" : "50%",
                        margin: "20px auto 10px auto",
                        borderRadius: "10px",

                    }
                }
                className = {
                    classes.bw
                } >
                Continue Bridging <
                /Button>
            )
        } <
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
                marginLeft: "9px",
                fontSize: "30px",
            }
        }
        class = "fas fa-sticky-note" >
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

export default Bridge;