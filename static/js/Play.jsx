import * as React from "react";
import { Modal, Box, makeStyles } from "@material-ui/core";
import Iframe from "react-iframe";

const style = {
  width: "100%",
  margin: "auto",
  boxShadow: 24,
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
  isDarkMode,
  Playopen,
  setPlayopen,
  setPlayId,
  PlayId,
}) {
  const classes = useStyle();
  const handleOpen = () => setPlayopen(true);
  const handleClose = () => {
    setPlayopen(false);
  };

  return (
    <div>
      <Modal
        // disableScrollLock={true}
        open={Playopen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          overflow: "scroll",
          background: isDarkMode ? "#2A2A2E" : "white",
        }}
      >
        {/*  https://tlegos.com/Game/?name=${PlayId}   */}
        <Box width="100%">
          <i
            onClick={() => {
              handleClose();
            }}
            className={classes.bw + " " + "far fa-times-circle"}
            style={{
              position: "absolute",
              zIndex: "999",
              fontSize: "60px",
              color: "black",
              "&:hover": {
                backgroundColor: "grey",
                borderRadius: "50%",
              },
            }}
          ></i>
          <Iframe
            url={"https://tblocksw.com/Game"}
            width="100%"
            height="600px"
            id="myId"
            style={{ margin: "auto", border: "0px" }}
            className="iframeclass"
            position="relative"
            loading={"true"}
          />
        </Box>
      </Modal>
    </div>
  );
}
