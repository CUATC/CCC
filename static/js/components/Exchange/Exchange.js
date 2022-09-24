import {
    Box,
    Button,
    Grid,
    makeStyles,
    TextField,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import React from "react";
import ccard from "./assets/ccard.svg";

import one from "./assets/one.svg";
import two from "./assets/two.svg";
import three from "./assets/three.svg";
import tick from "./assets/tick.svg";
import right from "./assets/right.svg";

import trc from "./assets/trc.svg";
import tbl from "./assets/tbl.svg";
import "./exchange.css";

import {
    parseUnits,
    formatUnits
} from "@ethersproject/units";
import {
    toast
} from "react-toastify";
import {
    environment
} from "../../environment";
import ProgressBar from "./progress";
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

const Exchange = ({

        userWalletAddress,
        userAction,
        setlogoutopen,
        setActivation,
        accountBalance,
        balanceOf,
        contractExchange,
        contractToken,
        setloading,
        loading,
        tronWeb,
        allowanceExchange,
        setupdateInfo,
        updateInfo,
        homeCounterinfo,
        ExchangeBuyPrice,
        ExchangeSellPrice,
        btoken,
        init4,
    }) => {
        const [action, setaction] = React.useState({
            buy: true,
            sell: false
        });
        const [youPay, setyouPay] = React.useState("");
        const [youGet, setyouGet] = React.useState("");

        // Exchange rate


        const matches2 = useMediaQuery("(max-width:675px)");
        const matches3 = useMediaQuery("(max-width:959px)");
        const classes = useStyle();

        const _init = async () => {
            try {
                if (accountBalance > 0 && contractExchange && +balanceOf) {
                    if (action.buy && Number(accountBalance) >= 0) {
                        setyouPay(parseInt(accountBalance));
                        let ExchangeBuyPrice = await contractExchange
                            .TRXToToken(parseInt(accountBalance))
                            .call();
                        setyouGet(parseInt(ExchangeBuyPrice));
                        // setyouGet(parseInt(accountBalance * 10));
                    } else if (action.sell && Number(balanceOf) >= 0) {
                        setyouPay(parseInt(formatUnits(balanceOf, 6)));
                        let ExchangeSellPrice = await contractExchange
                            .TokenToTRX(+balanceOf)
                            .call();

                        setyouGet(parseInt(formatUnits(ExchangeSellPrice, 6)));
                        // setyouGet(Number(formatUnits(balanceOf, 6)) / 200);
                    }
                }
            } catch (e) {
                console.log(e);
            }
        };

        React.useEffect(() => {

            if (contractExchange && accountBalance && updateInfo) {
                _init();
            }

        }, [accountBalance, updateInfo, contractExchange, balanceOf, action]);

        // const maxSupply = () => {
        //   if (action.buy && Number(accountBalance) >= 0) {
        //     setyouPay(accountBalance);

        //     setyouGet(accountBalance * 100);
        //   } else if (action.sell && Number(balanceOf) >= 0) {
        //     setyouPay(Number(formatUnits(balanceOf, 6)));
        //     setyouGet(Number(formatUnits(balanceOf, 6)) / 200);
        //   }
        // };



        const approveTokenTransaction = async () => {
            try {
                setloading(true);
                const approveTokenresponse = await contractToken
                    .approve(environment.exchangeAddress, balanceOf)
                    .send();


                const transaction = setInterval(() => {
                    tronWeb.trx
                        .getUnconfirmedTransactionInfo(approveTokenresponse.toString())
                        .then(async (value) => {
                            if (value.receipt.result == "SUCCESS") {
                                clearInterval(transaction);
                                toast.success("Successfully approved");
                                transactionExchange();
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

        const transactionExchange = async () => {
            try {
                setloading(true);
                if (action.buy) {
                    if (Number(youPay) > 0) {
                        const ExchangeBuyresponse = await contractExchange
                            .Buy()
                            .send({
                                callValue: parseUnits(youPay, 6)
                            });
                        toast.warning(
                            "Please wait you will be notified further after the Transaction"
                        );
                        const transaction = setInterval(() => {
                            tronWeb.trx
                                .getUnconfirmedTransactionInfo(ExchangeBuyresponse.toString())
                                .then(async (value) => {
                                    if (value.receipt.result == "SUCCESS") {
                                        clearInterval(transaction);
                                        toast.success("Successfully Bought");
                                        setloading(false);
                                    } else {
                                        toast.error("Failed");
                                        setloading(false);
                                        clearInterval(transaction);
                                    }
                                })
                                .catch((value) => {
                                    console.log("error", value);
                                });
                        }, 10000);
                    } else {
                        setloading(false);
                        toast.error("Please Enter a Valid Value");
                    }
                } else if (action.sell) {
                    // contractExchange
                    try {
                        if (youPay > 0) {
                            // console.log(typeof youPay, "you pay inner");

                            const ExchangeSellresponse = await contractExchange
                                .Sell(parseUnits(youPay.toString(), 6))
                                .send();

                            toast.warning(
                                "Please wait you will be notified further after the Transaction"
                            );
                            const transaction = setInterval(() => {
                                tronWeb.trx
                                    .getUnconfirmedTransactionInfo(ExchangeSellresponse.toString())
                                    .then(async (value) => {
                                        if (value.receipt.result == "SUCCESS") {
                                            clearInterval(transaction);
                                            toast.success("Successfully Sold");
                                            setloading(false);
                                        } else {
                                            toast.error("Failed");
                                            setloading(false);

                                            clearInterval(transaction);
                                        }
                                    })
                                    .catch((value) => {
                                        console.log("error", value);
                                    });
                            }, 10000);
                        } else {
                            toast.error("Please Enter a valid value");
                            setloading(false);
                        }
                    } catch (error) {
                        console.log(error.message);
                        setloading(false);
                    }
                }
                await homeCounterinfo();
                // init4();
                // _init();
            } catch (error) {
                setloading(false);
                console.log(error.message);
            }
            setupdateInfo(true);
        };

        const ValidationValues = async (value, contractExchange) => {
            try {
                if (action.buy && +value >= 0 && contractExchange) {
                    if (+value <= +accountBalance) {
                        setyouPay(value);
                        let ExchangeBuyPrice = await contractExchange
                            .TRXToToken(parseUnits(value, 6))
                            .call();
                        setyouGet(+formatUnits(ExchangeBuyPrice, 6));
                    } else {
                        toast.error("You have insufficient");
                    }
                } else if (action.sell && +value >= 0 && contractExchange) {
                    if (+value <= +formatUnits(balanceOf, 6)) {
                        setyouPay(value);
                        let ExchangeSellPrice = await contractExchange
                            .TokenToTRX(+parseUnits(value, 6))
                            .call();
                        setyouGet(+formatUnits(ExchangeSellPrice, 6));
                    } else {
                        toast.error("You have insufficient");
                    }
                }
            } catch (error) {}
        };

        React.useEffect(() => {
            (async () => {
                if (contractToken && contractExchange) {
                    await homeCounterinfo();
                    // init4();
                }
            })();
        }, [contractExchange, contractToken]);

        return ( <
            div style = {
                {
                    marginTop: "105px"
                }
            } >
            <
            Box style = {
                {
                    padding: "20px 0px 20px 0px",
                    maxWidth: "1460px",
                    margin: "auto",
                }
            } >
            <
            Box style = {
                {
                    width: "100%",
                    textAlign: "center"
                }
            }
            pb = {
                4
            } > {
                userWalletAddress || userAction == 200 ? ( <
                    div > {
                        userWalletAddress ? < Button
                        variant = "filled"
                        style = {
                            {
                                border: "1px solid white",
                                borderRadius: "50px",
                                color: "white",
                                marginTop: "15px",
                                marginBottom: "30px",
                                background: "#007ACC",
                            }
                        }
                        onClick = {
                            () => {
                                setlogoutopen(true);
                            }
                        } >
                        {
                            userWalletAddress ? .slice(0, 6) +
                            "..." +
                            userWalletAddress ? .slice(-4)
                        } <
                        /Button>: <
                        Button
                        variant = "filled"
                        style = {
                            {
                                border: "1px solid white",
                                borderRadius: "50px",
                                color: "white",
                                marginTop: "15px",
                                marginBottom: "30px",
                                background: "#007ACC",
                            }
                        }

                        >
                        Loading...
                        <
                        /Button>} <
                        /div>
                    ): ( <
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
                /Box>

                { <
                    Box
                    style = {
                            {
                                width: "100%",
                                textAlign: "center",
                                margin: "-20px auto 20px auto",
                            }
                        } >
                        <
                        Button
                    variant = "filled"
                    style = {
                        {
                            border: "1px solid white",
                            borderRadius: "50px",
                            color: "white",
                            // marginTop: "5px",
                            marginBottom: "20px",
                            background: "red",
                        }
                    }
                    onClick = {
                            async () => {
                                if (userWalletAddress) {
                                    setupdateInfo(true);

                                    // setloading(true);
                                    // await homeCounterinfo();
                                    // setloading(false);
                                } else {
                                    toast.error("Please connect your wallet");
                                }
                            }
                        } >
                        Refresh Data <
                        /Button> <
                        /Box>
                }

                <
                Grid container justifyContent = "space-around" >
                <
                Grid item xs = {
                    12
                }
                md = {
                    5
                }
                style = {
                    {
                        padding: "50px"
                    }
                } >
                <
                Typography variant = "h4"
                className = {
                    classes.gw
                } >
                Crypto Exchange <
                /Typography> <
                Typography paragraph className = {
                    classes.gw
                } >
                Fast Crypto Swaps,
                Free of Custody <
                /Typography> <
                ProgressBar btoken = {
                    btoken
                }
                bgcolor = "#FF0000"
                height = {
                    18
                }
                /> <
                Box mt = {
                    3
                } >
                <
                Box
                style = {
                    {
                        display: "flex",
                        alignItems: "center",
                        background: "rgba(0, 0, 0, 0.09)",
                        padding: ".2rem",
                        justifyContent: "space-between",
                        borderRadius: 10,
                    }
                } >
                <
                Typography
                style = {
                    {
                        color: "#4e4e4e",
                        padding: "0px 0px 0px 10px",
                    }
                } >
                TBL <
                /Typography> <
                Box alignItems = "center"
                display = "flex" >
                <
                span
                style = {
                    {
                        color: "black",
                        fontSize: "1.1rem",
                    }
                } >
                {
                    balanceOf ? Number(formatUnits(balanceOf, 6)) : 0
                } & nbsp; <
                /span> <
                img
                style = {
                    {
                        width: "100%",
                        maxWidth: "25px",
                        height: "auto",
                    }
                }
                src = {
                    tbl
                }
                alt = "tbl" /
                >
                <
                /Box> <
                /Box> <
                /Box> <
                /Grid> <
                Grid
                style = {
                    {
                        // borderRadius: "14px",
                        // background: isDarkMode ? "#808080" : "#B5B5B5",
                        border: "6px outset rgb(142, 142, 142)",
                        padding: "20px 0px 40px 0px",
                    }
                }
                item
                xs = {
                    12
                }
                md = {
                    6
                } >
                <
                Box
                style = {
                    {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                } >
                <
                Typography
                paragraph
                style = {
                    {
                        marginTop: "18px",
                        marginRight: "10px",
                    }
                }
                className = {
                    classes.gw
                } >
                Buy / Sell Crypto <
                /Typography>

                <
                img
                style = {
                    {
                        width: "100%",
                        maxWidth: "40px",
                        height: "auto"
                    }
                }
                src = {
                    ccard
                }
                /> <
                /Box> <
                Box
                style = {
                    {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }
                } >
                <
                TextField
                id = "filled-number"
                label = "You Pay"
                type = "number"
                min = {
                    0
                }
                max = {
                    action.buy ? accountBalance : action.sell ? balanceOf : null
                }
                value = {
                    youPay
                }
                onChange = {
                    (event) => {
                        ValidationValues(event.target.value, contractExchange);
                    }
                }
                InputLabelProps = {
                    {
                        shrink: true,
                    }
                }
                style = {
                    {
                        background: "#FFFFFF",
                        borderRadius: "8px",
                        width: matches2 ? "95%" : "80%",
                        margin: "auto",
                    }
                }
                variant = "filled"
                InputProps = {
                    {
                        endAdornment: ( <
                            > {
                                action.buy ? ( <
                                    Box style = {
                                        {
                                            display: "flex",
                                            alignItems: "center"
                                        }
                                    } >
                                    <
                                    img style = {
                                        {
                                            width: "100%",
                                            maxWidth: "25px",
                                            height: "auto",
                                        }
                                    }
                                    src = {
                                        trc
                                    }
                                    /> <
                                    Typography style = {
                                        {
                                            color: "#4e4e4e",
                                            padding: "0px 0px 0px 10px",
                                        }
                                    } >
                                    TRX <
                                    /Typography> <
                                    i style = {
                                        {
                                            color: "#4e4e4e",
                                            padding: "0px 20px 0px 30px",
                                        }
                                    }
                                    class = "fa-solid fa-caret-down" >
                                    < /i> <
                                    /Box>
                                ) : ( <
                                    Box style = {
                                        {
                                            display: "flex",
                                            alignItems: "center"
                                        }
                                    } >
                                    <
                                    img style = {
                                        {
                                            width: "100%",
                                            maxWidth: "25px",
                                            height: "auto",
                                        }
                                    }
                                    src = {
                                        tbl
                                    }
                                    /> <
                                    Typography style = {
                                        {
                                            color: "#4e4e4e",
                                            padding: "0px 0px 0px 10px",
                                        }
                                    } >
                                    TBL <
                                    /Typography> <
                                    i style = {
                                        {
                                            color: "#4e4e4e",
                                            padding: "0px 20px 0px 30px",
                                        }
                                    }
                                    class = "fa-solid fa-caret-down" >
                                    < /i> <
                                    /Box>
                                )
                            } <
                            />
                        ),
                    }
                }
                /> <
                /Box> {
                    /* <Box style={{ width: "100%", textAlign: "center" }}>
                                  <Button
                                    onClick={() => {
                                      maxSupply();
                                      // if (action.buy) {
                                      //   setyouPay(accountBalance);
                                      // } else if (action.sell) {
                                      //   setyouPay(balanceOf);
                                      // }
                                    }}
                                    style={{
                                      background: "red",
                                      color: "white",
                                      borderRadius: "16px",
                                      marginTop: "10px",
                                    }}
                                  >
                                    Max
                                  </Button>
                                </Box> */
                }

                <
                Grid
                container
                style = {
                    {
                        width: matches2 ? "95%" : "80%",
                        margin: "5px auto 0px auto",
                    }
                } >
                <
                Grid item xs = {
                    12
                }
                md = {
                    8
                } > { /* <Typography className={classes.gw}>No extra Fees</Typography> */ } <
                br / >
                <
                br / >
                <
                Typography className = {
                    classes.gw
                } > {
                    action.buy ?
                    `Estimated rate: 1 TRX : ${ExchangeBuyPrice} TBL` :
                        `Estimated rate: ${ExchangeSellPrice} TBL : 1 TRX`
                } <
                /Typography> <
                /Grid> <
                Grid
                item
                xs = {
                    12
                }
                md = {
                    4
                }
                style = {
                    {
                        display: "flex",
                        justifyContent: "flex-end",
                    }
                } >
                <
                Box
                style = {
                    {
                        width: "75%",
                        margin: "20px auto 10px auto",
                        padding: "4px",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "space-around",
                    }
                } >
                <
                Button
                onClick = {
                    () => {
                        setaction({
                            buy: true,
                            sell: false
                        });
                        setyouPay(accountBalance);
                        setyouGet(accountBalance * 100);
                        // setyouPay(accountBalance * 100);
                    }
                }
                style = {
                    {
                        background: action.buy ? "#3E3F57" : "#3E3F57",
                        color: action.buy ? "#00C26F" : "grey",
                        borderRadius: "10px",
                    }
                } >
                Buy {
                    " "
                } <
                i
                style = {
                    {
                        color: action.buy ? "#00C26F" : "grey",
                        fontSize: "14px",
                        marginLeft: "6px",
                    }
                }
                className = "fa-solid fa-arrow-up-long" >
                < /i> <
                /Button> {
                    /* <Button
                                        onClick={() => {
                                          setaction({ buy: false, sell: true });
                                          setyouPay(Number(formatUnits(balanceOf, 6)));
                                          setyouGet(Number(formatUnits(balanceOf, 6)) / 200);
                                          // setyouPay(balanceOf / 100);
                                        }}
                                        style={{
                                          background: action.sell ? "#3E3F57" : "#3E3F57",
                                          color: action.sell ? "#00C26F" : "grey",
                                          borderRadius: "10px",
                                        }}
                                      >
                                        Sell{" "}
                                        <i
                                          style={{
                                            background: "#3E3F57",
                                            color: action.sell ? "#00C26F" : "grey",
                                            marginLeft: "6px",
                                          }}
                                          className="fa-solid fa-arrow-down-long"
                                        ></i>
                                      </Button> */
                } <
                /Box> <
                /Grid> <
                /Grid>

                <
                Box
                style = {
                    {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        //marginTop: "20px",
                        marginBottom: "10px",
                    }
                } >
                { /* {console.log(action, "action")} */ } <
                TextField
                id = "filled-number"
                label = "You Get"
                type = "number"
                value = {
                    youGet
                }
                // onChange={(event) => {
                //   setyouGet(event.target.value);
                // }}
                InputLabelProps = {
                    {
                        shrink: true,
                    }
                }
                style = {
                    {
                        background: "#FFFFFF",
                        borderRadius: "8px",
                        width: matches2 ? "95%" : "80%",
                        margin: "auto",
                    }
                }
                variant = "filled"
                InputProps = {
                    {
                        endAdornment: ( <
                            > {
                                action.sell ? ( <
                                    Box style = {
                                        {
                                            display: "flex",
                                            alignItems: "center"
                                        }
                                    } >
                                    <
                                    img style = {
                                        {
                                            width: "100%",
                                            maxWidth: "25px",
                                            height: "auto",
                                        }
                                    }
                                    src = {
                                        trc
                                    }
                                    /> <
                                    Typography style = {
                                        {
                                            color: "#4e4e4e",
                                            padding: "0px 0px 0px 10px",
                                        }
                                    } >
                                    TRX <
                                    /Typography> <
                                    i style = {
                                        {
                                            color: "#4e4e4e",
                                            padding: "0px 20px 0px 30px",
                                        }
                                    }
                                    className = "fa-solid fa-caret-down" >
                                    < /i> <
                                    /Box>
                                ) : ( <
                                    Box style = {
                                        {
                                            display: "flex",
                                            alignItems: "center"
                                        }
                                    } >
                                    <
                                    img style = {
                                        {
                                            width: "100%",
                                            maxWidth: "25px",
                                            height: "auto",
                                        }
                                    }
                                    src = {
                                        tbl
                                    }
                                    /> <
                                    Typography style = {
                                        {
                                            color: "#4e4e4e",
                                            padding: "0px 0px 0px 10px",
                                        }
                                    } >
                                    TBL <
                                    /Typography> <
                                    i style = {
                                        {
                                            color: "#4e4e4e",
                                            padding: "0px 20px 0px 30px",
                                        }
                                    }
                                    className = "fa-solid fa-caret-down" >
                                    < /i> <
                                    /Box>
                                )
                            } <
                            />
                        ),
                    }
                }
                /> <
                /Box>

                {
                    action.buy ? ( <
                        Box style = {
                            {
                                width: "100%",
                                textAlign: "center",
                                marginTop: "15px",
                            }
                        } >
                        <
                        Button onClick = {
                            () => {
                                if (userWalletAddress) {
                                    transactionExchange();
                                } else {
                                    toast.error("Please connect your Wallet");
                                }
                            }
                        }
                        style = {
                            {
                                background: "rgb(108, 107, 107)",
                                color: "white",
                                width: matches2 ? "95%" : "80%",
                                margin: "auto",
                            }
                        } >
                        Buy <
                        /Button> <
                        /Box>
                    ) : ( <
                        Box style = {
                            {
                                width: "100%",
                                textAlign: "center"
                            }
                        } >
                        <
                        Button onClick = {
                            async () => {
                                if (userWalletAddress) {
                                    if (
                                        Number(youPay) >
                                        Number(formatUnits(allowanceExchange, 6))
                                    ) {
                                        await approveTokenTransaction();
                                    } else {
                                        transactionExchange();
                                    }
                                } else {
                                    toast.error("Please connect your Wallet");
                                }
                            }
                        }
                        style = {
                            {
                                background: "rgb(108, 107, 107)",
                                color: "white",
                                width: matches2 ? "95%" : "80%",
                                margin: "auto",
                            }
                        } >
                        Sell <
                        /Button> <
                        /Box>
                    )
                } <
                /Grid>

                <
                Grid
                container
                style = {
                    {
                        width: "95%",
                        margin: "0px auto 40px auto",
                        marginTop: "0px",
                        justifyContent: "space-around",
                    }
                } >
                <
                Grid item xs = {
                    12
                }
                md = {
                    3
                }
                style = {
                    {
                        marginTop: "40px"
                    }
                } >
                <
                Box
                style = {
                    {
                        display: "flex",
                        justifyContent: matches3 ? "center" : "flex-start",
                    }
                } >
                <
                img src = {
                    one
                }
                /> <
                img style = {
                    {
                        marginLeft: "20px"
                    }
                }
                src = {
                    right
                }
                /> <
                /Box> <
                Typography
                variant = "h5"
                className = {
                    classes.gw
                }
                style = {
                    {
                        marginTop: "20px",
                        textAlign: "center",
                    }
                } >
                Choose Currency <
                /Typography> <
                /Grid>

                <
                Grid item xs = {
                    12
                }
                md = {
                    3
                }
                style = {
                    {
                        marginTop: "40px"
                    }
                } >
                <
                Box
                style = {
                    {
                        display: "flex",
                        justifyContent: matches3 ? "center" : "flex-start",
                    }
                } >
                <
                img src = {
                    two
                }
                /> <
                img style = {
                    {
                        marginLeft: "20px"
                    }
                }
                src = {
                    right
                }
                /> <
                /Box> <
                Typography
                variant = "h5"
                className = {
                    classes.gw
                }
                style = {
                    {
                        marginTop: "20px",
                        textAlign: "center",
                    }
                } >
                Approve Transaction <
                /Typography> <
                /Grid>

                <
                Grid item xs = {
                    12
                }
                md = {
                    3
                }
                style = {
                    {
                        marginTop: "40px"
                    }
                } >
                <
                Box
                style = {
                    {
                        display: "flex",
                        justifyContent: matches3 ? "center" : "flex-start",
                        textAlign: "center",
                    }
                } >
                <
                img src = {
                    three
                }
                /> <
                img style = {
                    {
                        marginLeft: "20px"
                    }
                }
                src = {
                    tick
                }
                /> <
                /Box> <
                Typography
                variant = "h5"
                className = {
                    classes.gw
                }
                style = {
                    {
                        marginTop: "20px",
                        textAlign: "center",
                    }
                } >
                Get Your Coin <
                /Typography> <
                /Grid>

                {
                    /* <Grid item xs={12} md={4}>
                                  <img src={trust} />
                                  <img style={{ marginLeft: "40px" }} src={benziga} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                  <img src={trust} />
                                  <img style={{ marginLeft: "40px" }} src={benziga} />
                                </Grid> */
                } <
                /Grid> <
                /Grid> <
                /Box> <
                /div>
            );
        };

        export default Exchange;