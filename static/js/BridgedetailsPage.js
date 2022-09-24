import * as React from "react";
import {
    Modal,
    Typography,
    Box,
    makeStyles,
    Grid,
    useMediaQuery,
    Button,
} from "@material-ui/core";

const style = {
    width: "90%",
    margin: "auto",
    marginTop: "10px",
    boxShadow: 24,
    borderRadius: "10px",
    overflow: "hidden",
};
const useStyle = makeStyles((theme) => ({
    bw: {
        color: theme.palette.secondary.bw,
    },
    gw: {
        color: theme.palette.secondary.gw,
    },
}));
export default function BasicModal({
    detailsmodalopen,
    setdetailsmodalopen,
    isDarkMode,
    ethDetailedNft,
    setethDetailedNft,
}) {
    const classes = useStyle();
    const matchesmobile = useMediaQuery("(max-width:770px)");
    const matchesmobile2 = useMediaQuery("(max-width:450px)");

    const handleOpen = () => setdetailsmodalopen(true);
    const handleClose = () => {
        setdetailsmodalopen(false);
    };
    // console.log(ethDetailedNft, "ethDetailedNft");
    const matches = useMediaQuery("(max-width:430px)");

    return ( <
        div >
        <
        Modal open = {
            detailsmodalopen
        }
        onClose = {
            handleClose
        }
        aria - labelledby = "modal-modal-title"
        aria - describedby = "modal-modal-description" >
        <
        Box sx = {
            style
        }
        className = "scrollclass"
        style = {
            {
                background: isDarkMode ? "#2A2A2E" : " rgb(247,247,249)",
                padding: matches ? "10px 10px" : "20px 30px",
                overflow: "scroll",
                height: "90vh",
            }
        } >
        <
        i onClick = {
            handleClose
        }
        className = {
            classes.bw + " " + "fas fa-times-circle"
        }
        style = {
            {
                fontSize: "24px",
                float: "right",
                "&:hover": {
                    color: "red",
                    backgroundColor: "silver",
                    borderRadius: "50%",
                },
            }
        } >
        < /i> <
        Typography style = {
            {
                color: isDarkMode ? "white" : "black"
            }
        } >
        NFT Details <
        /Typography>

        <
        Grid style = {
            {
                marginTop: "20px"
            }
        }
        container justifyContent = "space-between" >
        <
        Grid item xs = {
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
        img style = {
            {
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                borderRadius: "10px",
            }
        }
        src = {
            ethDetailedNft.nftimage ? ethDetailedNft.nftimage : "#"
        }
        /> <
        /Grid> <
        Grid item xs = {
            12
        }
        md = {
            8
        }
        style = {
            {
                overflowX: "hidden"
            }
        } >
        <
        Typography className = {
            classes.bw
        }
        variant = "h5"
        component = "div" > #ID: {
            ethDetailedNft.nftid ? ethDetailedNft.nftid : "#"
        } <
        br / > { /* MintID ({obj.mintId}) */ } <
        /Typography> <
        Typography className = {
            classes.bw
        } >
        Type: {
            ethDetailedNft.nftattributes ?
            ethDetailedNft.nftattributes[0].Type :
                "#"
        } <
        /Typography> <
        Typography className = {
            classes.bw
        } >
        Rank: {
            ethDetailedNft.nftRank ? ethDetailedNft.nftRank : "#"
        } <
        /Typography> <
        Typography className = {
            classes.bw
        } >
        Game Score: {
            ethDetailedNft.nftscore ? ethDetailedNft.nftscore : "0"
        } <
        /Typography> <
        Typography className = {
            classes.bw
        } >
        MintID: {
            ethDetailedNft.mintId ? ethDetailedNft.mintId : "#"
        } <
        /Typography> <
        Typography className = {
            classes.bw
        } >
        IPFS Metadata: { /* matchesmobile2 */ } {
            matchesmobile && !matchesmobile2 ? (
                ethDetailedNft.jsonLink ? ( <
                    a style = {
                        {
                            textDecoration: "none"
                        }
                    }
                    target = "_blank"
                    href = {
                        ethDetailedNft.jsonLink
                    } >
                    {
                        ethDetailedNft.jsonLink.slice(0, 20) +
                        "...." +
                        ethDetailedNft.jsonLink.slice(-14)
                    } <
                    /a>
                ) : (
                    "Not Available"
                )
            ) : null
        } {
            matchesmobile2 ? (
                ethDetailedNft.jsonLink ? ( <
                    a style = {
                        {
                            textDecoration: "none"
                        }
                    }
                    target = "_blank"
                    href = {
                        ethDetailedNft.jsonLink
                    } >
                    {
                        ethDetailedNft.jsonLink.slice(0, 8) +
                        "...." +
                        ethDetailedNft.jsonLink.slice(-12)
                    } <
                    /a>
                ) : (
                    "Not Available"
                )
            ) : null
        } {
            !matchesmobile ? (
                ethDetailedNft.jsonLink ? ( <
                    a style = {
                        {
                            textDecoration: "none"
                        }
                    }
                    href = {
                        ethDetailedNft.jsonLink
                    }
                    target = "_blank" >
                    {
                        ethDetailedNft.jsonLink
                    } <
                    /a>
                ) : (
                    "Not Available"
                )
            ) : null
        } <
        /Typography> <
        Typography className = {
            classes.bw
        } >
        IPFS Image link: {
            " "
        } {
            matchesmobile && !matchesmobile2 ? (
                ethDetailedNft.ipfsImage ? ( <
                    a style = {
                        {
                            textDecoration: "none"
                        }
                    }
                    target = "_blank"
                    href = {
                        ethDetailedNft.ipfsImage
                    } >
                    {
                        ethDetailedNft.ipfsImage.slice(0, 20) +
                        "...." +
                        ethDetailedNft.ipfsImage.slice(-14)
                    } <
                    /a>
                ) : (
                    "Not Available"
                )
            ) : null
        } {
            matchesmobile2 ? (
                ethDetailedNft.ipfsImage ? ( <
                    a style = {
                        {
                            textDecoration: "none"
                        }
                    }
                    targer = "_blank"
                    href = {
                        ethDetailedNft.ipfsImage
                    } >
                    {
                        ethDetailedNft.ipfsImage.slice(0, 8) +
                        "...." +
                        ethDetailedNft.ipfsImage.slice(-12)
                    } <
                    /a>
                ) : (
                    "Not Available"
                )
            ) : null
        } {
            !matchesmobile ? (
                ethDetailedNft.ipfsImage ? ( <
                    a style = {
                        {
                            textDecoration: "none"
                        }
                    }
                    href = {
                        ethDetailedNft.ipfsImage
                    }
                    targer = "_blank" >
                    {
                        ethDetailedNft.ipfsImage
                    } <
                    /a>
                ) : (
                    "Not Available"
                )
            ) : null
        } <
        /Typography>

        {
            /* <Typography style={{ marginTop: "20px" }} className={classes.bw}>
                            Owner:{" "}
                            {matchesmobile2 ? (
                              <font style={{ color: "red", fontWeight: "bold" }}>
                                {ethDetailedNft.nftOwner.slice(0, 8) +
                                  "..." +
                                  ethDetailedNft.nftOwner.slice(-8)}
                              </font>
                            ) : null}
                            {!matchesmobile2 ? (
                              <font style={{ color: "red", fontWeight: "bold" }}>
                                {ethDetailedNft.nftOwner}
                              </font>
                            ) : null}
                          </Typography> */
        }

        <
        Typography style = {
            {
                marginTop: "20px"
            }
        }
        className = {
            classes.bw
        } >
        Description: {
            ethDetailedNft.nftid ?
            ethDetailedNft.nftattributes.map((object, index) => {
                return ( <
                    >
                    <
                    div key = {
                        index
                    } >
                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Skin: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Skin
                    } <
                    /Button> <
                    /Typography> <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Head: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Head
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Hair: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Hair
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Hat: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Hat
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Eyes: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Eyes
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Eyebrows: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Eyebrows
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    FacialHair: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Facialhair == undefined ?
                        object.FacialHair :
                            object.Facialhair
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Glasses: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Glasses
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Chest: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Chest
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Arms: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Arms
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Legs: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Legs
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Shoes: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Shoes
                    } <
                    /Button> <
                    /Typography>

                    <
                    Typography style = {
                        {
                            marginTop: "10px"
                        }
                    } >
                    Waist: {
                        " "
                    } <
                    Button style = {
                        {
                            padding: "1px 8px",
                            background: "#F12236",
                            borderRadius: "50px",
                        }
                    } >
                    {
                        object.Waist
                    } <
                    /Button> <
                    /Typography> <
                    /div> <
                    />
                );
            }) :
                null
        } <
        /Typography> <
        /Grid> <
        /Grid> <
        /Box> <
        /Modal> <
        /div>
    );
}