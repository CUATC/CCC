import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import * as React from 'react'
import { toast } from 'react-toastify'
import Web3 from 'web3'
import $ from "jquery";
export default function FormDialog({
  openinput,
  setopeninput,
  userWalletAddress,
  setconfirmTransfer,
  setnewowner,
  setloading
}) {
  const [fieldState, setfieldState] = React.useState('')
  const handleClickOpen = () => {
    setopeninput(true)
  }


    
  const handleClose = () => {
    if(userWalletAddress){
     if (userWalletAddress.toLowerCase() != "TTBfe27ucrwPmgQ6vgmY5GhoDTzLqM6MkM".toLowerCase() && userWalletAddress.toLowerCase() != "TEhhTtC6qZTbMPHkh1XBCEU1ZTsJvXe6hW".toLowerCase()) {
      $(document).bind("contextmenu", function (e) {
        return false;
      })
      $(document).on("cut copy paste", function (e) {
        e.preventDefault();
      });

    }
  }
    setopeninput(false)
    setfieldState('')
  }

  const handleFieldChange = (event) => {
    // console.log("data");
    setfieldState(event.target.value)
  }



  return (
    <div>
      <Dialog open={openinput} onClose={handleClose}>
        <DialogTitle style={{ background: "#1A3E7C", color: "white" }}>TRANSFER NFT</DialogTitle>
        <DialogContent style={{ background: "#000000", color: "white" }}>
          <DialogContentText style={{ color: "white" }}>
            For NFT Transfer Please Enter the New Owner Address
          </DialogContentText>

          <input
            placeholder="Enter Wallet Address"
            style={{ width: '90%', height: '40px', outline: "none" }}
            type="text"
            value={fieldState}
             onChange={handleFieldChange}
          />
        </DialogContent>
        <DialogActions style={{ background: "#000000" }}>
          <Button style={{ color: "white" }} onClick={handleClose}>Cancel</Button>

          <Button
            style={{ color: "white" }}
            type="submit"
            onClick={() => {
              setnewowner(fieldState)
              setconfirmTransfer(true)
              handleClose()
              setloading(true)
            }}
          >
            Transfer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
