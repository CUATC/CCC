import React from "react";
// progress: progressValue,
// staked: maxstake,
// totalstaked: maxstake,
const ProgressBar = ({ btoken, bgcolor, height }) => {
  const progressPrice = (+btoken / 50000000) * 100;

  const Parentdiv = {
    height: 40,
    width: "100%",
    backgroundColor: "#c9c7c7",
    borderRadius: 40,
    marginTop: 50,
    position: "relative",
  };

  const Childdiv = {
    height: "100%",
    width: `${progressPrice}%`,
    backgroundColor: bgcolor,
    borderRadius: 30,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
    marginTop: "3rem",
    // position: "absolute",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>
          {" "}
          <span
            style={{
              position: "absolute",
              top: "-1.2rem",
              color: "black",
              // paddingTop: "6rem",
              // right: `${progress}%`,
            }}
          >
            {parseFloat(progressPrice).toFixed(1)}%
            {/* {`${parseInt(progress.staked)}`} */}
          </span>
          <img
            src="rocket.png"
            alt=""
            style={{
              width: "60px",
              position: "absolute",
              top: "-.5rem",
            }}
          />{" "}
          <span
            style={{
              position: "absolute",
              top: "2.5rem",
              right: "-1rem",
              color: "black",
            }}
          >
            50M TBL
          </span>
          <span
            style={{
              position: "absolute",
              top: "0.75rem",
              left: "-0.8rem",
              color: "black",
            }}
          >
            0{" "}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;

// import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";

// const BorderLinearProgress = withStyles((theme) => ({
//   root: {
//     height: 10,
//     borderRadius: 5,
//   },
//   colorPrimary: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.type === "light" ? 1300 : 700],
//   },
//   bar: {
//     borderRadius: 5,
//     backgroundColor: "#FF0000",
//   },
// }))(LinearProgress);

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
// });

// export default function Progressbar({ btoken }) {
//   const classes = useStyles();
//   const progressPrice = (+btoken / 50000000) * 100;
//   return (
//     <div className={classes.root}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <div
//           style={{
//             fontSize: "1rem",
//           }}
//         >
//           0
//         </div>
//         <div
//           style={{
//             fontSize: "1rem",
//           }}
//         >
//           50M TBL
//         </div>
//       </div>
//       <BorderLinearProgress variant="determinate" value={+progressPrice} />
//     </div>
//   );
// }
