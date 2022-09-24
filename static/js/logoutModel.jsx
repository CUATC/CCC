import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';

// Slide


import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';
// import { useWeb3React } from "@web3-react/core";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ logoutopen, setlogoutopen }) {
    const ref = React.createRef();


    // const { deactivate } = useWeb3React();
    // const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setlogoutopen(true);
    };

    const handleClose = () => {
        setlogoutopen(false);
        // deactivate()
    };

    const handleLogout = () => {
        handleClose()
        setlogoutopen(false);
        window.location.reload();
    }




    return (
        <div>

            <Dialog
ref={ref}
                open={logoutopen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{ background: "#1A3E7C", color: "white" }}>{" Please Confirm Your Action"}</DialogTitle>
                <DialogContent style={{ background: "#000000" }}>
                    <DialogContentText style={{ color: "white" }} id="alert-dialog-slide-description">
                        Are you sure you want to Logout ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ background: "#000000", color: "white" }}>
                    <Button style={{ color: "white" }} onClick={handleClose}>Cancel</Button>
                    <Button style={{ color: "white" }} onClick={handleLogout}>Logout</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

