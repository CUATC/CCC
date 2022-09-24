import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import { Link, useParams } from "react-router-dom";
import "./punksinfo.css";
import axios from "axios";
import React from "react";
import { ServerURL } from "../../ServerURL";

const useStyle = makeStyles((theme) => ({
  colortoggle: {
    color: theme.palette.secondary.bw,
  },
  majorColor: {
    background: theme.palette.secondary.wb,
  },
  majorColorcell: {
    background: theme.palette.secondary.wb,
  },
  Colorcell: {
    color: theme.palette.secondary.bw,
  },
  btntoggle: {
    height: "30px",
    padding: "5px 20px",
    color: "white",
    border: `1px solid ${theme.palette.secondary.btnborder}`,
    marginTop: "20px",
    borderRadius: "5px",
    background: theme.palette.secondary.btnbg,
    "&:hover": {
      background: "#007ACC",
    },
  },
}));

export default function Punkinfo({
  setcurrentSellingNftObject,
  currentSellingNftObject,
  jdogeState,
  setjdogeState,
  setgalleryState,
  galleryState,
  setcurrent3dLink,
  setviewmodalopen,
  setvisibility,
  setisVisible,
}) {
  const classes = useStyle();
  const { id } = useParams();

  React.useEffect(async () => {
    await axios.post(ServerURL + `/dynamicparams`, { id: id }).then((value) => {
      setcurrentSellingNftObject(value.data[0]);
    });
  }, [id]);



  let addressLink = `https://tronscan.org/#/address/${currentSellingNftObject.nftOwner}`;

  const matches = useMediaQuery("(max-width:450px)");


  return (
    <div
      className="scrollclass"
      style={{
        overflowY: "scroll",
        height: "85vh",
        borderRadius: "10px",
        marginTop: "95px",
      }}
    >
      {currentSellingNftObject._id && (
        <Box
          id="mobcontainer"
          margin="auto"
          className={classes.majorColor + " " + "scrollclass"}
          width={{ xs: "75%", md: "90%" }}
          style={{
            overflowY: "scroll",
            height: "80vh",
            borderRadius: "10px",
            padding: "40px",
            width: "auto",
            height: "auto",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={4} md={4}>
              <Box style={{ fontSize: matches ? "20px" : "30px" }}>
                <Link
                  style={{ width: "100%", textDecoration: "none" }}
                  onClick={() => {
                    setjdogeState(false);
                    setgalleryState(false);
                  }}
                  to={
                    jdogeState
                      ? "/TBlocks"
                      : galleryState
                      ? "/gallery"
                      : "/gallery"
                  }
                >
                  <i
                    style={{
                      fontSize: matches ? "16px" : "24px",
                      textDecoration: "none",
                    }}
                    className="fas fa-less-than"
                  ></i>{" "}
                  TBlocks Info
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Box width="100%" textAlign="right"></Box>
            </Grid>
          </Grid>

          <Grid container style={{ marginTop: "15px" }}>
            <Grid item xs={12} sm={6} md={4}>
              <img
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  borderRadius: "10px",
                }}
                src={currentSellingNftObject.nftimage}
              />
              <Box style={{ width: "100%", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    setcurrent3dLink(currentSellingNftObject.view3D);
                    setvisibility("block");
                    setisVisible("visible");
                    setviewmodalopen(true);
                  }}
                  style={{
                    padding: "8px 6px 8px 6px",
                    background: "#F12236",
                    color: "white",
                  }}
                >
                  OPEN 3D VIEW
                </Button>
              </Box>
            </Grid>
            <Grid
              className={classes.colortoggle}
              item
              xs={12}
              sm={6}
              md={3}
              style={{ marginLeft: "10px" }}
            >
              <Box
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                #ID {currentSellingNftObject.nftid}
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
                Type:{currentSellingNftObject.nftattributes[0].Type}
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
                Rank:{currentSellingNftObject.nftRank}
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
                Game score: 0
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
                Mint Price: 1k TRX
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
                Mint Status:{" "}
                <span
                  style={{
                    color:
                      currentSellingNftObject.nftOwner != "false"
                        ? "green"
                        : "#D3013B",
                  }}
                >
                  {currentSellingNftObject.nftOwner != "false"
                    ? "True"
                    : "False"}
                </span>
              </Box>

              <Box style={{ overflow: "hidden", marginTop: "20px" }}>
                <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Owner
                </Box>
                <span
                  style={{
                    color: "red",
                    fontSize: "18px",
                    fontWeight: "bold",
                    overflow: "hidden",
                  }}
                >
                  {/* {currentSellingNftObject.nftOwner} */}

                  <a
                    style={{
                      textDecoration: "none",
                      color: "#F12236",
                      cursor: "pointer",
                    }}
                    target="_blank"
                    href={addressLink}
                  >
                    {currentSellingNftObject.nftOwner != "false"
                      ? currentSellingNftObject.nftOwner?.slice(0, 6) +
                        "..." +
                        currentSellingNftObject.nftOwner?.slice(-4)
                      : "False"}
                  </a>
                </span>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} style={{ marginLeft: "-10px" }}>
              <Box className={classes.colortoggle} mt={4}>
                <Typography style={{ fontWeight: "bold" }}>
                  Attributes
                </Typography>

                {currentSellingNftObject.nftattributes.map(
                  (object, index, array) => {
                    return (
                      <div key={index}>
                        <Typography style={{ marginTop: "10px" }}>
                          Skin:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Skin}
                          </Button>
                        </Typography>
                        <Typography style={{ marginTop: "10px" }}>
                          Head:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Head}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Hair:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Hair}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Hat:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Hat}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Eyes:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Eyes}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Eyebrows:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Eyebrows}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          FacialHair:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Facialhair == undefined
                              ? object.FacialHair
                              : object.Facialhair}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Glasses:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Glasses}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Chest:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Chest}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Arms:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Arms}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Legs:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Legs}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Shoes:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Shoes}
                          </Button>
                        </Typography>

                        <Typography style={{ marginTop: "10px" }}>
                          Waist:{" "}
                          <Button
                            style={{
                              padding: "1px 8px",
                              background: "#F12236",
                              borderRadius: "50px",
                            }}
                          >
                            {object.Waist}
                          </Button>
                        </Typography>
                      </div>
                    );
                  }
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
