import {
    Container,
    Box,
    Grid,
    Typography,
    makeStyles,
    useMediaQuery,
} from "@material-ui/core";
import HomeCounter from "../homeCounter/homeCounter";
import {
    Carousel
} from "3d-react-carousal";

// Gamefi Import

import Gamefi from "../gamefi/Gamefi";

import img1 from "./Assets/img1.png";
import img2 from "./Assets/img2.png";
import img3 from "./Assets/img3.png";
import img4 from "./Assets/img4.png";
import img5 from "./Assets/img5.png";
import img6 from "./Assets/img6.png";

import "./slider.css";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const useStyle = makeStyles((theme) => ({
    mainContainer: {
        borderWidth: "8px",
        borderStyle: "outset",

        borderColor: theme.palette.secondary.border,
        padding: "30px 30px",
    },
    heading: {
        fontSize: "5vw",
        textTransform: "uppercase",
        textAlign: "center",
        color: "#296588",
    },
    text1: {
        fontSize: "2vw",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#212529",
        textAlign: "center",
        marginTop: "30px",
    },
    zero: {
        paddingL: "0",
        margin: "0",
        "& ListItemIcon": {
            position: "relative",
        },
    },
    twoVW: {
        fontSize: "2vw",
        marginBottom: "10px",
    },
    twoVWblue: {
        fontSize: "2vw",
        marginBottom: "10px",
        color: "#296588",
    },
    icon: {
        position: "absolute",
        top: "0",
        fontSize: "50px",
    },
    slider: {
        backgroundColor: "rgba(0,0,0,.4)",
    },
    sliderdark: {
        background: "#2A2A2E",
        // theme.palette.primary.dark
    },
    green: {
        color: theme.palette.secondary.whitegreen,
    },
    pink: {
        color: theme.palette.secondary.whitepink,
    },
    bw: {
        color: theme.palette.secondary.bw,
    },
    gw: {
        color: theme.palette.secondary.gw,
    },
    fntfamiy: {
        fontFamily: "monospace",
    },
}));

const Slider = ({
    userWalletAddress,
    nftPrice,
    totalSupply,
    setlogoutopen,
    userAction,
    setActivation,
    isDarkMode,
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
    setPlayopen,
    Playopen,
    setPlayId,
    PlayId,
    setisTrc20,
    isTrc20,
    allowance,
    nftTokenprice,
    tronWeb,
    balanceOf,
    contractToken,
    setupdateInfo,
    setrandomSelectionIds,
    setairdropState,
    nftPriceToken,
    loading,
    // _NftMint,
}) => {
    const classes = useStyle();
    let slides = [ <
        img src = "https://tblocksw.com/png/10k/51.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/1.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/2.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/3.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/4.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/5.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/6.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/7.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/8.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/9.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/10.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/11.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/12.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/13.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/14.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/15.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/16.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/17.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/18.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/19.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/20.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/21.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/22.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/23.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/24.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/25.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/26.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/27.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/28.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/29.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/30.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/31.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/32.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/33.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/34.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/35.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/36.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/37.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/38.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/39.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/40.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/41.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/42.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/43.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/44.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/45.png"
        alt = "1" / > , <
        img src = "https://tblocksw.com/png/10k/46.png"
        alt = "2" / > , <
        img src = "https://tblocksw.com/png/10k/47.png"
        alt = "3" / > , <
        img src = "https://tblocksw.com/png/10k/48.png"
        alt = "4" / > , <
        img src = "https://tblocksw.com/png/10k/49.png"
        alt = "5" / > , <
        img src = "https://tblocksw.com/png/10k/50.png"
        alt = "5" / > ,
    ];

    const fntmatch = useMediaQuery("(max-width:600px)");

    return ( <
        div style = {
            {
                marginTop: "100px"
            }
        } >
        <
        Box >
        <
        Container style = {
            {
                overflow: "hidden"
            }
        } >
        <
        Container style = {
            {
                paddingBottom: "250px",
                paddingTop: "140px",
                backgroundImage: `URL("./Images/space.png")`,
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }
        } >
        < /Container>

        <
        Container className = {
            isDarkMode === true ? classes.sliderdark : classes.slider
        }
        style = {
            {
                padding: "30px 0px",
                width: "80%",
                border: "3px solid #f1f1f1",
                color: "white",
                textAlign: "center",
                marginTop: "-350px",
                marginBottom: "60px",
                background: "rgba(0,0,0,.6)",
            }
        } >
        <
        Typography className = {
            classes.fntfamiy
        }
        variant = "h4"
        component = "h1" >
        {
            " "
        }
        TBlocksW 3 D NFT & GameFi on Tron Blockchain {
            " "
        } <
        /Typography> <
        Typography className = {
            classes.fntfamiy
        }
        style = {
            {
                marginTop: "15px"
            }
        }
        paragraph >
        {
            " "
        }
        Minting is now live.10, 000 distinctive 3 D Characters with many Attributes {
            " "
        } <
        /Typography> <
        /Container> <
        /Container> <
        /Box>

        { /* Component Renders Here */ } <
        HomeCounter nftPrice = {
            nftPrice
        }
        totalSupply = {
            totalSupply
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
        setMongoIds = {
            setMongoIds
        }
        contractNft = {
            contractNft
        }
        setloading = {
            setloading
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
        setairdropState = {
            setairdropState
        }
        nftPriceToken = {
            nftPriceToken
        }
        loading = {
            loading
        }
        // _NftMint={_NftMint}
        />

        { /* Gamefi Component */ }

        <
        Gamefi isDarkMode = {
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
        Grid container xs = {
            11
        }
        item style = {
            {
                margin: "10px auto 0px auto",
                paddingBottom: "20px",
                maxWidth: "1250px",
            }
        } >
        <
        Box className = {
            classes.gw
        }
        style = {
            {
                fontSize: "30px",
                textAlign: "center",
                width: "100%",
                fontWeight: "bolder",
            }
        }
        variant = "h5"
        fontSize = {
            {
                xs: "16px",
                md: "30px"
            }
        } >
        WELCOME TO TBlocksW <
        /Box>

        <
        Grid item xs = {
            12
        }
        md = {
            8
        }
        style = {
            {
                paddingTop: "50px",
                paddingBottom: "30px",
                paddingRight: "10px",
            }
        } >
        <
        Box className = {
            classes.bw
        }
        fontSize = {
            {
                xs: "16px",
                md: "24px"
            }
        }
        style = {
            {
                textAlign: "justify"
            }
        } >
        TBlocksW is a 3 D NFT collectible project on TRON blockchain with cool Characters.TRC - 721 TBlocks are meant to be the NFT revolution on TRON and create TRON NFT world!
        There are 10, 000 TBlocks in total.All TBlocks are being minted randomly.They also have many attributes that defines rarity of TBlocks.TBlocks will be listed on marketplace and used in the unique GameFi world.Good luck to all who will mint his rare TBlocks and# HODL to get back passive income. <
        /Box>

        <
        Box mt = {
            3
        } > < /Box> <
        /Grid> <
        Grid item xs = {
            12
        }
        md = {
            4
        }
        style = {
            {
                paddingTop: "40px",
                textAlign: "center"
            }
        } >
        <
        Carousel slides = {
            slides
        }
        autoplay = {
            true
        }
        interval = {
            3000
        }
        /> <
        /Grid> <
        /Grid>

        <
        Grid container >
        <
        Grid item xs = {
            11
        }
        style = {
            {
                margin: "auto"
            }
        } >
        <
        Box className = {
            classes.gw
        }
        style = {
            {
                fontSize: "30px",
                textAlign: "center",
                width: "100%",
                fontWeight: "bolder",
            }
        }
        variant = "h5"
        fontSize = {
            {
                xs: "16px",
                md: "30px"
            }
        } >
        ROADMAP <
        /Box> <
        Box style = {
            {
                fontSize: fntmatch ? "16px" : "24px",
                maxWidth: "1250px"
            }
        }
        className = {
            classes.bw
        }
        width = {
            {
                xs: "100%",
                md: "95%"
            }
        }
        margin = "40px auto 0px auto" >
        Owning a TBlocks is your individualized token that unlocks a new whole world of private and exclusive experience in the GameFi world. <
        br / >
        <
        br / >
        Experiences may include:
        <
        br / >
        1. Unique Cashback reward <
        br / >
        2. Private login with your in -game TBlocks <
        br / >
        3. TBlocks Rank score linked with Game Score <
        br / >
        4. Passive income <
        /Box> <
        /Grid> <
        /Grid>

        <
        Grid container style = {
            {
                marginTop: "80px"
            }
        } >
        <
        Grid item xs = {
            12
        }
        margin = "auto" >
        <
        VerticalTimeline lineColor = {
            "#8B0000"
        } >
        <
        VerticalTimelineElement className = "vertical-timeline-element--work"
        contentStyle = {
            {
                background: !isDarkMode ? "white" : "black",
                color: !isDarkMode ? "black" : "white",
            }
        }
        contentArrowStyle = {
            {
                borderRight: "7px solid  black"
            }
        }
        iconStyle = {
            {
                background: !isDarkMode ? "#4E4E4E" : "black",
                color: !isDarkMode ? "#fff" : "black",
            }
        }
        icon = { <
            center >
            <
            img style = {
                {
                    marginTop: "8px"
                }
            }
            width = "40%"
            src = {
                img1
            }
            /> <
            /center>
        } >
        <
        h3 className = "vertical-timeline-element-title" >
        Q1 - 2022 < br / > TBlocksW# NFT LAUNCH <
        /h3> { /* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */ } <
        p >
        The 3 D NFT & GameFi Platform Built on Tron Blockchain.10, 000 distinctive Avatar with many attributes.Mint
        function and unique share pool reward system. <
        /p> <
        /VerticalTimelineElement> <
        VerticalTimelineElement className = "vertical-timeline-element--work"
        contentStyle = {
            {
                background: !isDarkMode ? "white" : "black",
                color: !isDarkMode ? "black" : "white",
            }
        }
        contentArrowStyle = {
            {
                borderRight: "7px solid  black"
            }
        }
        iconStyle = {
            {
                background: !isDarkMode ? "#4E4E4E" : "black",
                color: !isDarkMode ? "#fff" : "black",
            }
        }
        icon = { <
            center >
            <
            img style = {
                {
                    marginTop: "10px"
                }
            }
            width = "40%"
            src = {
                img2
            }
            /> <
            /center>
        } >
        <
        h3 className = "vertical-timeline-element-title" >
        Q2 - 2022 < br / > AR + GameFi Demo App release {
            " "
        } <
        /h3> { /* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */ } <
        p >
        TBlocks Characters will be included in the best ever experience in AR and GameFi world
        for Android and iOS. <
        /p> <
        /VerticalTimelineElement> <
        VerticalTimelineElement className = "vertical-timeline-element--work"
        contentStyle = {
            {
                background: !isDarkMode ? "white" : "black",
                color: !isDarkMode ? "black" : "white",
            }
        }
        contentArrowStyle = {
            {
                borderRight: "7px solid  black"
            }
        }
        iconStyle = {
            {
                background: !isDarkMode ? "#4E4E4E" : "black",
                color: !isDarkMode ? "#fff" : "black",
            }
        }
        icon = { <
            center >
            <
            img style = {
                {
                    marginTop: "10px"
                }
            }
            width = "40%"
            src = {
                img3
            }
            /> <
            /center>
        } >
        <
        h3 className = "vertical-timeline-element-title" > {
            " "
        }
        Q2 / Q3 - 2022 < br / >
        Strong Partnership {
            " "
        } <
        /h3> { /* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */ } <
        p >
        Marketing Plan & Advertising and Strategic partnership with key stakeholders <
        /p> <
        /VerticalTimelineElement> <
        VerticalTimelineElement className = "vertical-timeline-element--work"
        contentStyle = {
            {
                background: !isDarkMode ? "white" : "black",
                color: !isDarkMode ? "black" : "white",
            }
        }
        contentArrowStyle = {
            {
                borderRight: "7px solid  black"
            }
        }
        iconStyle = {
            {
                background: !isDarkMode ? "#4E4E4E" : "black",
                color: !isDarkMode ? "#fff" : "black",
            }
        }
        icon = { <
            center >
            <
            img style = {
                {
                    marginTop: "10px"
                }
            }
            width = "60%"
            src = {
                img4
            }
            /> <
            /center>
        } >
        <
        h3 className = "vertical-timeline-element-title" > {
            " "
        }
        Q3 - 2022 < br / >
        Staking Platform {
            " "
        } <
        /h3> { /* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */ } <
        p > Unique Staking platform to earn passive income and cool rewards < /p> <
        /VerticalTimelineElement> <
        VerticalTimelineElement className = "vertical-timeline-element--education"
        contentStyle = {
            {
                background: !isDarkMode ? "white" : "black",
                color: !isDarkMode ? "black" : "white",
            }
        }
        contentArrowStyle = {
            {
                borderRight: "7px solid  black"
            }
        }
        iconStyle = {
            {
                background: !isDarkMode ? "#4E4E4E" : "black",
                color: !isDarkMode ? "#fff" : "black",
            }
        }
        icon = { <
            center >
            <
            img style = {
                {
                    marginTop: "13px"
                }
            }
            width = "54%"
            src = {
                img5
            }
            /> <
            /center>
        } >
        <
        h3 className = "vertical-timeline-element-title" >
        Q4 - 2022 <
        br / >
        GameFi world release <
        /h3> { /* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */ } <
        p >
        A coolest GameFi TBlocks World + bonus tournament launch <
        /p> <
        /VerticalTimelineElement> <
        VerticalTimelineElement className = "vertical-timeline-element--education"
        contentStyle = {
            {
                background: !isDarkMode ? "white" : "black",
                color: !isDarkMode ? "black" : "white",
            }
        }
        contentArrowStyle = {
            {
                borderRight: "7px solid  black"
            }
        }
        iconStyle = {
            {
                background: !isDarkMode ? "#4E4E4E" : "black",
                color: !isDarkMode ? "#fff" : "black",
            }
        }
        icon = { <
            center >
            <
            img style = {
                {
                    marginTop: "10px"
                }
            }
            width = "60%"
            src = {
                img6
            }
            /> <
            /center>
        } >
        <
        h3 className = "vertical-timeline-element-title" >
        Q1 - 2023 <
        br / >
        GameFi World completion + ETH Bridge <
        /h3> { /* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */ } <
        p >
        Staking platform & GameFi together to earn passive income, cool rewards.Key words are: stake - play to earn - increase your Rarity.Unique ETH Bridge to claim the Owned Characters on TRON
        for ETH Blockchain too. <
        /p> <
        /VerticalTimelineElement> <
        /VerticalTimeline> <
        /Grid> <
        /Grid>

        <
        Grid container >
        <
        Grid item xs = {
            11
        }
        style = {
            {
                margin: "auto"
            }
        } >
        <
        Box className = {
            classes.gw
        }
        margin = "80px 0px 0px 0px"
        textAlign = "center"
        fontSize = "30px"
        fontWeight = "bold" >
        Minting & way forward <
        /Box> <
        Box style = {
            {
                fontSize: fntmatch ? "16px" : "24px",
                textAlign: "justify",
                maxWidth: "1350px",
            }
        }
        className = {
            classes.bw
        }
        padding = "0px 0px 100px 0px"
        width = {
            {
                xs: "100%",
                md: "85%"
            }
        }
        margin = "auto" >
        <
        br / >
        <
        br / > 5 % Toward strictly
        for TBlocks holders around the world(first MINT only).5 % Toward building the TBlocks GameFi Wolrd rewards.The mission
        for team TBlocks is to produce exclusive tournaments + activations
        for TBlocks holders worldwide.Imagine a world where your TBlocks is your All - Access Pass.Well, you don’ t have to because this is the world’ s first 3 D NFT collection that will grant you access to events.Stay tuned as the team is working to build a community where holders have option to be part of the Game. <
        /Box> <
        /Grid> <
        /Grid>

        <
        Grid item container style = {
            {
                maxWidth: "1450px",
                margin: "0px auto 50px auto"
            }
        } >
        <
        Grid className = "footericons"
        container item justifyContent = "flex-start"
        style = {
            {
                paddingLeft: "40px"
            }
        } >
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
        /Grid>

        { /* <i class="fas fa-sticky-note"></i> */ } <
        /Grid> <
        /Grid> <
        /div>
    );
};

export default Slider;