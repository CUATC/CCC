import * as React from "react";
import {
  Button,
  Grid,
  Modal,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import "./App.css";
import { useState, useEffect } from "react";
//     position: "absolute",top: "40%",left: "50%",
// isDarkMode ? "#2A2A2E" : "background.paper"
const style = {
  width: "90%",
  margin: "auto",
  marginTop: "5%",
  padding: "2%",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "15px",
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
  filtermodalopen2,
  setfiltermodalopen2,
  sortBy,
  setsortBy,
  isDarkMode,
  MintedNftsArray,
  myPunks,
  setloadmore2,
  loadmore2,
}) {
  const classes = useStyle();
  const handleOpen = () => setfiltermodalopen2(true);
  const handleClose = () => setfiltermodalopen2(false);
  const [filterCount, setfilterCount] = useState({
    Human: 0,
    Punk: 0,
    Ninja: 0,
    Winkster: 0,
    McDonald: 0,
    JustinSun: 0,
    Unknown: 0,
    OompaLoompa: 0,
  });

  const myFileteredAttributes = (data) => {
    let HumanArray = data.filter((obj) => {
      if (obj.nftattributes[0].Type == "Human") {
        return true;
      }
    });

    let PunkArray = data.filter((obj) => {
      if (obj.nftattributes[0].Type == "Punk") {
        return true;
      }
    });

    let NinjaArray = data.filter((obj) => {
      if (obj.nftattributes[0].Type == "Ninja") {
        return true;
      }
    });

    let McDonaldArray = data.filter((obj) => {
      if (obj.nftattributes[0].Type == "McDonald") {
        return true;
      }
    });

    let WinksterArray = data.filter((obj) => {
      if (obj.nftattributes[0].Type == "Winkster") {
        return true;
      }
    });

    let JustinSunArray = data.filter((obj) => {
      if (obj.nftattributes[0].Type == "JustinSun") {
        return true;
      }
    });

    let Unknown = data.filter((obj) => {
      if (obj.nftattributes[0].Type == "Unknown") {
        return true;
      }
    });

    let OoompaLompa = data.filter((obj) => {
      if (obj.nftattributes[0].Type == "OompaLoompa") {
        return true;
      }
    });

    setfilterCount({
      Human: HumanArray.length,
      Punk: PunkArray.length,
      Ninja: NinjaArray.length,
      Winkster: McDonaldArray.length,
      McDonald: WinksterArray.length,
      JustinSun: JustinSunArray.length,
      Unknown: Unknown.length,
      OompaLoompa: OoompaLompa.length,
    });
  };

  useEffect(() => {
    if (myPunks.length > 0) {
      myFileteredAttributes(myPunks);
    }
  }, [myPunks]);

  // Sort By

  // const sortBy = (filterby) => {
  //     alert(filterby, "value")
  // }

  return (
    <div>
      <Modal
        open={filtermodalopen2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "scroll" }}
      >
        <Box
          sx={style}
          style={{ background: isDarkMode ? "#2A2A2E" : "white" }}
        >
          <i
            onClick={handleClose}
            className={classes.bw + " " + "fas fa-times-circle"}
            style={{
              fontSize: "24px",
              float: "right",
              "&:hover": {
                color: "red",
                backgroundColor: "silver",
                borderRadius: "50%",
              },
            }}
          ></i>

          <Typography
            className={classes.bw}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Filter
          </Typography>

          {/* Sort by */}

          <Typography
            className={classes.bw}
            id="modal-modal-description"
            style={{ marginTop: "15px", color: "silver" }}
          >
            Sort by
          </Typography>
          <Grid container justifyContent="left" alignItems="center">
            {[
              "All",
              "Human",
              "Unknown",
              "Punk",
              "JustinSun",
              "Winkster",
              "McDonald",
              "Ninja",
              "OompaLoompa",
              "Lowest ID",
              "Highest ID",
              "Lowest Rank",
              "Highest Rank",
              "Lowest Score",
              "Highest Score",
              "Owned",
            ].map((val,index) => {
              return (
                <Grid
                key={index}
                  style={{ marginTop: "10px" }}
                  className={classes.bw}
                  item
                  xs={12}
                  md={4}
                >
                  <Box
                    className="words"
                    onClick={() => {
                      if (
                        val !== "Human" &&
                        val !== "Ninja" &&
                        val !== "Punk" &&
                        val !== "Winkster" &&
                        val !== "McDonald" &&
                        val !== "JustinSun" &&
                        val !== "Owned" &&
                        val !== "All" &&
                        val !== "Unknown" &&
                        val !== "OompaLoompa"
                      ) {
                        let values = val.split(" ");
                        let DBkey;
                        if (values[1] == "ID") {
                          DBkey = "nftid";
                        } else if (values[1] == "Price") {
                          DBkey = "nftPrice";
                        } else if (values[1] == "Rank") {
                          DBkey = "nftRank";
                        } else if (values[1] == "Score") {
                          DBkey = "nftscore";
                        }
                        setsortBy({
                          category: "sort",
                          criteria: values[0],
                          value: DBkey,
                        });
                      } else {
                        setsortBy({
                          category: "sort",
                          criteria: "normal",
                          value: val,
                        });
                      }

                      handleClose();
                    }}
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    {val}
                    {val == "All"
                      ? `(${myPunks.length})`
                      : val == "Owned"
                      ? `(${MintedNftsArray ? myPunks.length : "---"})`
                      : val == "Human"
                      ? `(${filterCount.Human})`
                      : val == "Ninja"
                      ? `(${filterCount.Ninja})`
                      : val == "Punk"
                      ? `(${filterCount.Punk})`
                      : val == "McDonald"
                      ? `(${filterCount.McDonald})`
                      : val == "JustinSun"
                      ? `(${filterCount.JustinSun})`
                      : val == "Winkster"
                      ? `(${filterCount.JustinSun})`
                      : val == "Unknown"
                      ? `(${filterCount.Unknown})`
                      : val == "OompaLoompa"
                      ? `(${filterCount.OompaLoompa})`
                      : null}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
