import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./stake.css";
import {
    formatUnits,
    parseUnits
} from "@ethersproject/units";
import tickerTBL from "./image/tickerTBL.png";
import tickerNFT from "./image/tickerNFT.png";
import {
    StakingContract,

} from "../../hooks/contract";
import {
    environment
} from "../../environment";
import {
    toast
} from "react-toastify";
// import NftUnstakeModal from "../../unstakemodal";
import NftStakedModal from "../../NftSelectionModal";
// import TBLUNSTAKING from "../../Tblmodal";
// import _image from "../../images/gif.gif";
import moment from "moment";

// import WithDrawModal from "../../withdrawmodal";
const useStyle = makeStyles((theme) => ({
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
    root: {
        color: "white",
    },
    colortoggle: {
        color: theme.palette.secondary.bw,
    },

    cardbtnbgc: {
        background: theme.palette.secondary.cardbg,
    },
    wb: {
        background: theme.palette.secondary.wb,
    },
}));

function Stake({
    userWalletAddress,
    setlogoutopen,
    userAction,
    setActivation,
    isDarkMode,
    setselectionmodalopen,
    myPunks,
    balanceOf,
    tronWeb,
    _allignment,
    _MyPunks,
    contractNft,
    selectionmodalopen,
    setloading,
    loading,
    _homeCounterinfo,
    contractBalance,
    rewardNftClaim,
    totalNftStaked,
    rewardTBLclaim,
    withdrawl,
    Tblreward,
    tblProfit,
    currentProfit,
    staketbl,
    nftStaked,
    Trc721Reward,
    erc20Reward,
    _percentDivider,
    claimTimeNft,
    claimTimeTbl,
    unstakeTimeTbl,
    unstakeTimeNft,
    _getStaked


}) {
    let classes = useStyle();
    const matches1200 = useMediaQuery("(min-width:1200px)");
    const matches = useMediaQuery("(min-width:959px)");
    const matches650 = useMediaQuery("(min-width:650px)");
    const matches450 = useMediaQuery("(min-width:450px)");

    const [expanded, setExpanded] = React.useState(false);

    const [stakedAmount, setStakedAmount] = React.useState(0);
    const {
        _stakeContract,
        _stakeTokenContract
    } = StakingContract(tronWeb);

    //  console.log("rewardNftClaim---->", rewardNftClaim);
    // console.log("rewardTBLclaim---->", rewardTBLclaim);
    // console.log("totalNftStaked---->", totalNftStaked);
    // console.log("Tblreward---->", Tblreward);
    // console.log("tblProfit---->", tblProfit);
    // console.log("currentProfit---->", currentProfit);
    // console.log("staketbl---->", staketbl);
    // console.log("nftStaked---->", nftStaked);
    // console.log("Trc721Reward---->", Trc721Reward);
    // console.log("erc20Reward---->", erc20Reward);
    // console.log("_percentDivider---->", _percentDivider);
    // console.log("claimTimeNft---->", claimTimeNft);
    // console.log("claimTimeTbl---->", claimTimeTbl);
    // console.log("unstakeTimeTbl---->", unstakeTimeTbl);
    // console.log("unstakeTimeNft---->", unstakeTimeNft);



    // const [rewardNftClaim, setRewardNftclaim] = React.useState(0);  
    // const [totalNftStaked, setTotalNftStaked] = React.useState(0);
    // const [rewardTBLclaim, setRewardTBLclaim] = React.useState(0);
    // const [withdrawl, setWithDrawl] = React.useState(0);
    // const [Tblreward, setTblWithDrawl] = React.useState(0);
    // const [tblProfit, setTblProfit] = React.useState(0);
    // const [currentProfit, setCurrentProfit] = React.useState(0);
    // const [staketbl, setStakeTBL] = React.useState(0);
    // const [nftStaked, setNftStaked] = React.useState(0);
    // const [Trc721Reward, setTrc721Reward] = React.useState(0);
    // const [erc20Reward, setErc20Reward] = React.useState(0);
    // const [_percentDivider, setPercentDivider] = React.useState(0);
    // const [claimTimeNft, setClaimTimeNFT] = React.useState(0);
    // const [claimTimeTbl, setClaimTimeTbl] = React.useState(0);
    // const [unstakeTimeTbl,setUnStakeTimeTbl] = React.useState(0);
    // const [unstakeTimeNft,setUnStakeTimeNft] = React.useState(0);

    const [countTime, setCountDateTime] = React.useState({
        time_days: 0,
        time_Hours: 0,
        time_Minusts: 0,
        time_seconds: 0,
    });
    const [_countTimeTbl, _setCountTimeTbl] = useState({
        time_days: 0,
        time_Hours: 0,
        time_Minusts: 0,
        time_seconds: 0,
    })
    const [_unstakeTimerTbl, _setUnstakeTimeTbl] = useState({
        time_days: 0,
        time_Hours: 0,
        time_Minusts: 0,
        time_seconds: 0,
    })
    const [_unstakeTimerNft, _setUnstakeTimeNft] = useState({
        time_days: 0,
        time_Hours: 0,
        time_Minusts: 0,
        time_seconds: 0,
    })


    const timer = useRef(null);
    const _unstaketimer = useRef(null);
    useEffect(() => {
        // useRef value stored in .current property
        (async () => {
            clearInterval(timer.current);
            setCountDateTime({
                time_days: 0,
                time_Hours: 0,
                time_Minusts: 0,
                time_seconds: 0,
            });
            clearInterval(_unstaketimer.current);
            setCountDateTime({
                time_days: 0,
                time_Hours: 0,
                time_Minusts: 0,
                time_seconds: 0,
            });
            timer.current = setInterval(() => {
                let countDownDate = moment.unix(+claimTimeNft).format("x");
                var now = moment().format("x");
                const distance = +countDownDate - +now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (distance > 0) {
                    setCountDateTime({
                        time_days: days,
                        time_Hours: hours,
                        time_Minusts: minuts,
                        time_seconds: seconds,
                    });
                } else {
                    clearInterval(timer.current);
                }

            }, 1000);








            _unstaketimer.current = setInterval(() => {
                let countDownDate = moment.unix(+unstakeTimeNft).format("x");
                var now = moment().format("x");
                const distance = +countDownDate - +now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (distance > 0) {
                    _setUnstakeTimeNft({
                        time_days: days,
                        time_Hours: hours,
                        time_Minusts: minuts,
                        time_seconds: seconds,
                    });
                } else {
                    clearInterval(_unstaketimer.current);
                }

            }, 1000);


        })();

    }, [claimTimeNft, unstakeTimeNft]);


    const _timer = useRef(null);
    const _timerunstakeTbl = useRef(null);
    useEffect(() => {
        // useRef value stored in .current property
        (async () => {
            clearInterval(_timer.current);
            _setCountTimeTbl({
                time_days: 0,
                time_Hours: 0,
                time_Minusts: 0,
                time_seconds: 0,
            });
            clearInterval(_timerunstakeTbl.current);
            _setCountTimeTbl({
                time_days: 0,
                time_Hours: 0,
                time_Minusts: 0,
                time_seconds: 0,
            });
            _timer.current = setInterval(() => {
                let countDownDate = moment.unix(+claimTimeTbl).format("x");
                var now = moment().format("x");
                const distance = +countDownDate - +now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (distance > 0) {
                    _setCountTimeTbl({
                        time_days: days,
                        time_Hours: hours,
                        time_Minusts: minuts,
                        time_seconds: seconds,
                    });
                } else {
                    clearInterval(_timer.current);
                }
            }, 1000);



            _timerunstakeTbl.current = setInterval(() => {
                let countDownDate = moment.unix(+unstakeTimeTbl).format("x");
                var now = moment().format("x");
                const distance = +countDownDate - +now;
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (distance > 0) {
                    _setUnstakeTimeTbl({
                        time_days: days,
                        time_Hours: hours,
                        time_Minusts: minuts,
                        time_seconds: seconds,
                    });
                } else {
                    clearInterval(_timerunstakeTbl.current);
                }
            }, 1000);
        })();

    }, [claimTimeTbl, unstakeTimeTbl]);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const STAKETBL = async () => {
        try {
            if (!userWalletAddress) {
                toast.error("Please login to continue");
                return;
            }
            if (!stakedAmount) {
                toast.error("Please enter amount to stake");
                return;
            }
            setloading(true);
            if (_stakeTokenContract && _stakeContract) {
                const allowance = await _stakeTokenContract
                    .allowance(userWalletAddress, environment.stakeContract)
                    .call();

                const supply = await _stakeTokenContract.totalSupply().call();

                if (+allowance < +parseUnits(stakedAmount.toString(), "6")) {
                    let res = await _stakeTokenContract
                        .approve(environment.stakeContract, +supply)
                        .send({
                            from: userWalletAddress,
                            gasLimit: "2000000",
                            callValue: 0,
                            feeLimit: 1000000000,
                        });
                    const transaction = setInterval(() => {
                        tronWeb.trx
                            .getUnconfirmedTransactionInfo(res.toString())
                            .then(async (value) => {
                                if (value) {
                                    if (value ? .receipt ? .result === "SUCCESS") {
                                        toast.success("Approved Successfully");
                                        _STAKED(
                                            _stakeContract, +parseUnits(stakedAmount.toString(), "6")
                                        );
                                        clearInterval(transaction);
                                    } else if (value.result === "FAILED") {
                                        toast.success("Failed.....");
                                        clearInterval(transaction);
                                    } else if (value.receipt.result === "REVERT") {
                                        toast.success("REVERT Failed.....");
                                        clearInterval(transaction);
                                    } else {
                                        console.log(value, "this is something");
                                        toast.error("Failed to Approve");
                                        clearInterval(transaction);
                                    }
                                }
                            })
                            .catch((value) => {
                                console.log("error", value);
                            });
                    }, 2000);
                    setloading(false);
                } else {
                    _STAKED(_stakeContract, +parseUnits(stakedAmount.toString(), "6"));
                }
            }
        } catch (e) {
            console.log(e, "error");
        }
    };

    const _STAKED = async (stakedContract, amount) => {
        setloading(true);
        let tx = await stakedContract.deposit(1, amount, []).send({
            from: userWalletAddress,
            callValue: 0,
            feeLimit: 1000000000,
        });

        const transaction = await setInterval(() => {
            tronWeb.trx
                .getUnconfirmedTransactionInfo(tx.toString())
                .then(async (value) => {
                    if (value) {
                        if (value ? .receipt ? .result === "SUCCESS") {
                            toast.success("Staked  Successfully");
                            await _allignment();
                            await _MyPunks();
                            await _getStaked();
                            await _homeCounterinfo();
                            clearInterval(transaction);
                        } else if (value.receipt.result === "REVERT") {
                            toast.success("REVERT Failed.....");
                            clearInterval(transaction);
                        } else if (value.result === "FAILED") {
                            toast.success("Failed.....");
                            clearInterval(transaction);
                        } else {
                            // toast.success("Failed.....");
                            clearInterval(transaction);
                        }
                        clearInterval(transaction);
                    }
                })
                .catch((value) => {
                    _getStaked();
                    console.log("error", value);
                });
        }, 2000);
        setloading(false);
    };

    const ValidationValues = (_va, bal) => {
        if (+bal < _va) {
            toast.error("You have insufficient TBL.");
        } else {
            setStakedAmount(_va);
        }
    };

    const _unStakeTBL = async (id) => {
        try {
            let tx = await _stakeContract.reinvest(id).send({
                from: userWalletAddress,
                callValue: 0,
                feeLimit: 1000000000,
            });
            const transaction = setInterval(() => {
                tronWeb.trx
                    .getUnconfirmedTransactionInfo(tx.toString())
                    .then(async (value) => {
                        if (value) {
                            if (value.receipt.result == "SUCCESS") {
                                toast.success("Reinvest Successfully");
                                await _allignment();
                                await _MyPunks();
                                await _getStaked();
                                await _homeCounterinfo();
                                clearInterval(transaction);
                            } else if (value.result === "FAILED") {
                                toast.success("Failed.....");
                                clearInterval(transaction);
                            } else if (value.receipt.result === "REVERT") {
                                toast.success("REVERT Failed.....");
                                clearInterval(transaction);
                            } else {
                                toast.error("Failed to unstake");
                                clearInterval(transaction);
                            }
                        }
                    })

                    .catch((value) => {
                        console.log("error", value);
                    });
            }, 2000);
        } catch (e) {
            console.log(e, "e---->");
        }
    };

    const _withdrawTBL = async (id, _userWalletAddress) => {
        try {
            let tx = await _stakeContract.withdrawAll(id, _userWalletAddress).send({
                from: userWalletAddress,
                callValue: 0,
                feeLimit: 1000000000,
            });

            const transaction = setInterval(() => {
                tronWeb.trx
                    .getUnconfirmedTransactionInfo(tx.toString())
                    .then(async (value) => {
                        if (value) {
                            if (value.receipt.result == "SUCCESS") {
                                toast.success("unstake Successfully");
                                await _allignment();
                                await _MyPunks();
                                await _getStaked();
                                await _homeCounterinfo();
                                clearInterval(transaction);
                            } else if (value.result === "FAILED") {
                                toast.success("Failed.....");
                                clearInterval(transaction);
                            } else if (value.receipt.result === "REVERT") {
                                toast.success("REVERT Failed.....");
                                clearInterval(transaction);
                            } else {
                                toast.error("Failed to unstake");
                                clearInterval(transaction);
                            }
                        }
                    })

                    .catch((value) => {
                        console.log("error", value);
                    });
            }, 2000);
        } catch (e) {
            console.log(e, "e---->");
        }
    };

    const CompleteWithDraw = async (id, _userWalletAddress) => {
        try {
            let tx = await _stakeContract
                .CompleteWithDraw(id, _userWalletAddress)
                .send({
                    from: userWalletAddress,
                    callValue: 0,
                    feeLimit: 1000000000,
                });

            const transaction = setInterval(() => {
                tronWeb.trx
                    .getUnconfirmedTransactionInfo(tx.toString())
                    .then(async (value) => {
                        if (value) {
                            console.log(value, "this is the value");
                            if (value.receipt.result == "SUCCESS") {
                                toast.success("WithDraw Successfully");
                                await _allignment();
                                await _MyPunks();
                                await _getStaked();
                                await _homeCounterinfo();
                                clearInterval(transaction);
                            } else if (value.result === "FAILED") {
                                toast.success("Failed.....");
                                clearInterval(transaction);
                            } else if (value.receipt.result === "REVERT") {
                                toast.success("REVERT Failed.....");
                                clearInterval(transaction);
                            } else {
                                toast.error("Failed to unstake");
                                clearInterval(transaction);
                            }
                        }
                    })
                    .catch((value) => {
                        console.log("error", value);
                    });
            }, 2000);
        } catch (e) {
            console.log(e, "e---->");
        }
    };

    const unFreezeNFT = async (id) => {
        try {
            let tx = await _stakeContract.Unfreez(id).send({
                from: userWalletAddress,
                callValue: 0,
                feeLimit: 1000000000,
            });

            const transaction = await setInterval(() => {
                tronWeb.trx
                    .getUnconfirmedTransactionInfo(tx.toString())
                    .then(async (value) => {
                        if (value) {
                            if (value.receipt.result == "SUCCESS") {
                                toast.success("unstake Successfully");
                                await _allignment();
                                await _MyPunks();
                                await _getStaked();
                                await _homeCounterinfo();
                                clearInterval(transaction);
                                // window.location.reload();
                            } else if (value.result === "FAILED") {
                                toast.success("Failed.....");
                                clearInterval(transaction);
                            } else if (value.receipt.result === "REVERT") {
                                toast.success("REVERT Failed.....");
                                clearInterval(transaction);
                            } else {
                                toast.error("Failed to unstake");
                                clearInterval(transaction);
                            }
                        }
                    }).catch((value) => {
                        console.log("error", value);
                    });
            }, 2000);

        } catch (e) {
            console.log(e, "e---->");
        }
    };
    const _UnfreezTBL = async (id) => {
        try {
            let tx = await _stakeContract.UnfreezTBL(id).send({
                from: userWalletAddress,
                callValue: 0,
                feeLimit: 1000000000,
            });
            const transaction = await setInterval(() => {
                tronWeb.trx
                    .getUnconfirmedTransactionInfo(tx.toString())
                    .then(async (value) => {
                        if (value) {
                            if (value.receipt.result == "SUCCESS") {
                                toast.success("unstake Successfully");
                                await _allignment();
                                await _MyPunks();
                                await _getStaked();
                                await _homeCounterinfo();
                                clearInterval(transaction);
                                // window.location.reload();
                            } else if (value.result === "FAILED") {
                                toast.success("Failed.....");
                                clearInterval(transaction);
                            } else if (value.receipt.result === "REVERT") {
                                toast.success("REVERT Failed.....");
                                clearInterval(transaction);
                            } else {
                                toast.error("Failed to unstake");
                                clearInterval(transaction);
                            }
                        }
                    }).catch((value) => {
                        console.log("error", value);
                    });
            }, 2000);

        } catch (e) {
            console.log(e, "e---->");
        }
    }




    // const   _getStaked2= async () => {
    //   try {

    //         setInterval(async() => {
    //           (async () => {
    //             const calculateRewardTbl = await _stakeContract
    //               .calcRewards(userWalletAddress, 1)
    //               .call();
    //               const calculateRewardNft = await _stakeContract
    //               .calcRewards(userWalletAddress, 0)
    //               .call();

    //               if(!calculateRewardTbl.hasOwnProperty('amount')){
    //                 setTblProfit(+calculateRewardTbl);
    //               }else{
    //                 setTblProfit(+calculateRewardTbl.amount);
    //               }
    //               if(!calculateRewardNft.hasOwnProperty('amount')){
    //                 setCurrentProfit(+calculateRewardNft);
    //               }else{
    //                 setCurrentProfit(+calculateRewardNft.amount);
    //               }


    //           })();
    //         }, 2000);


    //   } catch (e) {}
    // };

    // const _getStaked= async () => {
    //   try {
    //     const stakeDataTbl = await _stakeContract
    //       .getuserdata(1, userWalletAddress)
    //       .call();
    //     const _stakeDataNft = await _stakeContract
    //       .getuserdata(0, userWalletAddress)
    //       .call();

    //    const nftBalance = await contractNft.balanceOf(environment.stakeContract).call();

    //     // const totalNftStake = await _stakeContract.totalNftStaked().call();
    //     const totalStaked = await _stakeContract.totalStaked().call();
    //     const viewPlaneTbl = await _stakeContract.viewPlan(1).call();
    //     const viewPlaneNft = await _stakeContract.viewPlan(0).call();
    //     const _percentDivider = await _stakeContract.percentDivider().call();
    //     const _getuseroveralldataTBL = await _stakeContract.getuseroveralldata(1, userWalletAddress).call();
    //     const _getuseroveralldatabNFT = await _stakeContract.getuseroveralldata(0, userWalletAddress).call();
    //     const _totalNftRewardClaimed = await _stakeContract.totalNftRewardClaimed().call();
    //     const _totalStakeRewardClaimed = await _stakeContract.totalRewardClaimed().call();
    //     setRewardTBLclaim(_totalStakeRewardClaimed);
    //     setRewardNftclaim(_totalNftRewardClaimed);


    //     setClaimTimeNFT(_stakeDataNft.LastClaimTime);
    //     setClaimTimeTbl(stakeDataTbl.LastClaimTime);
    //     setUnStakeTimeTbl(stakeDataTbl.UnStakeTime);
    //     setUnStakeTimeNft(_stakeDataNft.UnStakeTime);
    //     setPercentDivider(_percentDivider);

    //     setTrc721Reward(+viewPlaneNft.profit);
    //     setErc20Reward(+viewPlaneTbl.profit);
    //     setTotalNftStaked(+nftBalance);


    //     setStakeTBL(stakeDataTbl.Amount);
    //     setTblWithDrawl(+_getuseroveralldataTBL._totalClaimed);
    //     setNftStaked(+_stakeDataNft.ids.length);
    //     setWithDrawl(+_getuseroveralldatabNFT._totalClaimed);


    //   } catch (e) {}
    // }


    React.useEffect(() => {
        if (userWalletAddress && _stakeContract) {
            _getStaked();

        }
    }, [userWalletAddress, _stakeContract]);


    // useEffect(() => {
    //   if (claimTimeTbl) {
    //   //  console.log(moment.unix(claimTimeTbl).format("LLL")  ,claimTimeTbl > +moment().format("X") ,"----TIME->")
    //   }
    // }, [claimTimeTbl, _stakeContract]);


    const _aTime = +countTime.time_days +
        +countTime.time_Hours +
        +countTime.time_Minusts +
        +countTime.time_seconds

    const bTime = +_countTimeTbl.time_days + +_countTimeTbl.time_Hours +
        +_countTimeTbl.time_Minusts +
        +_countTimeTbl.time_seconds





    return ( <
            >

            <
            NftStakedModal userWalletAddress = {
                userWalletAddress
            }
            contractNft = {
                contractNft
            }
            isDarkMode = {
                isDarkMode
            }
            selectionmodalopen = {
                selectionmodalopen
            }
            setselectionmodalopen = {
                setselectionmodalopen
            }
            myPunks = {
                myPunks
            }
            setloading = {
                setloading
            }
            loading = {
                loading
            }
            tronWeb = {
                tronWeb
            }
            _allignment = {
                _allignment
            }
            _MyPunks = {
                _MyPunks
            }
            _getStaked = {
                _getStaked
            }
            />


            <
            div style = {
                {
                    marginTop: "105px"
                }
            } >
            <
            Box sx = {
                {
                    padding: "20px 0px 20px 0px",
                    maxWidth: "1460px",
                    margin: "auto",
                }
            } >
            <
            Box style = {
                {
                    textAlign: "center"
                }
            } > {
                userWalletAddress || userAction === 200 ? ( <
                    div >

                    {
                        userWalletAddress ? < Button
                        variant = "filled"
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
                                setlogoutopen(true);
                            }
                        } >
                        {
                            userWalletAddress ? .slice(0, 6) +
                            "..." +
                            userWalletAddress ? .slice(-4)
                        } <
                        /Button>:<Button
                        variant = "filled"
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

                        >
                        Loading.... <
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

                <
                Typography
                className = {
                    classes.colortoggle
                }
                align = "center"
                variant = {
                    matches ? "h3" : "h4"
                }
                color = {
                    "#434343"
                }
                style = {
                    {
                        fontSize: !matches ? "2.1rem" : null,
                    }
                } >
                TBLOCKS STAKING <
                /Typography> <
                Typography
                className = {
                    classes.colortoggle
                }
                style = {
                    {
                        marginTop: "40px",
                        width: !matches ? "90%" : "60%",
                        margin: "auto",
                        textAlign: "justify",
                        wordSpacing: "-5px",
                    }
                }
                align = "center"
                variant = "h5"
                color = {
                    "#434343"
                } >
                Welcome to TBlocks Staking,
                here you can stake your TBlocks NFT and
                TBL to get back passive income. < /Typography> { /* {loaddata && <img src={_image} alt="" />} */ } <
                    Typography
                className = {
                    classes.colortoggle
                }
                style = {
                    {
                        marginTop: "30px",
                        fontSize: !matches ? "28px" : null
                    }
                }
                align = "center"
                variant = "h4"
                color = {
                    "#434343"
                } >
                DASHBOARD <
                /Typography>

                { /* Grid for Boxes */ }

                <
                Grid
                container
                justifyContent = {
                    matches1200 ? "space-between" : "center"
                }
                style = {
                    {
                        width: !matches650 ? "95%" : "85%",
                        margin: "auto"
                    }
                } >
                <
                Grid
                style = {
                    {
                        maxWidth: "560px",
                        marginTop: "20px",
                        border: "6px outset rgb(142, 142, 142)",
                        padding: "15px 10px",
                    }
                }
                item
                xs = {
                    12
                }
                md = {!matches1200 ? 12 : 6
                } >
                <
                Typography
                className = {
                    classes.colortoggle
                }
                align = "center"
                variant = "h6"
                sx = {
                    {
                        fontSize: "1.1rem"
                    }
                } >
                Tblocks NFT Stats <
                /Typography> 

                { /* Box internal Grid for small boxes */ }

                <
                Grid
                style = {
                    {
                        marginTop: "20px",
                        textAlign: "center"
                    }
                }
                container
                justifyContent = "center" >
                <
                Grid
                style = {
                    {
                        border: "6px outset",
                        padding: "8px 10px",
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
                Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        color: "#FD573B",
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                REWARD CLAIMED :
                    <
                    /Typography> <
                    Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                {
                    rewardNftClaim ?
                    +formatUnits(rewardNftClaim.toString(), "6") :
                        0
                } <
                /Typography> <
                /Grid> <
                Grid
                style = {
                    {
                        border: "6px outset",
                        padding: "8px 10px",
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
                Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        color: "#FD573B",
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                Reward per NFT:
                    <
                    /Typography> <
                    Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                {
                    Trc721Reward ?
                    formatUnits(Trc721Reward.toString(), "6") :
                        0
                } <
                /Typography> <
                /Grid> <
                Grid
                style = {
                    {
                        border: "6px outset",
                        marginTop: "20px",
                        padding: "8px 10px",
                    }
                }
                item
                xs = {!matches ? 12 : 10
                } >
                <
                Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        color: "#FD573B",
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                TOTAL STAKED AMOUNT(NFT):
                    <
                    /Typography> <
                    Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                { /* {balanceOf?+formatUnits(balanceOf, 6):0} */ } {
                    totalNftStaked ? +totalNftStaked : 0
                } <
                /Typography> <
                /Grid> <
                /Grid> <
                /Grid> <
                Grid
                style = {
                    {
                        maxWidth: "560px",
                        marginTop: "20px",
                        border: "6px outset rgb(142, 142, 142)",
                        padding: "15px 10px",
                    }
                }
                item
                xs = {
                    12
                }
                md = {!matches1200 ? 12 : 6
                } >
                <
                Typography
                className = {
                    classes.colortoggle
                }
                align = "center"
                variant = "h6"
                sx = {
                    {
                        fontSize: "1.1rem"
                    }
                } >
                Tblocks TBL Stats <
                /Typography>

                { /* Box internal Grid for small boxes */ }

                <
                Grid
                style = {
                    {
                        marginTop: "20px",
                        textAlign: "center"
                    }
                }
                container
                justifyContent = "center" >
                <
                Grid
                style = {
                    {
                        border: "6px outset",
                        padding: "8px 10px",
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
                Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        color: "#FD573B",
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                REWARD CLAIMED:
                    <
                    /Typography> <
                    Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                {
                    rewardTBLclaim ?
                    +formatUnits(rewardTBLclaim.toString(), "6") :
                        0
                } <
                /Typography> <
                /Grid> <
                Grid
                style = {
                    {
                        border: "6px outset",
                        padding: "8px 10px",
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
                Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        color: "#FD573B",
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                Reward Percentage:
                    <
                    /Typography> <
                    Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                {
                    erc20Reward ? (+erc20Reward / +_percentDivider) * 100 : 0
                } %
                <
                /Typography> <
                /Grid> <
                Grid
                style = {
                    {
                        border: "6px outset",
                        marginTop: "20px",
                        padding: "8px 10px",
                    }
                }
                item
                xs = {!matches ? 12 : 10
                } >
                <
                Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        color: "#FD573B",
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                TOTAL STAKED AMOUNT(TBL):
                    <
                    /Typography> <
                    Typography
                className = {
                    classes.colortoggle
                }
                variant = "h6"
                style = {
                    {
                        textAlign: !matches450 ? "left" : null,
                        fontSize: "1.1rem",
                    }
                } >
                {
                    contractBalance ? +formatUnits(contractBalance, 6) : 0
                } {
                    /* {totalTblstaked
                                          ? formatUnits(totalTblstaked.toString(), "6")
                                          : 0} */
                } <
                /Typography> <
                /Grid> <
                /Grid> <
                /Grid>

                {
                    /* <Grid style={{ maxWidth: "560px", marginTop: "20px", padding: !matches450 ? "30px 0px" : "30px 12px", border: "6px outset rgb(142, 142, 142)" }} item xs={12} md={!matches1200 ? 12 : 6}>

                                            <Box sx={{ textAlign: "center", display: "flex", justifyContent: "space-between", padding: !matches450 ? "0px 10px 0px 10px" : "0px 30px 0px 30px" }}>

                                                <Typography
                                                    className={classes.colortoggle} variant="h6">Tblocks NFT</Typography>
                                                <Button className={classes.colortoggle} style={{ border: "6px outset rgb(142, 142, 142)", borderRadius: "8px" }}>#TWKASN</Button>
                                            </Box>

                                            <Typography className={classes.colortoggle} style={{ width: !matches450 ? "95%" : "87%", margin: "20px auto 0px auto" }} variant="h6">% of the Tblocks Pool</Typography>

                                            <Box style={{ width: !matches ? "95%" : "87%", margin: "20px auto 0px auto", bgcolor: "red" }}>
                                                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Typography className={classes.colortoggle} variant="h6">NFT Staked:</Typography>
                                                    <Typography className={classes.colortoggle} variant="h6">0</Typography>
                                                </Box>
                                                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Typography className={classes.colortoggle} variant="h6">Harvest TRC20:</Typography>
                                                    <Typography className={classes.colortoggle} variant="h6">0</Typography>
                                                </Box>

                                            </Box>

                                            <Box style={{ textAlign: "center", marginTop: "30px" }}>

                                                <Button
                                                    className={classes.colortoggle}
                                                    variant="outlined"
                                                    bgcolor="transparent"
                                                    style={{
                                                        border: "6px outset rgb(142, 142, 142)",
                                                        borderRadius: '50px',
                                                        marginTop: '25px',
                                                    }}
                                                >
                                                    APPROVE NFT
                                                </Button>
                                            </Box>


                                        </Grid> */
                }

                {
                    /* <Grid style={{ maxWidth: "560px", marginTop: "20px", padding: !matches450 ? "30px 0px" : "30px 12px", border: "6px outset rgb(142, 142, 142)" }} item xs={12} md={!matches1200 ? 12 : 6}>
                                            <Box sx={{ textAlign: "center", display: "flex", justifyContent: "space-between", padding: !matches450 ? "0px 10px 0px 10px" : "0px 30px 0px 30px" }}>

                                                <Typography className={classes.colortoggle} variant="h6">Tblocks TRC20</Typography>
                                                <Button className={classes.colortoggle} style={{ border: "6px outset rgb(142, 142, 142)", borderRadius: "8px" }}>#TWKASN</Button>
                                            </Box>

                                            <Typography className={classes.colortoggle} style={{ width: !matches450 ? "95%" : "87%", margin: "20px auto 0px auto" }} variant="h6">% of the Tblocks Pool</Typography>

                                            <Box style={{ width: !matches ? "95%" : "87%", margin: "20px auto 0px auto" }}>
                                                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Typography className={classes.colortoggle} variant="h6">TRC20 Staked:</Typography>
                                                    <Typography className={classes.colortoggle} variant="h6">0</Typography>
                                                </Box>
                                                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Typography className={classes.colortoggle} variant="h6">Harvest TRC20:</Typography>
                                                    <Typography className={classes.colortoggle} variant="h6">0</Typography>
                                                </Box>

                                            </Box>

                                            <Box style={{ textAlign: "center", marginTop: "30px" }}>

                                                <Button
                                                    className={classes.colortoggle}
                                                    variant="outlined"
                                                    bgcolor="transparent"
                                                    style={{
                                                        border: "6px outset rgb(142, 142, 142)",
                                                        borderRadius: '50px',
                                                        marginTop: '25px',
                                                    }}
                                                >
                                                    APPROVE Tblocks
                                                </Button>
                                            </Box>
                                        </Grid> */
                } <
                /Grid>

                { /* Accordion part starts here */ } { /* First accordion starts here */ }

                <
                Grid
                container
                justifyContent = {
                    matches1200 ? "space-between" : "center"
                }
                style = {
                    {
                        width: !matches650 ? "95%" : "85%",
                        margin: "30px auto 30px auto",
                    }
                } >
                <
                Typography
                className = {
                    classes.colortoggle
                }
                variant = "h4"
                style = {
                    {
                        color: "red",
                        fontWeight: "bold",
                        fontSize: !matches ? "28px" : null,
                        margin: "0px auto 30px auto",
                    }
                } >
                POOLS <
                /Typography>

                <
                Grid
                item
                xs = {
                    12
                }
                style = {
                    {
                        border: "6px outset rgb(142, 142, 142)"
                    }
                } >
                <
                Grid
                container
                style = {
                    {
                        textAlign: "center",
                        padding: "16px 0px 16px 0px"
                    }
                } >
                <
                Grid
                item
                xs = {
                    3
                }
                className = {
                    classes.colortoggle
                }
                style = {
                    {
                        fontSize: "1.1rem"
                    }
                } >
                Pool <
                /Grid> {
                    matches650 ? < Grid
                    item
                    xs = {
                        3
                    }
                    className = {
                        classes.colortoggle
                    }
                    style = {
                            {
                                fontSize: "1.1rem"
                            }
                        } >
                        Total Staked <
                        /Grid>:""} <
                        Grid
                    item
                    xs = {
                        3
                    }
                    className = {
                        classes.colortoggle
                    }
                    style = {
                            {
                                fontSize: "1.1rem",
                                marginLeft: matches650 ? "0rem" : "3.5rem"
                            }
                        } >
                        Reward <
                        /Grid> <
                        /Grid> <
                        /Grid> <
                        Grid item xs = {
                            12
                        }
                    style = {
                            {}
                        } >
                        <
                        Accordion
                    expanded = {
                        expanded === `panel1`
                    }
                    onChange = {
                        handleChange(`panel1`)
                    }
                    sx = {
                            {
                                marginBottom: "20px",
                                boxShadow: "none",
                            }
                        } >
                        <
                        AccordionSummary
                    className = "borderRad"


                    style = {
                            {
                                background: isDarkMode ? "#101010" : "#F1F1F1",
                                borderRight: "6px outset rgb(142, 142, 142)",
                                borderLeft: "6px outset rgb(142, 142, 142)",
                                borderBottom: "3px outset rgb(142, 142, 142)",
                            }
                        } >
                        <
                        Grid
                    container
                    style = {
                            {
                                textAlign: "center",
                                padding: "8px 0px 8px 0px",
                                background: isDarkMode ? "#101010" : "#F1F1F1",
                            }
                        } >

                        <
                        Grid item xs lg = {
                            3
                        }
                    className = {
                            classes.colortoggle
                        } >
                        <
                        Box display = "flex"
                    alignItems = "center"
                    mt = {
                            matches650 ? 0 : 0
                        } >
                        <
                        Box >
                        <
                        img
                    src = {
                        tickerTBL
                    }
                    style = {
                        {
                            width: matches650 ? "70%" : "70%",
                            borderRadius: "12px",
                        }
                    }
                    alt = "" /
                        >
                        <
                        /Box> <
                        Box style = {
                            {
                                fontSize: "1.1rem"
                            }
                        } > TBL < /Box> <
                        /Box> <
                        /Grid>

                    {
                        matches650 ? < Grid
                        item xs lg = {
                            3
                        }
                        className = {
                            classes.colortoggle
                        }
                        style = {
                                {
                                    fontSize: "1.1rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }
                            } >
                            <
                            Box

                        style = {
                                {
                                    fontSize: "1.1rem",
                                }
                            }


                            >
                            {
                                staketbl ? +formatUnits(staketbl.toString(), "6") : 0
                            }
                        TBL

                            <
                            /Box>

                            <
                            /Grid>:""}


                            <
                            Grid
                        item xs lg = {
                            3
                        }
                        // xs={matches650?2:4}
                        className = {
                            classes.colortoggle
                        }
                        style = {
                                {
                                    fontSize: "1.1rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }
                            } >
                            <
                            Box >

                            {
                                erc20Reward ? (+erc20Reward / +_percentDivider) * 100 : 0
                            } %
                            <
                            /Box> <
                            /Grid>

                            <
                            Grid item xs lg = {
                                3
                            }

                        className = {
                            classes.colortoggle
                        }
                        style = {
                                {
                                    fontSize: "1.1rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }
                            } >
                            <
                            Box >
                            <
                            Button
                        ariaControls = "panel1a-content"
                        id = "panel1a-header"
                        ariaControls = {
                            `panel1bh-content`
                        }
                        id = {
                            `panel1bh-header`
                        }
                        style = {
                                {
                                    background: "white",
                                    color: "black"
                                }
                            } >
                            Stake {
                                " "
                            } <
                            i
                        style = {
                            {
                                marginLeft: "4px"
                            }
                        }
                        class = "fa-solid fa-circle-arrow-down" >
                            < /i> <
                            /Button> <
                            /Box>

                            <
                            /Grid>


                            <
                            /Grid> <
                            /AccordionSummary>

                            <
                            AccordionDetails
                        style = {
                                {
                                    padding: "20px 0px",
                                    background: isDarkMode ? "rgb(78, 78, 78)" : "#DDDDDD",
                                }
                            } >
                            <
                            Grid container style = {
                                {
                                    textAlign: "center"
                                }
                            } >
                            <
                            Grid item xs = {
                                12
                            }
                        md = {
                                6
                            } >
                            <
                            Typography className = {
                                classes.colortoggle
                            } >
                            My Wallet Balance: {
                                " "
                            } <
                            font style = {
                                {
                                    color: "red"
                                }
                            } > {+balanceOf > 0 ?
                                +formatUnits(balanceOf, 6) - +stakedAmount > 0 ?
                                +formatUnits(balanceOf, 6) - +stakedAmount :
                                0 :
                                    0
                            } <
                            /font>{" "}
                        TBL
                            <
                            /Typography> <
                            Typography
                        className = {
                            classes.colortoggle
                        }
                        style = {
                                {
                                    marginTop: "10px"
                                }
                            } >
                            Total Withdrawals:
                            <
                            font style = {
                                {
                                    color: "red",
                                }
                            } > {
                                Tblreward ?
                                +formatUnits(Tblreward.toString(), "6") :
                                    0
                            } <
                            /font>{" "}
                        TBL
                            <
                            /Typography> <
                            /Grid>

                            <
                            Grid item xs = {
                                12
                            }
                        md = {
                                6
                            } >
                            <
                            Typography className = {
                                classes.colortoggle
                            }
                        style = {
                                {
                                    marginTop: matches650 ? "" : "10px"
                                }
                            } >

                            My Staked Amount: {
                                " "
                            } <
                            font style = {
                                {
                                    color: "red",
                                }
                            } > {
                                " "
                            } { /* {staketbl ? (+formatUnits(staketbl.toString(), "6")- +formatUnits(unstakedtbl.toString(), "6") ) : 0} */ } {
                                staketbl ? (+formatUnits(staketbl.toString(), "6")) : 0
                            } <
                            /font>{" "}
                        TBL
                            <
                            /Typography> <
                            Typography
                        className = {
                            classes.colortoggle
                        }
                        style = {
                                {
                                    marginTop: "10px"
                                }
                            } >
                            My Current Profit: {
                                " "
                            } <
                            font style = {
                                {
                                    color: "red"
                                }
                            } > {
                                /* {tblProfit
                                                            ? +formatUnits(tblProfit.toString(), "6")
                                                            : 0} */
                            } {
                                tblProfit ? +formatUnits(tblProfit.toString(), "6") : 0
                            } <
                            /font>{" "}
                        TBL
                            <
                            /Typography> <
                            /Grid>

                            <
                            Grid
                        item
                        xs = {
                            12
                        }
                        style = {
                                {
                                    margin: "auto",
                                    padding: "10px 0px 0px 0px"
                                }
                            } >
                            <
                            hr / >
                            <
                            /Grid>

                            <
                            Grid
                        container
                        justifyContent = "center"
                        style = {
                                {
                                    textAlign: "left"
                                }
                            } >
                            <
                            Grid
                        style = {
                            {
                                marginBottom: "20px"
                            }
                        }
                        align = "center"
                        item
                        xs = {
                            12
                        }
                        md = {
                                4
                            } >
                            <
                            Box
                        style = {
                                {
                                    width: "80%",
                                    margin: "auto",
                                    textAlign: "left",
                                }
                            } >
                            <
                            Typography
                        style = {
                                {
                                    marginBottom: "10px",
                                    textAlign: "left",
                                    color: "red",
                                }
                            } >
                            Enter TBL Amount:
                            <
                            /Typography> <
                            /Box> <
                            Box style = {
                                {
                                    width: "100%"
                                }
                            } >
                            <
                            input
                        onChange = {
                            (e) =>
                            ValidationValues(
                                e.target.value,
                                formatUnits(balanceOf.toString(), "6")
                            )
                        }
                        value = {
                            stakedAmount
                        }
                        className = "girdinput"
                        style = {
                            {
                                background: "#D4D4D4",
                                border: "0px",
                                width: "80%",
                                height: "40px",
                                borderRadius: "8px",
                                textIndent: "6px",
                                marginBottom: "10px",
                            }
                        }
                        type = "number"
                        min = "0"
                        step = "0.000001"
                        placeholder = "Amount"
                        required = "" /
                            >
                            <
                            /Box> <
                            button
                        onClick = {
                            STAKETBL
                        }
                        style = {
                            {
                                background: "white",
                                width: "80%",
                                height: "40px",
                                borderRadius: "8px",
                                border: "0px",
                                cursor: "pointer",
                            }
                        }
                        type = "button" >
                            <
                            i className = "fas fa-donate" > < /i> Stake <
                            /button>

                            <
                            /Grid> <
                            Grid
                        style = {
                            {
                                marginBottom: "20px"
                            }
                        }
                        align = "center"
                        item
                        xs = {
                            12
                        }
                        md = {
                                4
                            } >
                            <
                            Box
                        style = {
                                {
                                    width: "80%",
                                    margin: "auto",
                                    textAlign: "left",
                                }
                            } >

                            <
                            /Box> <
                            Box style = {
                                {
                                    width: "100%"
                                }
                            }
                        mt = {
                                matches650 ? 11 : 3
                            } >
                            <
                            button
                        onClick = {
                            () => {
                                if (!userWalletAddress) {
                                    toast.error("please connect to wallet first");
                                } else {
                                    if (claimTimeTbl < +moment().format("X")) {
                                        toast.error(
                                            "You can Reinvest before withDraw time."
                                        );
                                    } else {
                                        _unStakeTBL(1);
                                    }


                                }
                            }
                        }
                        style = {
                            {
                                background: "white",
                                width: "80%",
                                height: "40px",
                                borderRadius: "8px",
                                border: "0px",
                                cursor: "pointer",
                            }
                        }
                        type = "button" >
                            <
                            i
                        style = {
                            {
                                marginRight: "10px"
                            }
                        }
                        className = "fas fa-hand-holding-usd" >
                            < /i>

                        Reinvest
                            <
                            /button> <
                            br / > {
                                claimTimeTbl < +moment().format("X")

                            } <
                            /Box> <
                            /Grid>



                            <
                            Grid
                        style = {
                            {
                                marginBottom: "20px"
                            }
                        }
                        align = "center"
                        item
                        xs = {
                            12
                        }
                        md = {
                                4
                            } >
                            <
                            Box style = {
                                {
                                    width: "100%"
                                }
                            }
                        mt = {
                                matches650 ? 11 : 3
                            } >
                            <
                            button
                        onClick = {
                            () => {
                                if (!userWalletAddress) {
                                    toast.error("please connect to wallet first");
                                } else {
                                    _withdrawTBL(1, userWalletAddress);

                                }
                            }
                        }
                        style = {
                            {
                                background: "white",
                                width: "80%",
                                height: "40px",
                                borderRadius: "8px",
                                border: "0px",
                                cursor: "pointer",
                            }
                        }
                        type = "button" >

                            <
                            i
                        style = {
                            {
                                marginRight: "10px"
                            }
                        }
                        className = "fad fa-treasure-chest" >
                            < /i>


                        Withdraw Reward
                            <
                            /button> <
                            /Box> <
                            /Grid> <
                            Grid
                        style = {
                            {
                                marginBottom: "20px"
                            }
                        }
                        align = "center"
                        item
                        xs = {
                            12
                        }
                        lg = {
                                4
                            } >
                            <
                            Box style = {
                                {
                                    width: "100%"
                                }
                            }
                        mt = {
                                1
                            } >
                            <
                            button
                        onClick = {
                            () => {
                                if (!userWalletAddress) {
                                    toast.error("please connect to wallet first");
                                } else {
                                    if (+moment().format("X") < +unstakeTimeTbl) {
                                        return toast.error("You cannot witdraw. your unstaked Time not reached.");
                                    } else if (+moment().format("X") > +claimTimeTbl) {
                                        return toast.error("You can only witdraw.");
                                    } else {

                                        _UnfreezTBL(1, userWalletAddress);
                                    }

                                }
                            }
                        }
                        style = {
                            {
                                background: "white",
                                width: "80%",
                                height: "40px",
                                borderRadius: "8px",
                                border: "0px",
                                cursor: "pointer",
                            }
                        }
                        type = "button" >
                            <
                            i className = "fad fa-chevron-circle-left"
                        style = {
                            {
                                marginRight: "10px"
                            }
                        } > < /i>

                        unFreeze
                            <
                            /button> <
                            br / >
                            <
                            span style = {
                                {
                                    color: "red"
                                }
                            } > {+unstakeTimeTbl > 0 ?
                                _unstakeTimerTbl ? .time_days +
                                ":" +
                                _unstakeTimerTbl ? .time_Hours +
                                ":" +
                                _unstakeTimerTbl ? .time_Minusts +
                                ":" +
                                _unstakeTimerTbl ? .time_seconds :
                                "00:00:00 "
                            } < /span> <
                            /Box> <
                            /Grid>



                            <
                            Grid
                        style = {
                            {
                                marginBottom: "20px"
                            }
                        }
                        align = "center"
                        item
                        xs = {
                            12
                        }
                        lg = {
                                4
                            } >
                            <
                            Box style = {
                                {
                                    width: "100%"
                                }
                            }
                        mt = {
                                1
                            } >
                            <
                            button
                        onClick = {
                            () => {
                                if (!userWalletAddress) {
                                    toast.error("please connect to wallet first");
                                } else {
                                    if (claimTimeTbl > +moment().format("X")) {
                                        toast.error("You cannot witdraw. your time did not End.");
                                    } else {
                                        CompleteWithDraw(1, userWalletAddress);

                                    }

                                }
                            }
                        }
                        style = {
                            {
                                background: "white",
                                width: "80%",
                                height: "40px",
                                borderRadius: "8px",
                                border: "0px",
                                cursor: "pointer",
                            }
                        }
                        type = "button" >
                            <
                            i className = "fas fa-money-bill"
                        style = {
                            {
                                marginRight: "10px"
                            }
                        } > < /i>

                        Complete Withdraw

                            <
                            /button> <
                            br / >
                            <
                            span style = {
                                {
                                    color: "red"
                                }
                            } > {+bTime > 0 ?
                                _countTimeTbl ? .time_days +
                                ":" +
                                _countTimeTbl ? .time_Hours +
                                ":" +
                                _countTimeTbl ? .time_Minusts +
                                ":" +
                                _countTimeTbl ? .time_seconds :
                                "00:00:00"
                            } < /span>

                            <
                            /Box> <
                            /Grid> <
                            /Grid> <
                            Grid
                        style = {
                            {
                                width: "100%",
                                margin: "auto",
                                marginTop: "30px",
                            }
                        }
                        container
                            >
                            <
                            Box
                        style = {
                                {
                                    width: "90%",
                                    margin: "auto",
                                    textAlign: "left",
                                }
                            } >
                            <
                            Typography style = {
                                {
                                    color: "red"
                                }
                            } >
                            <
                            i className = "fas fa-info-circle" > < /i> Rules: <
                            /Typography> <
                            List >
                            <
                            ListItem >
                            <
                            ListItemIcon style = {
                                {
                                    marginLeft: "14px"
                                }
                            } >
                            <
                            i
                        style = {
                            {
                                fontSize: "10px",
                                color: isDarkMode ? "red" : "black",
                            }
                        }
                        className = "fa-solid fa-circle" >
                            < /i> <
                            /ListItemIcon> <
                            ListItemText style = {
                                {
                                    marginLeft: "-20px"
                                }
                            } >
                            <
                            span className = {
                                classes.colortoggle
                            } > Stake < /span>{" "} <
                            font style = {
                                {
                                    color: "red"
                                }
                            } > TBL < /font>{" "} <
                            span className = {
                                classes.colortoggle
                            } >
                            to earn <
                            /span>{" "} <
                            font style = {
                                {
                                    color: "red"
                                }
                            } > TBL. < /font> <
                            /ListItemText> <
                            /ListItem> <
                            ListItem >
                            <
                            ListItemIcon style = {
                                {
                                    marginLeft: "14px"
                                }
                            } >
                            <
                            i
                        style = {
                            {
                                fontSize: "10px",
                                color: isDarkMode ? "red" : "black",
                            }
                        }
                        className = "fa-solid fa-circle" >
                            < /i> <
                            /ListItemIcon> <
                            ListItemText style = {
                                {
                                    marginLeft: "-20px"
                                }
                            } >
                            <
                            span className = {
                                classes.colortoggle
                            } >
                            The minimum staking amount is <
                            /span> {
                                " "
                            } <
                            font style = {
                                {
                                    color: "red"
                                }
                            } >
                            1, 000 TBL. <
                            /font>{" "} <
                            /ListItemText> <
                            /ListItem> <
                            ListItem >
                            <
                            ListItemIcon style = {
                                {
                                    marginLeft: "14px"
                                }
                            } >
                            <
                            i
                        style = {
                            {
                                fontSize: "10px",
                                color: isDarkMode ? "red" : "black",
                            }
                        }
                        className = "fa-solid fa-circle" >
                            < /i> <
                            /ListItemIcon> <
                            ListItemText style = {
                                {
                                    marginLeft: "-20px"
                                }
                            } >
                            <
                            span className = {
                                classes.colortoggle
                            } >
                            You can reinvest <
                            /span>{" "} <
                            font style = {
                                {
                                    color: "red"
                                }
                            } >
                            your current profit <
                            /font>{" "} <
                            span className = {
                                classes.colortoggle
                            } >
                            at anytime and it will be added to your staked
                        amount. <
                            /span> <
                            /ListItemText> <
                            /ListItem> <
                            ListItem >
                            <
                            ListItemIcon style = {
                                {
                                    marginLeft: "14px"
                                }
                            } >
                            <
                            i
                        style = {
                            {
                                fontSize: "10px",
                                color: isDarkMode ? "red" : "black",
                            }
                        }
                        className = "fa-solid fa-circle" >
                            < /i> <
                            /ListItemIcon> <
                            ListItemText style = {
                                {
                                    marginLeft: "-20px"
                                }
                            } >
                            <
                            span className = {
                                classes.colortoggle
                            } >
                            You can unFreeze your {
                                " "
                            } <
                            /span> <
                            font style = {
                                {
                                    color: "red"
                                }
                            } > staked TBL + TBL Current profit < /font>{" "} <
                            span className = {
                                classes.colortoggle
                            } > after < /span>{" "} <
                            font style = {
                                {
                                    color: "red"
                                }
                            } > 3 < /font>{" "} <
                            span className = {
                                classes.colortoggle
                            } >
                            days. <
                            /span> <
                            /ListItemText> <
                            /ListItem> <
                            ListItem >
                            <
                            ListItemIcon style = {
                                {
                                    marginLeft: "14px"
                                }
                            } >
                            <
                            i
                        style = {
                            {
                                fontSize: "10px",
                                color: isDarkMode ? "red" : "black",
                            }
                        }
                        className = "fa-solid fa-circle" >
                            < /i> <
                            /ListItemIcon> <
                            ListItemText style = {
                                {
                                    marginLeft: "-20px"
                                }
                            } >
                            <
                            span className = {
                                classes.colortoggle
                            } >
                            You can withdraw your <
                            /span>{" "} <
                            font style = {
                                {
                                    color: "red"
                                }
                            } > TBL < /font>{" "} <
                            span className = {
                                classes.colortoggle
                            } >
                            rewards at anytime. <
                            /span> <
                            /ListItemText> <
                            /ListItem> <
                            /List> <
                            /Box> <
                            /Grid> <
                            /Grid> <
                            /AccordionDetails> <
                            /Accordion>

                        { /* Second accordion starts here */ } <
                        /Grid> <
                        Grid
                        item
                        xs = {
                            12
                        }
                        style = {
                                {
                                    background: isDarkMode ? "#101010" : "#F1F1F1"
                                }
                            } >
                            <
                            Accordion
                        expanded = {
                            expanded === `panel2`
                        }
                        onChange = {
                            handleChange(`panel2`)
                        }
                        sx = {
                                {
                                    marginBottom: "20px",
                                    background: isDarkMode ? "#101010" : "#F1F1F1",
                                    boxShadow: "none",
                                }
                            } >
                            <
                            AccordionSummary
                        className = "borderRad"
                        // expandIcon={
                        //     <i class="fa-solid fa-circle-arrow-down"></i>
                        // }

                        style = {
                                {
                                    background: isDarkMode ? "#101010" : "#F1F1F1",
                                    borderRight: "6px outset rgb(142, 142, 142)",
                                    borderLeft: "6px outset rgb(142, 142, 142)",
                                    borderBottom: "6px outset rgb(142, 142, 142)",
                                }
                            } >
                            <
                            Grid
                        container
                        style = {
                                {
                                    textAlign: "center",
                                    padding: "8px 0px 8px 0px"
                                }
                            } >
                            <
                            Grid
                        item xs lg = {
                            3
                        }
                        className = {
                                classes.colortoggle
                            }


                            >
                            <
                            Box display = "flex"
                        alignItems = "center" >
                            <
                            Box >
                            <
                            img
                        src = {
                            tickerNFT
                        }
                        style = {
                            {
                                width: matches650 ? "70%" : "70%",
                                borderRadius: "12px",
                            }
                        }
                        alt = "" /
                            >
                            <
                            /Box> <
                            Box style = {
                                {
                                    fontSize: "1.1rem",
                                }
                            } > NFT < /Box> <
                            /Box> <
                            /Grid> {
                                matches650 ? < Grid
                                item xs lg = {
                                    3
                                }
                                className = {
                                    classes.colortoggle
                                }
                                style = {
                                        {
                                            fontSize: "1.1rem",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }
                                    } >
                                    {+nftStaked > 0 ? +nftStaked : 0
                                    }
                                NFT { /* {+nftStaked > 0 ? +nftStaked - +unstakednft : 0} NFT */ } <
                                /Grid>:""}


                                <
                                Grid



                                item xs lg = {
                                    3
                                }
                                // xs={matches650?2:4}
                                className = {
                                    classes.colortoggle
                                }
                                style = {
                                        {
                                            fontSize: "1.1rem",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }
                                    } >
                                    <
                                    Box >

                                    {
                                        Trc721Reward ?
                                        formatUnits(Trc721Reward.toString(), "6") :
                                            0
                                    } <
                                    /Box> <
                                    /Grid>


                                    <
                                    Grid item xs lg = {
                                        3
                                    }
                                // xs={matches650?2:4}
                                className = {
                                    classes.colortoggle
                                }
                                style = {
                                        {
                                            fontSize: "1.1rem",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }
                                    } >
                                    <
                                    Button
                                ariaControls = "panel1a-content"
                                id = "panel1a-header"
                                ariaControls = {
                                    `panel1bh-content`
                                }
                                id = {
                                    `panel1bh-header`
                                }
                                style = {
                                        {
                                            background: "white",
                                            color: "black"
                                        }
                                    } >
                                    Stake {
                                        " "
                                    } <
                                    i
                                style = {
                                    {
                                        marginLeft: "4px"
                                    }
                                }
                                className = "fa-solid fa-circle-arrow-down" >
                                    < /i> <
                                    /Button> <
                                    /Grid> <
                                    /Grid> <
                                    /AccordionSummary>

                                    <
                                    AccordionDetails
                                style = {
                                        {
                                            padding: "20px 0px",
                                            background: isDarkMode ? "rgb(78, 78, 78)" : "#DDDDDD",
                                        }
                                    } >
                                    <
                                    Grid container style = {
                                        {
                                            textAlign: "center"
                                        }
                                    } >
                                    <
                                    Grid item xs = {
                                        12
                                    }
                                md = {
                                        6
                                    } >
                                    <
                                    Typography className = {
                                        classes.colortoggle
                                    } >
                                    My Wallet Balance: {
                                        " "
                                    } <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } > {
                                        myPunks.length
                                    } < /font>{" "}
                                NFT
                                    <
                                    /Typography> <
                                    Typography
                                className = {
                                    classes.colortoggle
                                }
                                style = {
                                        {
                                            marginTop: "10px"
                                        }
                                    } >
                                    Total Withdrawals:
                                    <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } > {+withdrawl ?
                                        formatUnits(withdrawl.toString(), "6") :
                                            0
                                    } <
                                    /font>{" "}
                                TBL
                                    <
                                    /Typography> <
                                    /Grid>

                                    <
                                    Grid item xs = {
                                        12
                                    }
                                md = {
                                        6
                                    } >
                                    <
                                    Typography className = {
                                        classes.colortoggle
                                    }
                                style = {
                                        {
                                            marginTop: matches650 ? "" : "10px"
                                        }
                                    } >
                                    My Staked Amount: {
                                        " "
                                    } <
                                    font style = {
                                        {
                                            color: "red",
                                            marginTop: "10px"
                                        }
                                    } > {+nftStaked > 0 ? +nftStaked : 0
                                    } <
                                    /font>{" "}
                                NFT
                                    <
                                    /Typography> <
                                    Typography
                                className = {
                                    classes.colortoggle
                                }
                                style = {
                                        {
                                            marginTop: "10px"
                                        }
                                    } >
                                    My Current Profit: {
                                        " "
                                    } <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } > {
                                        currentProfit ? +formatUnits(currentProfit.toString(), "6") : 0

                                    } <
                                    /font>{" "}
                                TBL
                                    <
                                    /Typography> <
                                    /Grid>

                                    <
                                    Grid style = {
                                        {
                                            margin: "20px 0px 0px 0px"
                                        }
                                    }
                                item xs = {
                                        12
                                    } >
                                    <
                                    Typography
                                className = {
                                    classes.colortoggle
                                }
                                style = {
                                        {
                                            textAlign: "center"
                                        }
                                    } >
                                    {
                                        " "
                                    } <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } >

                                    <
                                    /font> <
                                    /Typography> <
                                    /Grid> <
                                    Grid
                                item
                                xs = {
                                    12
                                }
                                style = {
                                        {
                                            margin: "auto",
                                            padding: "10px 0px 0px 0px"
                                        }
                                    } >
                                    <
                                    hr / >
                                    <
                                    /Grid>

                                    <
                                    Grid
                                container
                                justifyContent = "center"
                                style = {
                                        {
                                            textAlign: "left"
                                        }
                                    } >
                                    <
                                    Grid
                                style = {
                                    {
                                        marginBottom: "20px"
                                    }
                                }
                                align = "center"
                                item
                                xs = {
                                    12
                                }
                                md = {
                                        4
                                    } >
                                    <
                                    Box
                                style = {
                                        {
                                            width: "80%",
                                            margin: "auto",
                                            textAlign: "left",
                                        }
                                    } >
                                    <
                                    Typography
                                style = {
                                        {
                                            color: "red",
                                            marginBottom: "10px",
                                            textAlign: "left",
                                        }
                                    } >
                                    Select Nft Amount:
                                    <
                                    /Typography> <
                                    /Box>

                                    <
                                    Box mt = {
                                        2
                                    } >
                                    <
                                    button
                                onClick = {
                                    () => {
                                        if (myPunks.length > 0) {
                                            setselectionmodalopen(true);
                                        } else {
                                            if (!userWalletAddress) {
                                                toast.error("please connect to wallet first");
                                            } else {
                                                toast.error("please add NFT!");
                                            }
                                        }
                                    }
                                }
                                style = {
                                    {
                                        cursor: "pointer",
                                        background: "white",
                                        width: "80%",
                                        height: "40px",
                                        borderRadius: "8px",
                                        border: "0px",
                                    }
                                }
                                type = "button" >
                                    <
                                    i className = "fas fa-donate" > < /i> Stake <
                                    /button> <
                                    /Box> <
                                    /Grid>

                                    <
                                    Grid
                                style = {
                                    {
                                        marginBottom: "20px"
                                    }
                                }
                                align = "center"
                                item
                                xs = {
                                    12
                                }
                                md = {
                                        4
                                    } >

                                    <
                                    Box mt = {
                                        matches650 ? 5 : 3
                                    } >
                                    <
                                    button
                                onClick = {
                                    () => {
                                        if (!userWalletAddress) {
                                            toast.error("please connect to wallet first");
                                        } else {
                                            _withdrawTBL(0, userWalletAddress);

                                        }
                                    }
                                }
                                style = {
                                    {
                                        background: "white",
                                        width: "80%",
                                        height: "40px",
                                        borderRadius: "8px",
                                        border: "0px",
                                        cursor: "pointer",
                                    }
                                }
                                type = "button" >
                                    <
                                    i
                                style = {
                                    {
                                        marginRight: "10px"
                                    }
                                }
                                className = "fad fa-treasure-chest" >
                                    < /i>
                                Withdraw Reward
                                    <
                                    /button> <
                                    /Box> <
                                    /Grid> 

                                    <
                                    Grid
                                style = {
                                    {
                                        marginBottom: "20px"
                                    }
                                }
                                align = "center"
                                item
                                xs = {
                                    12
                                }
                                md = {
                                        4
                                    } >

                                    <
                                    Box mt = {
                                        matches650 ? 5 : 3
                                    } >
                                    <
                                    button
                                onClick = {
                                    () => {
                                        if (userWalletAddress) {


                                            if (+moment().format("X") < +unstakeTimeNft) {
                                                return toast.error("You cannot witdraw. your unstaked Time not reached.");
                                            } else if (+moment().format("X") > +claimTimeNft) {
                                                return toast.error("You can only witdraw.");
                                            } else {
                                                unFreezeNFT(0);

                                            }




                                        } else {
                                            toast.error("please connect to wallet first");
                                        }
                                    }
                                }
                                style = {
                                    {
                                        background: "white",
                                        width: "80%",
                                        height: "40px",
                                        borderRadius: "8px",
                                        border: "0px",
                                        cursor: "pointer",
                                    }
                                }
                                type = "button" >
                                    <
                                    i
                                style = {
                                    {
                                        marginRight: "10px"
                                    }
                                }
                                className = "fas fa-hand-holding-usd" >
                                    < /i>
                                Unfreeze
                                    <
                                    /button> <
                                    br / >
                                    <
                                    span
                                style = {
                                        {
                                            color: "red",
                                            marginTop: "10px",
                                        }
                                    }



                                    >
                                    {+unstakeTimeNft > 0 ?
                                        _unstakeTimerNft ? .time_days +
                                        ":" +
                                        _unstakeTimerNft ? .time_Hours +
                                        ":" +
                                        _unstakeTimerNft ? .time_Minusts +
                                        ":" +
                                        _unstakeTimerNft ? .time_seconds :
                                        "00:00:00"
                                    } < /span> <
                                    /Box> <
                                    /Grid> 

                                    <
                                    Grid
                                style = {
                                    {
                                        marginBottom: "20px"
                                    }
                                }
                                align = "center"
                                item
                                xs = {
                                    12
                                }
                                md = {
                                        4
                                    } >

                                    <
                                    Box mt = {
                                        1
                                    } >
                                    <
                                    button
                                onClick = {
                                    () => {
                                        if (!userWalletAddress) {
                                            toast.error("please connect to wallet first");
                                        } else {
                                            if (claimTimeNft > +moment().format("X")) {
                                                toast.error("You cannot witdraw. your time didnot start.");
                                            } else {
                                                CompleteWithDraw(0, userWalletAddress);
                                            }

                                        }
                                    }
                                }
                                style = {
                                    {
                                        background: "white",
                                        width: "80%",
                                        height: "40px",
                                        borderRadius: "8px",
                                        border: "0px",
                                        cursor: "pointer",
                                    }
                                }
                                type = "button" >
                                    <
                                    i className = "fas fa-money-bill"
                                style = {
                                    {
                                        marginRight: "10px"
                                    }
                                } > < /i>
                                Withdraw
                                    <
                                    /button> <
                                    br / >


                                    <
                                    span style = {
                                        {
                                            color: "red"
                                        }
                                    } > {

                                        +_aTime > 0 ?
                                        countTime ? .time_days +
                                        ":" +
                                        countTime ? .time_Hours +
                                        ":" +
                                        countTime ? .time_Minusts +
                                        ":" +
                                        countTime ? .time_seconds :
                                        "00:00:00"
                                    } < /span>

                                    <
                                    /Box> <
                                    /Grid>

                                    <
                                    /Grid>

                                    <
                                    Grid
                                style = {
                                    {
                                        width: "100%",
                                        margin: "auto",
                                        marginTop: "30px",
                                    }
                                }
                                container
                                    >
                                    <
                                    Box
                                style = {
                                        {
                                            width: "90%",
                                            margin: "auto",
                                            textAlign: "left",
                                        }
                                    } >
                                    <
                                    Typography style = {
                                        {
                                            color: "red"
                                        }
                                    } >
                                    <
                                    i className = "fas fa-info-circle" > < /i> Rules: <
                                    /Typography> <
                                    List >
                                    <
                                    ListItem >
                                    <
                                    ListItemIcon style = {
                                        {
                                            marginLeft: "14px"
                                        }
                                    } >
                                    <
                                    i
                                style = {
                                    {
                                        fontSize: "10px",
                                        color: isDarkMode ? "red" : "black",
                                    }
                                }
                                className = "fa-solid fa-circle" >
                                    < /i> <
                                    /ListItemIcon> <
                                    ListItemText style = {
                                        {
                                            marginLeft: "-20px"
                                        }
                                    } >
                                    <
                                    span className = {
                                        classes.colortoggle
                                    } > Stake < /span>{" "} <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } > NFT < /font>{" "} <
                                    span className = {
                                        classes.colortoggle
                                    } >
                                    to earn <
                                    /span>{" "} <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } > TBL. < /font> <
                                    /ListItemText> <
                                    /ListItem> <
                                    ListItem >
                                    <
                                    ListItemIcon style = {
                                        {
                                            marginLeft: "14px"
                                        }
                                    } >
                                    <
                                    i
                                style = {
                                    {
                                        fontSize: "10px",
                                        color: isDarkMode ? "red" : "black",
                                    }
                                }
                                className = "fa-solid fa-circle" >
                                    < /i> <
                                    /ListItemIcon> <
                                    ListItemText style = {
                                        {
                                            marginLeft: "-20px"
                                        }
                                    } >
                                    <
                                    span className = {
                                        classes.colortoggle
                                    } >
                                    You can unFreeze your {
                                        " "
                                    } <
                                    /span> <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } > NFT + TBL Current profit < /font>{" "} <
                                    span className = {
                                        classes.colortoggle
                                    } > after < /span>{" "} <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } > 3 < /font>{" "} <
                                    span className = {
                                        classes.colortoggle
                                    } >
                                    days. <
                                    /span> <
                                    /ListItemText> <
                                    /ListItem> <
                                    ListItem >
                                    <
                                    ListItemIcon style = {
                                        {
                                            marginLeft: "14px"
                                        }
                                    } >
                                    <
                                    i
                                style = {
                                    {
                                        fontSize: "10px",
                                        color: isDarkMode ? "red" : "black",
                                    }
                                }
                                className = "fa-solid fa-circle" >
                                    < /i> <
                                    /ListItemIcon> <
                                    ListItemText style = {
                                        {
                                            marginLeft: "-20px"
                                        }
                                    } >
                                    <
                                    span className = {
                                        classes.colortoggle
                                    } >
                                    You can withdraw your <
                                    /span>{" "} <
                                    font style = {
                                        {
                                            color: "red"
                                        }
                                    } > TBL < /font>{" "} <
                                    span className = {
                                        classes.colortoggle
                                    } >
                                    rewards at anytime. <
                                    /span> <
                                    /ListItemText> <
                                    /ListItem> <
                                    /List> <
                                    /Box> <
                                    /Grid> <
                                    /Grid> <
                                    /AccordionDetails> <
                                    /Accordion> <
                                    /Grid> <
                                    /Grid>

                                    <
                                    Grid
                                container
                                style = {
                                    {
                                        marginTop: "40px",
                                        padding: "0px 0px 0px 40px"
                                    }
                                }
                                justifyContent = "flex-start" >
                                    <
                                    Grid item >
                                    <
                                    a href = "https://t.me/tblocksw"
                                target = "_blank" >
                                    <
                                    i
                                style = {
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
                                    i
                                style = {
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
                                    i
                                style = {
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
                                    a
                                href = "https://peridot-heather-e84.notion.site/Getting-Started-ad66f7fe2a654ebfbbdbc6861116991d"
                                target = "_blank" >
                                    <
                                    i
                                style = {
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
                                    /Box> <
                                    /div> <
                                    />
                            );
                    }

                    export default Stake;