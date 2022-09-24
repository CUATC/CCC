import {
    createTheme,
    makeStyles,
    ThemeProvider
} from "@material-ui/core";
import config from "./utils/config"
import axios from "axios";
import React, {
    useEffect,
    useState
} from "react";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Tpunks from "./components/Tpunks/Tpunks";
import LogoutModal from "./logoutModel";
import Punkinfo from "./components/punkInfo/Punkinfo";
import {
    ToastContainer,
    toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filtermodal from "./filterModal";
import FilterModal2 from "./filterModalJdoge";
import Loading from "./Loading";
import InputModal from "./inputModal";

// Environment Import

import {
    environment
} from "./environment";
import {
    formatUnits
} from "@ethersproject/units";
import {
    ServerURL
} from "./ServerURL";

import Admin from "./components/adminpanel/Admin";
import ScrollToTop from "react-scroll-to-top";
import BasicModalView from "./Viewer";
import PlayModal from "./Play";
import $ from "jquery";
// Imports for Phase 2 components

import Stake from "./components/Stake/Stake";
// import SelectionModal from "./NftSelectionModal";
import Bridge from "./components/EthBridge/Bridge";
import BridgeAccount from "./components/EthBridge/BridgeAccount";
import BridgeDetialsModal from "./BridgedetailsPage";
import Exchange from "./components/Exchange/Exchange";

// Contract Imports

// import { useROIContract } from "./ConnectivityAss/hooks";

import {
    useContext
} from "react";
import {
    AppContext
} from "./utils";
import {
    StakingContract
} from "./hooks/contract";
import TronHelper from "./tronhelper";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#4E4E4E",
            light: "#FFFFFF",
            dark: "rgb(241, 241, 241)",
        },
        secondary: {
            main: "rgb(51, 51, 51) ",
            light: "#296588",
            dark: "#FFFFFF",
            border: "#003760",
            whitepink: "#4E4E4E",
            whitegreen: "#064E3B",
            bw: "#212121",
            wb: "#FFFFFF",
            gw: "#4E4E4E",
            lightblueblack: "#D8D7EB",
            btnbg: "#497BEA",
            btnborder: "#497BEA",
            cardbg: "#C8C6E0",
            bgcmenu: "#FFFFFF",
            tabbacckground: "#F6F4F7",
        },
    },
});

const DarkTheme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
            light: "#FFFFFF",
            dark: "#101010",
        },
        secondary: {
            main: "#D38A8A",
            light: "#296588",
            dark: "#101010",
            border: "#555555",
            whitepink: "#FFFFFF",
            whitegreen: "#FFFFFF",
            bw: "#FFFFFF",
            wb: "black",
            gw: "#F2F2F2",
            lightblueblack: "black",
            brgr: "4px solid #D40000",
            btnbg: "#2A2A2E",
            btnborder: "#0A84FF",
            cardbg: "#535353",
            bgcmenu: "#101010",
            tabbacckground: "#000000",
        },
    },
});

//Component Imports

const useStyle = makeStyles({
    dark: {
        backgroundColor: "#101010",
    },
    light: {
        backgroundColor: "rgb(241, 241, 241)",
    },
});

function App() {
    // MetaMask
    // const { account, signer, connect, chainId } = useContext(AppContext);

    // Contract State
    // const RoiContract = useROIContract(signer);

    // /Usage States
    const [tronWeb, setTronWeb] = useState();
    const [userWalletAddress, setuserWalletAddress] = useState(null);
    const [data, setdata] = useState(false);
    const {
        account
    } = useContext(AppContext);
    const [loadmoreObject, setloadmoreObject] = useState({
        defaultLoadmore: true,
        searchbyid: false,
        searchbyvalue: false,
    });

    const [field, setfield] = useState("");
    const [contractNft, setcontractNft] = useState("");
    const [contractToken, setcontractToken] = useState("");
    const [contractExchange, setcontractExchange] = useState("");
    const [filterLoadmore, setfilterLoadmore] = useState(false);

    // Generic Data
    const [Activation, setActivation] = useState(false);
    const [userAction, setuserAction] = useState(0);
    const [logoutopen, setlogoutopen] = useState(false);
    const [totalSupply, settotalSupply] = useState("Connect Wallet");
    // setnftPriceToken
    const [nftPrice, setnftPrice] = useState("Connect Wallet");
    const [nftPriceToken, setnftPriceToken] = useState("Connect Wallet");
    const [totalAvailable, settotalAvailable] = useState("Connect Wallet");
    const [openinput, setopeninput] = useState(false);
    const [galleryPunks, setgalleryPunks] = useState([]);
    const [myPunks, setmyPunks] = useState([]);
    const [_stakedNft, setStakedNfts] = useState([]);
    // Handling Buy and Sell Confirmation
    const [BuyConfirmation, setBuyConfirmation] = useState(false);
    const [currentSellingNftObject, setcurrentSellingNftObject] = useState({});
    const [jdogeState, setjdogeState] = useState(false);
    const [galleryState, setgalleryState] = useState(false);

    // Handling Modal filter
    const [filtermodalopen, setfiltermodalopen] = useState(false);
    const [filtermodalopen2, setfiltermodalopen2] = useState(false);
    const [galleryServerResponse, setgalleryServerResponse] = useState(false);
    const [sortBy, setsortBy] = useState(false);
    const [attributes, setattributes] = useState([]);
    const [filterByType, setfilterByType] = useState(false);
    const [fromgallery, setfromgallery] = useState(false);
    const [isMintProcessing, setisMintProcessing] = useState(false);
    const [MintArray, setMintArray] = useState([]);
    const [mintNumber, setmintNumber] = useState(1);
    const [MongoIds, setMongoIds] = useState([]);
    const [randomSelectionIds, setrandomSelectionIds] = useState([]);
    const [updateIds, setupdateIds] = useState(false);
    const [updateGallery, setupdateGallery] = useState(false);
    const [airdropWalletAddress, setairdropWalletAddress] = useState("");
    const [airdropState, setairdropState] = useState(false);
    const [viewmodalopen, setviewmodalopen] = useState(true);
    const [current3dLink, setcurrent3dLink] = useState("");
    const [visibility, setvisibility] = useState("none");
    const [isVisible, setisVisible] = useState("visible");
    const [loading, setloading] = useState(false);
    const [confirmTransfer, setconfirmTransfer] = useState(false);
    const [mintID, setmintID] = useState(false);
    const [newowner, setnewowner] = useState(false);
    const [Play, setPlay] = useState(false);
    const [PlayId, setPlayId] = useState(false);
    const [Playopen, setPlayopen] = useState(false);
    const [cashbackData, setcashbackData] = useState([]);
    const [cashbackData2, setcashbackData2] = useState([]);

    // State for Payment method

    const [isTrc20, setisTrc20] = useState(false);
    const [selectionmodalopen, setselectionmodalopen] = useState(false);

    // States for contract token
    const [balanceOf, setbalanceOf] = useState(0);
    const [allowance, setallowance] = useState(0);
    const [allowanceExchange, setallowanceExchange] = useState(0);
    const [nftTokenprice, setnftTokenprice] = useState(0);
    const [updateInfo, setupdateInfo] = useState(false);
    const [ethDetailedNft, setethDetailedNft] = useState([]);
    const [detailsmodalopen, setdetailsmodalopen] = useState(false);
    const [accountBalance, setaccountBalance] = useState(0);
    const [MintedNftsArray, setMintedNftsArray] = useState("");
    const [myDoges, setmyDoges] = useState([]);
    const [btoken, setBoughtToken] = useState(0);
    const [ExchangeBuyPrice, setExchangeBuyPrice] = useState(0);
    const [ExchangeSellPrice, setExchangeSellPrice] = useState(0);
    const {
        _stakeContract,
        _stakeTokenContract
    } = StakingContract(tronWeb);
    const [contractBalance, setContractBalance] = React.useState(0);

    //Stake

    const [rewardNftClaim, setRewardNftclaim] = React.useState(0);
    const [totalNftStaked, setTotalNftStaked] = React.useState(0);
    const [rewardTBLclaim, setRewardTBLclaim] = React.useState(0);
    const [withdrawl, setWithDrawl] = React.useState(0);
    const [Tblreward, setTblWithDrawl] = React.useState(0);
    const [tblProfit, setTblProfit] = React.useState(0);
    const [currentProfit, setCurrentProfit] = React.useState(0);
    const [staketbl, setStakeTBL] = React.useState(0);
    const [nftStaked, setNftStaked] = React.useState(0);
    const [Trc721Reward, setTrc721Reward] = React.useState(0);
    const [erc20Reward, setErc20Reward] = React.useState(0);
    const [_percentDivider, setPercentDivider] = React.useState(0);
    const [claimTimeNft, setClaimTimeNFT] = React.useState(0);
    const [claimTimeTbl, setClaimTimeTbl] = React.useState(0);
    const [unstakeTimeTbl, setUnStakeTimeTbl] = React.useState(0);
    const [unstakeTimeNft, setUnStakeTimeNft] = React.useState(0);




    const stakeinit = async () => {
        if (_stakeContract) {
            const _stakeDataNft = await _stakeContract.getuserdata(0, userWalletAddress).call();


            if (_stakeDataNft.ids.length > 0) {
                let isCheck = _stakeDataNft.ids.map(x => +x)
                //  console.log(isCheck,"isCheck the stake ids")

                const bres = await axios.post(`${ServerURL}/stakeIds`, {
                    isCheck,
                    userWalletAddress
                });
                // console.log(bres,"this is the ids")
            }

        }
    }

    React.useEffect(() => {
        stakeinit()
    }, [userWalletAddress, _stakeContract])







    const intthree = async () => {
        if (userWalletAddress && contractNft) {
            let mintedByOwner = await contractNft
                .Mintedbyowner(userWalletAddress)
                .call();
            if (+mintedByOwner.length > 0) {
                for (let index = 0; index < mintedByOwner.length; index++) {
                    mintedByOwner[index] = +mintedByOwner[index];
                }

                await axios
                    .post(ServerURL + `/cashbackQuery`, {
                        walletAddress: userWalletAddress,
                        DataArray: mintedByOwner,
                    })
                    .then((res) => {
                        if (res.data === "success") {
                            setrefreshPunks(true);
                            setloading(false);
                            toast.success("cashback-calculated");
                        } else {
                            console.log(res.data)
                            // toast.error(res.data);
                        }
                    });
            }
        }
    };

    useEffect(() => {
        if (userWalletAddress && contractNft) {
            intthree();
        }
    }, [userWalletAddress, contractNft]);

    useEffect(() => {
        if (userWalletAddress) {
            if (
                userWalletAddress.toLowerCase() !=
                "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW".toLowerCase() &&
                userWalletAddress.toLowerCase() !=
                "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW".toLowerCase() &&
                userWalletAddress.toLowerCase() !=
                "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW".toLowerCase()
            ) {
                $(document).bind("contextmenu", function(e) {
                    return false;
                });
                $(document).on("cut copy paste", function(e) {
                    e.preventDefault();
                });
            } else {
                $(document).unbind("contextmenu");
                $(document).unbind("cut copy paste");
            }
        }
    }, [userWalletAddress]);

    const init4 = async () => {
        if (userWalletAddress && tronWeb) {
            tronWeb && tronWeb.trx
                .getBalance(userWalletAddress)
                .then((res) => {
                    setaccountBalance((+tronWeb.fromSun(res) / 1).toFixed(2));
                    setupdateInfo(false);
                })
                .catch((error) => {
                    // console.log(error, "error=======>");
                });
        }
    };

    React.useEffect(() => {
        if (userWalletAddress && tronWeb) {
            init4();
        }
    }, [tronWeb, userWalletAddress, updateInfo]);

    // This Alignment code it need to be uncommented after testing

    const _allignment = async () => {
        setloading(true);
        const idsByOwner = await contractNft.idsbyowner(userWalletAddress).call();
        const mintedByOwner = await contractNft
            .Mintedbyowner(userWalletAddress)
            .call();


        // For extracting Minted Ids
        for (let index = 0; index < mintedByOwner.length; index++) {
            mintedByOwner[index] = +mintedByOwner[index];
        }

        // For Extracting Ids by Owner Contract
        for (let index = 0; index < idsByOwner.length; index++) {
            idsByOwner[index] = +idsByOwner[index];
        }

        await axios
            .post(ServerURL + `/checkAlignment`, {
                walletAddress: userWalletAddress,
                idsByowner: idsByOwner,
                mintedIds: mintedByOwner,
            })
            .then((res) => {

                if (res.data === "success") {
                    setrefreshPunks(true);
                    setloading(false);
                    toast.success("Data Alignment Done");
                } else if (res.data === "regular") {
                    setloading(false);
                } else {
                    // toast.error(res.data);
                    console.log(res.data, "res.data");
                }
            });
    };

    useEffect(() => {
        if (contractNft && userWalletAddress) {
            _allignment();
        }
    }, [contractNft, userWalletAddress]);

    useEffect(() => {
        const punks = [...myPunks, ..._stakedNft]
        if (punks) {
            setmyDoges(punks);
        }
    }, [myPunks, _stakedNft]);

    // Minting Response

    // Function for token approval

    // const _NftMint = async (counter2) => {

    //   // alert("yes", +counter2);
    // };
    const mintNft = async () => {
        try {
            // 1000000000 * mintNumber
            //Admin Airdrop
            let callvalue = (1000000000 * mintNumber).toString();
            // Airdrop state
            if (airdropState) {
                toast.success("Airdrop Minting...");
                const mintNftresponse = await contractNft
                    .airdrop(airdropWalletAddress, mintNumber)
                    .send({
                        feeLimit: 1000000000
                    });
                toast.success(mintNftresponse);
                await axios
                    .post(ServerURL + `/minthandler`, {
                        walletAddress: airdropWalletAddress,
                        transId: mintNftresponse,
                        DataArray: MongoIds,
                        randomSelected: randomSelectionIds,
                    })
                    .then((res) => {
                        if (res.data === "success") {
                            toast.success("NFT Minted");
                            setupdateIds(true);
                        } else {


                            toast.error(res.data);
                        }
                    });

                setBuyConfirmation(false);
                setisMintProcessing(false);
                setloading(false);
            }
            // If user is minting with trc20
            else {
                //erc20 TO MINT
                if (isTrc20) {
                    // toast.success("TRC20 Minting...");
                    const mintNftresponse = await contractNft
                        .mint(userWalletAddress, mintNumber, isTrc20)
                        .send({
                            callValue: 0,
                            feeLimit: 1000000000,
                        });
                    toast.success(mintNftresponse);
                    await axios
                        .post(ServerURL + `/minthandler`, {
                            walletAddress: userWalletAddress,
                            transId: mintNftresponse,
                            DataArray: MongoIds,
                            randomSelected: randomSelectionIds,
                        })
                        .then((res) => {
                            if (res.data == "success") {
                                toast.success("NFT Minted");
                                setupdateIds(true);
                            } else {

                                toast.error(res.data);
                            }
                        });
                    setBuyConfirmation(false);
                    setisMintProcessing(false);
                    setloading(false);
                }
                // Else statement is for Payment with TRX
                else {
                    /// this is the code of minting with trx
                    //simple minting
                    toast.success("TRX Minting...");
                    const mintNftresponse = await contractNft
                        .mint(userWalletAddress, mintNumber, isTrc20)
                        .send({
                            callValue: callvalue,
                            feeLimit: 1000000000,
                        });
                    toast.success(mintNftresponse);
                    await axios
                        .post(ServerURL + `/minthandler`, {
                            walletAddress: userWalletAddress,
                            transId: mintNftresponse,
                            DataArray: MongoIds,
                            randomSelected: randomSelectionIds,
                        })
                        .then((res) => {
                            if (res.data === "success") {
                                toast.success("NFT Minted");
                                setupdateIds(true);
                            } else {
                                toast.error(res.data);

                            }
                        });
                    setBuyConfirmation(false);
                    setisMintProcessing(false);
                    setloading(false);
                }
            }

            setisMintProcessing(false);
            setBuyConfirmation(false);
            homeCounterinfo();
            intTwo();

            intthree();
        } catch (error) {

            setloading(false);
            setairdropState(false);
            setisMintProcessing(false);
            setBuyConfirmation(false);
            if (error.transaction) {

                toast.error(error);
            } else if (error.message) {

                toast.error(error.message);
            } else if (error.error) {

                toast.error(error.error);
            }
        }
    };

    useEffect(() => {
        if (BuyConfirmation) {
            mintNft();
        }
    }, [BuyConfirmation]);

    // Handling Transfer ownership

    useEffect(() => {
        (async () => {
            if (confirmTransfer && contractNft) {
                try {
                    const prevDataArray = await contractNft
                        .idsbyowner(userWalletAddress)
                        .call();
                    prevDataArray.forEach((element, i) => {
                        prevDataArray[i] = +prevDataArray[i];
                    });

                    const transferOwnership = await contractNft
                        .transferFrom(
                            userWalletAddress.toString(),
                            newowner.toString(),
                            mintID.toString()
                        )
                        .send();
                    toast.warning(
                        "you will be notified further after the transaction has been completed!"
                    );

                    await axios
                        .post(ServerURL + `/transferownership`, {
                            transferResponse: transferOwnership,
                            id: mintID,
                            newowner: newowner,
                            currentowner: userWalletAddress,
                            prevData: prevDataArray,
                        })
                        .then((res) => {
                            if (res.data === "success") {
                                toast.success("OwnerShip Transfered");
                            } else {
                                toast.error("failed");
                            }
                            setrefreshPunks(true);
                            setloading(false);
                            setconfirmTransfer(false);
                        });
                } catch (error) {
                    setloading(false);
                    setconfirmTransfer(false);
                    console.log(error);

                }
            }
        })();
    }, [confirmTransfer, contractNft]);

    const homeCounterinfo = async () => {
        // New Contract Code starts here
        // NFT Contract
        if (contractNft && contractToken && contractExchange) {
            try {
                const getPrice = await contractNft.NFTPrice().call();
                setnftPrice(Math.trunc(formatUnits(getPrice.toString(), 6)));
                const getPriceToken = await contractNft.NFTPriceToken().call();
                setnftPriceToken(Math.trunc(formatUnits(getPriceToken.toString(), 6)));
                const totalSupply = await contractNft.totalSupply().call();
                settotalSupply(+totalSupply);
                const totAvailable = 10000 - +totalSupply;
                settotalAvailable(totAvailable);
                // Token Contract
                const balanceOf = await contractToken
                    .balanceOf(userWalletAddress)
                    .call();
                setbalanceOf(+balanceOf);
                const contractBalance = await contractToken.balanceOf(environment.stakeContract).call();
                setContractBalance(+contractBalance)
                const buyPrice = await contractExchange.tokenPerTRXBuy().call();
                setExchangeBuyPrice(+buyPrice);
                const sellPrice = await contractExchange.tokenPerTRXSell().call();
                setExchangeSellPrice(+sellPrice);
                const boughtToken = await contractExchange.boughtTokenexchange().call();
                setBoughtToken(formatUnits(boughtToken.toString(), "6"));
                const allowance = await contractToken
                    .allowance(userWalletAddress, environment.contractAddressNFT)
                    .call();
                setallowance(+allowance);
                const allowanceExchange = await contractToken
                    .allowance(userWalletAddress, environment.exchangeAddress)
                    .call();
                setallowanceExchange(+allowanceExchange);
                const nftPriceToken = await contractNft.NFTPriceToken().call();
                setnftTokenprice(+nftPriceToken);
            } catch (error) {
                // console.log(error);
                // toast.error(error.message);
                // console.log(error.message);
            }
        } else {
            return;
        }
    };

    useEffect(() => {
        (async () => {
            homeCounterinfo();
            setupdateInfo(false);
        })();
    }, [contractNft, contractToken, updateInfo, contractExchange]);

    // Check Status of user Action
    const checkStatus = async () => {
        const requestAccountsResponse = await window.tronLink.request({
            method: "tron_requestAccounts",
        });
        setuserAction(requestAccountsResponse.code);
    };

    // Check if Tron web is Available

    React.useEffect(() => {
        if (Activation === true) {
            checkStatus();
            const tronLoader = setInterval(() => {
                if (window.tronWeb && window.tronWeb.ready) {
                    setTronWeb(window.tronWeb);
                    clearInterval(tronLoader);
                }
            }, 500);
        }
    }, [Activation]);

    // Initializing Token Contract and Simple Contract

    React.useEffect(() => {
        (async () => {
            if (tronWeb) {
                setuserWalletAddress(tronWeb.defaultAddress.base58);
                tronWeb
                    .contract()
                    .at(environment.contractAddressNFT)
                    .then((contract) => setcontractNft(contract));

                tronWeb
                    .contract()
                    .at(environment.tokenAddress2)
                    .then((contract) => setcontractToken(contract));

                tronWeb
                    .contract()
                    .at(environment.exchangeAddress)
                    .then((contract) => setcontractExchange(contract));
            }
        })();
    }, [tronWeb, account]);

    // Handling accountsChanged Event

    React.useEffect(() => {
        window.addEventListener("message", function(e) {
            if (e.data.message && e.data.message.action === "accountsChanged") {
                window.location.reload();
            }
        });
    }, []);

    // Handling Disconnect Event

    React.useEffect(() => {
        window.addEventListener("message", function(e) {
            if (e.data.message && e.data.message.action === "disconnect") {
                window.location.reload();
            }
        });
    }, []);

    // Handling change changed

    React.useEffect(() => {
        window.addEventListener("message", function(e) {
            // For Checking if user Changed the Chain
            if (e.data.message && e.data.message.action === "setNode") {
                if (e.data.message.data.node.chain === "_") {
                    window.location.reload();
                } else {
                    window.location.reload();
                }
            }
        });
    }, []);

    // ###################################################################################################

    // Server Request Data Handling Starts Here

    // ###################################################################################################

    // Handling route after buying NFT

    // Handling Components PUNKS DATA

    const [searchState, setsearchState] = useState(false);
    const [refreshPunks, setrefreshPunks] = useState(false);

    const [owners, setowners] = useState([]);
    const [OwnedNFTs, setOwnedNFTs] = useState([]);
    const [Ownerstate, setOwnerstate] = useState(false);
    const [Mintedstate, setMintedstate] = useState(false);

    const filterOwners = async (dataset) => {
        const distinctData = await [...new Set(dataset.map((obj) => obj.nftOwner))];
        setowners(distinctData);
        setMintedstate(false);
        setOwnerstate(true);
    };

    useEffect(() => {
        if (Mintedstate) {
            filterOwners(MintedNftsArray);
        }
    }, [Mintedstate]);

    useEffect(() => {
        (async () => {
            if (Ownerstate) {
                await axios
                    .post(ServerURL + `/OwnersData`, {
                        dataArray: owners
                    })
                    .then((res) => {
                        setOwnedNFTs(res.data);
                    });
                setOwnerstate(false);
            }
        })();
    }, [Ownerstate]);



    // console.log("Latest Mint after assignment of val", latestMint)

    useEffect(() => {
        (async () => {
            if (userWalletAddress === "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW") {
                await axios.post(ServerURL + `/getcashbackData`).then((res) => {
                    // console.log("yh reponse hy", res.data)
                    setcashbackData(res.data);
                });
            }
        })();
    }, [userWalletAddress, updateIds]);

    // General User Cashback Data

    const intTwo = async () => {
        await axios
            .post(ServerURL + `/getcashbackData2`, {
                wallet: userWalletAddress
            })
            .then((res) => {
                setcashbackData2(res.data);
            });
    };
    useEffect(() => {
        if (userWalletAddress) {
            intTwo();
        }
        setupdateIds(false);
    }, [userWalletAddress, updateIds]);

    const initMinted = async () => {
        const data = await axios.get(ServerURL + "/getMinted");
        setMintedNftsArray(data.data.dataLength);
    };
    useEffect(() => {
        initMinted();
    }, []);

    // Upper Bound state

    const [upperBound, setupperBound] = useState(50);
    const [loadmoreState, setloadmoreState] = useState(false);
    useEffect(() => {
        (async () => {
            if (updateGallery) {
                await axios
                    .post(ServerURL + `/nftlist1`, {
                        maxLimit: upperBound
                    })
                    .then((res) => {
                        setgalleryPunks(res.data);
                    });
                setupdateGallery(false);
            }
        })();
    }, [updateGallery]);

    useEffect(() => {
        (async () => {
            await axios
                .post(ServerURL + `/nftlist1`, {
                    maxLimit: upperBound
                })
                .then((res) => {
                    setgalleryPunks(res.data);
                    setloadmoreState(false);
                    setdata(false);
                });
            setloadmoreState(false);
        })();
    }, [BuyConfirmation, galleryServerResponse, isMintProcessing, loadmoreState]);

    const _MyPunks = async () => {
        if (userWalletAddress) {
            await axios
                .post(ServerURL + `/mynfts`, {
                    walletAddress: userWalletAddress
                })
                .then(async (res) => {
                    setmyPunks(res.data);
                    let _ids = res.data.map((item) => item.nftid);
                    if (+res.data.length > 0) {
                        const bres = await axios.post(`${ServerURL}/unstakeIds`, _ids);
                    }
                    setrefreshPunks(false);
                });
            await axios.post(ServerURL + `/myStakedNfts`, {
                walletAddress: userWalletAddress
            }).then((res) => {
                setStakedNfts(res.data)
            })

        }
    };

    const _getStaked = async () => {
        try {
            const stakeDataTbl = await _stakeContract
                .getuserdata(1, userWalletAddress)
                .call();

            const _stakeDataNft = await _stakeContract
                .getuserdata(0, userWalletAddress)
                .call();
            const nftBalance = await contractNft.balanceOf(environment.stakeContract).call();

            // const totalNftStake = await _stakeContract.totalNftStaked().call();
            const totalStaked = await _stakeContract.totalStaked().call();
            const viewPlaneTbl = await _stakeContract.viewPlan(1).call();
            const viewPlaneNft = await _stakeContract.viewPlan(0).call();
            const _percentDivider = await _stakeContract.percentDivider().call();
            const _getuseroveralldataTBL = await _stakeContract.getuseroveralldata(1, userWalletAddress).call();
            const _getuseroveralldatabNFT = await _stakeContract.getuseroveralldata(0, userWalletAddress).call();
            const _totalNftRewardClaimed = await _stakeContract.totalNftRewardClaimed().call();
            const _totalStakeRewardClaimed = await _stakeContract.totalRewardClaimed().call();
            setRewardTBLclaim(_totalStakeRewardClaimed);
            setRewardNftclaim(_totalNftRewardClaimed);
            setClaimTimeNFT(_stakeDataNft.LastClaimTime);
            setClaimTimeTbl(stakeDataTbl.LastClaimTime);
            setUnStakeTimeTbl(stakeDataTbl.UnStakeTime);
            setUnStakeTimeNft(_stakeDataNft.UnStakeTime);
            setPercentDivider(_percentDivider);
            setTrc721Reward(+viewPlaneNft.profit);
            setErc20Reward(+viewPlaneTbl.profit);
            setTotalNftStaked(+nftBalance);
            setStakeTBL(stakeDataTbl.Amount);
            setTblWithDrawl(+_getuseroveralldataTBL._totalClaimed);
            setNftStaked(+_stakeDataNft.ids.length);
            setWithDrawl(+_getuseroveralldatabNFT._totalClaimed);
            setInterval(async () => {
                (async () => {
                    const calculateRewardTbl = await _stakeContract
                        .calcRewards(userWalletAddress, 1)
                        .call();
                    const calculateRewardNft = await _stakeContract
                        .calcRewards(userWalletAddress, 0)
                        .call();

                    if (!calculateRewardTbl.hasOwnProperty('amount')) {
                        setTblProfit(+calculateRewardTbl);
                    } else {
                        setTblProfit(+calculateRewardTbl.amount);
                    }
                    if (!calculateRewardNft.hasOwnProperty('amount')) {
                        setCurrentProfit(+calculateRewardNft);
                    } else {
                        setCurrentProfit(+calculateRewardNft.amount);
                    }
                })();
            }, 2000);

        } catch (e) {}
    }

    React.useEffect(() => {
        (async () => {
            if (userWalletAddress && _stakeContract) {
                _getStaked();
            }
            if (userWalletAddress) {
                _MyPunks();
            }
        })();
    }, [userWalletAddress, _stakeContract, BuyConfirmation, refreshPunks]);

    //Search mood
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    document.body.style.backgroundColor =
        isDarkMode === true ? "#101010" : "rgb(241, 241, 241)";
    const classes = useStyle();

    return ( <
        div className = {
            isDarkMode === true ? classes.dark : classes.light
        }
        style = {
            {
                marginTop: "20px"
            }
        } >
        <
        ThemeProvider theme = {
            isDarkMode ? DarkTheme : lightTheme
        } >
        <
        BrowserRouter >
        <
        Header isDarkMode = {
            isDarkMode
        }
        setIsDarkMode = {
            setIsDarkMode
        }
        setfromgallery = {
            setfromgallery
        }
        setupdateGallery = {
            setupdateGallery
        }
        userWalletAddress = {
            userWalletAddress
        }
        /> <
        Route exact path = "/TBlocksinfo/:id" >
        <
        Punkinfo setcurrentSellingNftObject = {
            setcurrentSellingNftObject
        }
        currentSellingNftObject = {
            currentSellingNftObject
        }
        setjdogeState = {
            setjdogeState
        }
        jdogeState = {
            jdogeState
        }
        setgalleryState = {
            setgalleryState
        }
        galleryState = {
            galleryState
        }
        setcurrent3dLink = {
            setcurrent3dLink
        }
        setviewmodalopen = {
            setviewmodalopen
        }
        setvisibility = {
            setvisibility
        }
        setisVisible = {
            setisVisible
        }
        /> <
        /Route>

        <
        Route exact path = "/TBlocks" >
        <
        Tpunks myPunks = {
            myPunks
        }
        setlogoutopen = {
            setlogoutopen
        }
        userAction = {
            userAction
        }
        setActivation = {
            setActivation
        }
        userWalletAddress = {
            userWalletAddress
        }
        setcurrentSellingNftObject = {
            setcurrentSellingNftObject
        }
        setjdogeState = {
            setjdogeState
        }
        setfiltermodalopen2 = {
            setfiltermodalopen2
        }
        sortBy = {
            sortBy
        }
        setcurrent3dLink = {
            setcurrent3dLink
        }
        setviewmodalopen = {
            setviewmodalopen
        }
        setopeninput = {
            setopeninput
        }
        setmintID = {
            setmintID
        }
        setPlayopen = {
            setPlayopen
        }
        setPlay = {
            setPlay
        }
        setPlayId = {
            setPlayId
        }
        cashbackData2 = {
            cashbackData2
        }
        setmyDoges = {
            setmyDoges
        }
        myDoges = {
            myDoges
        }
        intTwo = {
            intTwo
        }
        _stakedNft = {
            _stakedNft
        }
        _MyPunks = {
            _MyPunks
        }
        stakeinit = {
            stakeinit
        }
        /> <
        /Route>

        <
        Route exact path = "/" >
        <
        Home userWalletAddress = {
            userWalletAddress
        }
        setopeninput = {
            setopeninput
        }
        nftPrice = {
            nftPrice
        }
        totalSupply = {
            totalSupply
        }
        logoutopen = {
            logoutopen
        }
        setlogoutopen = {
            setlogoutopen
        }
        userAction = {
            userAction
        }
        setActivation = {
            setActivation
        }
        Activation = {
            Activation
        }
        isDarkMode = {
            isDarkMode
        }
        galleryPunks = {
            galleryPunks
        }
        totalAvailable = {
            totalAvailable
        }
        setMintArray = {
            setMintArray
        }
        setBuyConfirmation = {
            setBuyConfirmation
        }
        isMintProcessing = {
            isMintProcessing
        }
        setisMintProcessing = {
            setisMintProcessing
        }
        setmintNumber = {
            setmintNumber
        }
        mintNumber = {
            mintNumber
        }
        setMongoIds = {
            setMongoIds
        }
        contractNft = {
            contractNft
        }
        setloading = {
            setloading
        }
        loading = {
            loading
        }
        setairdropState = {
            setairdropState
        }
        setPlayopen = {
            setPlayopen
        }
        Playopen = {
            Playopen
        }
        setPlayId = {
            setPlayId
        }
        PlayId = {
            PlayId
        }
        setisTrc20 = {
            setisTrc20
        }
        isTrc20 = {
            isTrc20
        }
        allowance = {
            allowance
        }
        nftTokenprice = {
            nftTokenprice
        }
        nftPriceToken = {
            nftPriceToken
        }
        tronWeb = {
            tronWeb
        }
        balanceOf = {
            balanceOf
        }
        contractToken = {
            contractToken
        }
        setupdateInfo = {
            setupdateInfo
        }
        setrandomSelectionIds = {
            setrandomSelectionIds
        }
        // _NftMint={_NftMint}
        /> <
        /Route>

        <
        Route exact path = "/gallery" >
        <
        Gallery galleryPunks = {
            galleryPunks
        }
        userWalletAddress = {
            userWalletAddress
        }
        galleryServerResponse = {
            galleryServerResponse
        }
        setgalleryServerResponse = {
            setgalleryServerResponse
        }
        setfiltermodalopen = {
            setfiltermodalopen
        }
        sortBy = {
            sortBy
        }
        setsortBy = {
            setsortBy
        }
        attributes = {
            attributes
        }
        setattributes = {
            setattributes
        }
        filterByType = {
            filterByType
        }
        setfilterByType = {
            setfilterByType
        }
        setcurrentSellingNftObject = {
            setcurrentSellingNftObject
        }
        fromgallery = {
            fromgallery
        }
        setfromgallery = {
            setfromgallery
        }
        setgalleryState = {
            setgalleryState
        }
        setcurrent3dLink = {
            setcurrent3dLink
        }
        setviewmodalopen = {
            setviewmodalopen
        }
        setupperBound = {
            setupperBound
        }
        upperBound = {
            upperBound
        }
        loadmoreState = {
            loadmoreState
        }
        setloadmoreState = {
            setloadmoreState
        }
        searchState = {
            searchState
        }
        setsearchState = {
            setsearchState
        }
        setfilterLoadmore = {
            setfilterLoadmore
        }
        filterLoadmore = {
            filterLoadmore
        }
        setdata = {
            setdata
        }
        data = {
            data
        }
        setloadmoreObject = {
            setloadmoreObject
        }
        loadmoreObject = {
            loadmoreObject
        }
        setfield = {
            setfield
        }
        field = {
            field
        }
        initMinted = {
            initMinted
        }
        /> <
        /Route>

        {
            /* <Route exact path="/comingsoon">
                        <Comingsoon />
                      </Route> */
        }

        { /* TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW    TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW  */ }

        {
            (userWalletAddress === "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW") |
            (userWalletAddress === "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW") |
            (userWalletAddress === "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW") ? ( <
                Route exact path = "/admin" >
                <
                Admin setMintArray = {
                    setMintArray
                }
                setBuyConfirmation = {
                    setBuyConfirmation
                }
                isMintProcessing = {
                    isMintProcessing
                }
                setisMintProcessing = {
                    setisMintProcessing
                }
                setmintNumber = {
                    setmintNumber
                }
                setMongoIds = {
                    setMongoIds
                }
                userWalletAddress = {
                    userWalletAddress
                }
                contractNft = {
                    contractNft
                }
                airdropWalletAddress = {
                    airdropWalletAddress
                }
                setairdropWalletAddress = {
                    setairdropWalletAddress
                }
                setairdropState = {
                    setairdropState
                }
                setloading = {
                    setloading
                }
                cashbackData = {
                    cashbackData
                }
                setupdateIds = {
                    setupdateIds
                }
                intTwo = {
                    intTwo
                }
                /> <
                /Route>
            ) : null
        }

        <
        Route exact path = "/stake" >
        <
        Stake userWalletAddress = {
            userWalletAddress
        }
        setlogoutopen = {
            setlogoutopen
        }
        userAction = {
            userAction
        }
        setActivation = {
            setActivation
        }
        isDarkMode = {
            isDarkMode
        }
        setselectionmodalopen = {
            setselectionmodalopen
        }
        myPunks = {
            myPunks
        }
        balanceOf = {
            balanceOf
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
        contractNft = {
            contractNft
        }
        selectionmodalopen = {
            selectionmodalopen
        }
        setloading = {
            setloading
        }
        loading = {
            loading
        }
        stakedNft = {
            _stakedNft
        }
        _homeCounterinfo = {
            homeCounterinfo
        }
        contractBalance = {
            contractBalance
        }
        rewardNftClaim = {
            rewardNftClaim
        }
        ///////
        totalNftStaked = {
            totalNftStaked
        }
        rewardTBLclaim = {
            rewardTBLclaim
        }
        withdrawl = {
            withdrawl
        }
        Tblreward = {
            Tblreward
        }
        tblProfit = {
            tblProfit
        }
        currentProfit = {
            currentProfit
        }
        staketbl = {
            staketbl
        }
        nftStaked = {
            nftStaked
        }
        Trc721Reward = {
            Trc721Reward
        }
        erc20Reward = {
            erc20Reward
        }
        _percentDivider = {
            _percentDivider
        }
        claimTimeNft = {
            claimTimeNft
        }
        claimTimeTbl = {
            claimTimeTbl
        }
        unstakeTimeTbl = {
            unstakeTimeTbl
        }
        unstakeTimeNft = {
            unstakeTimeNft
        }
        _getStaked = {
            _getStaked
        }

        /> <
        /Route>

        <
        Route exact path = "/bridge" >
        <
        Bridge isDarkMode = {
            isDarkMode
        }
        userWalletAddress = {
            userWalletAddress
        }
        setlogoutopen = {
            setlogoutopen
        }
        setActivation = {
            setActivation
        }
        userAction = {
            userAction
        }
        /> <
        /Route>

        <
        Route exact path = "/bridgeAccount" >
        <
        BridgeAccount isDarkMode = {
            isDarkMode
        }
        userWalletAddress = {
            userWalletAddress
        }
        setlogoutopen = {
            setlogoutopen
        }
        setActivation = {
            setActivation
        }
        userAction = {
            userAction
        }
        setdetailsmodalopen = {
            setdetailsmodalopen
        }
        myPunks = {
            myDoges
        }
        setethDetailedNft = {
            setethDetailedNft
        }
        tronWeb = {
            tronWeb
        }
        /> <
        /Route>

        <
        Route exact path = "/exchange" >
        <
        Exchange isDarkMode = {
            isDarkMode
        }
        userWalletAddress = {
            userWalletAddress
        }
        setlogoutopen = {
            setlogoutopen
        }
        setActivation = {
            setActivation
        }
        userAction = {
            userAction
        }
        setaccountBalance = {
            setaccountBalance
        }
        accountBalance = {
            accountBalance
        }
        balanceOf = {
            balanceOf
        }
        contractExchange = {
            contractExchange
        }
        contractToken = {
            contractToken
        }
        loading = {
            loading
        }
        setloading = {
            setloading
        }
        tronWeb = {
            tronWeb
        }
        allowanceExchange = {
            allowanceExchange
        }
        homeCounterinfo = {
            homeCounterinfo
        }
        setupdateInfo = {
            setupdateInfo
        }
        updateInfo = {
            updateInfo
        }
        ExchangeBuyPrice = {
            ExchangeBuyPrice
        }
        ExchangeSellPrice = {
            ExchangeSellPrice
        }
        btoken = {
            btoken
        }
        init4 = {
            init4
        }
        /> <
        /Route>

        <
        LogoutModal logoutopen = {
            logoutopen
        }
        setlogoutopen = {
            setlogoutopen
        }
        /> <
        /BrowserRouter>

        <
        ToastContainer position = "top-right"
        autoClose = {
            5000
        }
        hideProgressBar = {
            false
        }
        newestOnTop = {
            false
        }
        closeOnClick rtl = {
            false
        }
        pauseOnFocusLoss draggable pauseOnHover /
        >

        <
        Filtermodal filtermodalopen = {
            filtermodalopen
        }
        setfiltermodalopen = {
            setfiltermodalopen
        }
        sortBy = {
            sortBy
        }
        setsortBy = {
            setsortBy
        }
        attributes = {
            attributes
        }
        setattributes = {
            setattributes
        }
        filterByType = {
            filterByType
        }
        setfilterByType = {
            setfilterByType
        }
        isDarkMode = {
            isDarkMode
        }
        MintedNftsArray = {
            MintedNftsArray
        }
        filterLoadmore = {
            filterLoadmore
        }
        setfilterLoadmore = {
            setfilterLoadmore
        }
        setloadmoreObject = {
            setloadmoreObject
        }
        loadmoreObject = {
            loadmoreObject
        }
        />

        <
        FilterModal2 filtermodalopen2 = {
            filtermodalopen2
        }
        setfiltermodalopen2 = {
            setfiltermodalopen2
        }
        sortBy = {
            sortBy
        }
        setsortBy = {
            setsortBy
        }
        filterByType = {
            filterByType
        }
        setfilterByType = {
            setfilterByType
        }
        isDarkMode = {
            isDarkMode
        }
        MintedNftsArray = {
            MintedNftsArray
        }
        myPunks = {
            myPunks
        }
        setloadmoreObject = {
            setloadmoreObject
        }
        loadmoreObject = {
            loadmoreObject
        }
        />

        <
        Loading loading = {
            loading
        }
        />

        <
        ScrollToTop style = {
            {
                background: "#D40000"
            }
        }
        smooth / >

        <
        BasicModalView current3dLink = {
            current3dLink
        }
        viewmodalopen = {
            viewmodalopen
        }
        setviewmodalopen = {
            setviewmodalopen
        }
        isDarkMode = {
            isDarkMode
        }
        visibility = {
            visibility
        }
        setvisibility = {
            setvisibility
        }
        isVisible = {
            isVisible
        }
        setisVisible = {
            setisVisible
        }
        />

        <
        PlayModal isDarkMode = {
            isDarkMode
        }
        setPlayopen = {
            setPlayopen
        }
        Playopen = {
            Playopen
        }
        setPlayId = {
            setPlayId
        }
        PlayId = {
            PlayId
        }
        />

        <
        InputModal openinput = {
            openinput
        }
        setopeninput = {
            setopeninput
        }
        userWalletAddress = {
            userWalletAddress
        }
        setconfirmTransfer = {
            setconfirmTransfer
        }
        setnewowner = {
            setnewowner
        }
        setloading = {
            setloading
        }
        />

        {
            /* <SelectionModal
                    userWalletAddress={userWalletAddress}
                    contractNft={contractNft}
                      isDarkMode={isDarkMode}
                      selectionmodalopen={selectionmodalopen}
                      setselectionmodalopen={setselectionmodalopen}
                      myPunks={myPunks}
                      setloading={setloading}
                      loading={loading}
                      tronWeb={tronWeb}
                      _allignment={_allignment}
                      _MyPunks={_MyPunks} 
                    /> */
        }

        <
        BridgeDetialsModal detailsmodalopen = {
            detailsmodalopen
        }
        setdetailsmodalopen = {
            setdetailsmodalopen
        }
        isDarkMode = {
            isDarkMode
        }
        setethDetailedNft = {
            setethDetailedNft
        }
        ethDetailedNft = {
            ethDetailedNft
        }
        /> <
        /ThemeProvider> <
        /div>
    );
}

export default App;