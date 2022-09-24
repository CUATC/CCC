import * as React from "react";
import {
    Modal,
    Typography,
    Box,
    makeStyles
} from '@material-ui/core';
import Iframe from 'react-iframe'

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
        color: theme.palette.secondary.gw
    }
}))

function BasicModal({
    current3dLink,
    viewmodalopen,
    setviewmodalopen,
    isDarkMode,
    visibility,
    setvisibility,
    setisVisible,
    isVisible
}) {
    const classes = useStyle()
    const handleOpen = () => setviewmodalopen(true);
    const handleClose = () => {
        setisVisible("hidden")
        setviewmodalopen(false)
    }




    return ( <
        div >
        <
        Modal disableScrollLock = {
            true
        }
        open = {
            viewmodalopen
        }
        onClose = {
            handleClose
        }
        aria - labelledby = "modal-modal-title"
        aria - describedby = "modal-modal-description"
        style = {
            {
                overflow: "scroll",
                display: visibility,
                visibility: isVisible
            }
        } >
        <
        Box sx = {
            style
        }
        style = {
            {
                background: isDarkMode ? "#2A2A2E" : "white"
            }
        } >
        <
        Box style = {
            {
                background: isDarkMode ? "#2A2A2E" : "white",
                padding: "8px 10px"
            }
        } >

        <
        Box width = "50%"
        style = {
            {
                float: "left"
            }
        } >
        <
        Typography className = {
            classes.bw
        }
        variant = "h5"
        style = {
            {
                fontWeight: "bold"
            }
        } > 3 D Model < /Typography> <
        /Box> <
        Box width = "50%"
        style = {
            {
                float: "left",
                textAlign: "right"
            }
        } >
        <
        i onClick = {
            () => {
                handleClose()
            }
        }
        className = {
            classes.bw + " " + "fas fa-times-circle"
        }
        style = {
            {
                fontSize: "34px",
                "&:hover": {
                    color: "red",
                    backgroundColor: "silver",
                    borderRadius: "50%",
                }
            }
        } > < /i> <
        /Box>


        <
        /Box>

        <
        Box width = "100%"
        style = {
            {
                marginTop: "10px"
            }
        } >
        <
        Iframe url = {
            current3dLink
        }
        width = "100%"
        height = "550px"
        id = "myId"
        style = {
            {
                marginTop: "auto"
            }
        }
        className = "iframeclass"
        position = "relative"
        loading = {
            "true"
        }
        /> <
        /Box>

        <
        /Box> <
        /Modal> <
        /div>
    );
}

export default React.memo(BasicModal);