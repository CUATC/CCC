import * as React from "react";
import { Grid, Modal, Typography, Box, makeStyles } from "@material-ui/core";
import "./App.css";
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
  filtermodalopen,
  setfiltermodalopen,
  sortBy,
  setsortBy,
  attributes,
  setattributes,
  filterByType,
  setfilterByType,
  isDarkMode,
  MintedNftsArray,
  setfilterLoadmore,
  filterLoadmore,
  setloadmoreObject,
  loadmoreObject,
}) {
  const classes = useStyle();
  const handleOpen = () => setfiltermodalopen(true);
  const handleClose = () => setfiltermodalopen(false);

  return (
    <div>
      <Modal
        open={filtermodalopen}
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
              "Minted",
              "Not_Minted",
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
                      setloadmoreObject({
                        defaultLoadmore: false,
                        searchbyid: false,
                        searchbyvalue: true,
                      });
                      if (
                        val !== "Human" &&
                        val !== "Ninja" &&
                        val !== "Punk" &&
                        val !== "Winkster" &&
                        val !== "McDonald" &&
                        val !== "JustinSun" &&
                        val !== "Minted" &&
                        val !== "Not_Minted" &&
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
                      ? `(10000)`
                      : val == "Minted"
                      ? `(${
                          MintedNftsArray
                            ? MintedNftsArray
                            : MintedNftsArray == 0
                            ? 0
                            : "---"
                        })`
                      : val == "Not_Minted"
                      ? `(${
                          MintedNftsArray
                            ? 10000 - MintedNftsArray
                            : MintedNftsArray == 0
                            ? 10000
                            : "---"
                        })`
                      : val == "Human"
                      ? `(9452)`
                      : val == "Ninja"
                      ? `(10)`
                      : val == "Punk"
                      ? `(104)`
                      : val == "McDonald"
                      ? `(10)`
                      : val == "JustinSun"
                      ? `(10)`
                      : val == "Winkster"
                      ? `(10)`
                      : val == "Unknown"
                      ? `(399)`
                      : val == "OompaLoompa"
                      ? `(5)`
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
