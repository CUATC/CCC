import * as React from "react";
import {
  Grid,
  Modal,
  Typography,
  Box,
  makeStyles,
  Button,
  Checkbox,
} from "@material-ui/core";
import "./App.css";
import { environment } from "./environment";
import { StakingContract } from "./hooks/contract";
import { toast } from "react-toastify";
import axios from "axios";
import { ServerURL } from "./ServerURL";

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
export default function NftStakedModal({
  userWalletAddress,
  contractNft,
  selectionmodalopen,
  setselectionmodalopen,
  isDarkMode,
  myPunks,
  setloading,
  loading,
  tronWeb,
  _allignment,
  _MyPunks,
  _getStaked,
}) {
  const classes = useStyle();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleOpen = () => setselectionmodalopen(true);
  const handleClose = () => setselectionmodalopen(false);

  const { _stakeContract } = StakingContract(tronWeb);

  const [isCheckAll, setIsCheckAll] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState([]);
  const [list, setList] = React.useState([]);
  const [isApproved, setIsApproved] = React.useState(false);
  const [_stake, setTake] = React.useState(false);
  const [reward, setReward] = React.useState(false);

  React.useEffect(() => {
    setList(myPunks);
  }, [myPunks]);
  // checkbox State
  //   const [checkall, setcheckall] = React.useState(false)

  //   const [checkedState, setCheckedState] = React.useState([]);
  // React.useEffect(() => {
  //   setCheckedState( new Array(myPunks.length).fill(false))
  // }, [myPunks])

  // const handleOnChange = (position) => {
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //     index === position ? !item : item
  //   )
  //   setCheckedState(updatedCheckedState)
  // }

  //   console.log(checkedState,"checkedState===>")

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.nftid));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, +id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => +item !== +id));
    }
  };

  React.useEffect(() => {
    (async () => {
      if (userWalletAddress && contractNft) {
        const approvedForAll = await contractNft
          .isApprovedForAll(userWalletAddress, environment.stakeContract)
          .call();

        setIsApproved(approvedForAll);
      }
    })();
  }, [userWalletAddress, contractNft]);
  const StakeNftHandler = async () => {
    try {
      if (!isCheck.length > 0) {
        toast.error("Please select NFTs");
        return;
      }
      if (isCheck.length <=! 5) {
        toast.error("you can select only  5 NFTs");
        return;
      }
      setTake(true);
      if (contractNft && _stakeContract && userWalletAddress) {
        if (!isApproved) {
          let res = await contractNft
            .setApprovalForAll(environment.stakeContract, true)
            .send({
              from: userWalletAddress,
              callValue: 0,
              feeLimit: 1000000000,
            });
        
          const transaction = setInterval(() => {
            tronWeb.trx
              .getUnconfirmedTransactionInfo(res.toString())
              .then(async (value) => {
               
                if (value.receipt.result == "SUCCESS") {
               
                  // toast.success("Approved Successfully");
                  clearInterval(transaction);
                  StakeNfts(_stakeContract,userWalletAddress);

                  clearInterval(transaction);
                } else if (value.result === "FAILED") {
                  toast.success("Failed.....");
                  clearInterval(transaction);
                }
                else if(value.receipt.result === "REVERT"){ 
                  toast.success("REVERT Failed.....");
                  clearInterval(transaction);
                }else {
                  toast.error("Failed to Approve");
                  clearInterval(transaction);
                }
              })
              .catch((value) => {
                console.log("error", value);
              });
          }, 2500);
        
        } else {
          StakeNfts(_stakeContract,userWalletAddress);
        }
      }

      setTake(false);
    } catch (e) {
      setTake(false);
    }
  };

  const StakeNfts = async (stakecontract,userWalletAddress) => {
    if (!isCheck.length > 0) {
      toast.error("Please select NFTs");
      return;
    }
    if (isCheck.length > 5) {
      toast.error("you can select max 5 NFTs");
      return;
    }
    try {
    
      setTake(true);
      let tx = await stakecontract.deposit(0, 0, isCheck).send({
        from: userWalletAddress,
        callValue: 0,
        feeLimit: 1000000000,
      });
 
      const transaction = setInterval(() => {
        tronWeb.trx
          .getUnconfirmedTransactionInfo(tx.toString())
          .then(async (value) => {
            if (value) {
              console.log(value,"--->value---->")
              if (value.receipt?.result == "SUCCESS") {
                toast.success("Stake Successfully");
                await _allignment();
                await _MyPunks();
                await _getStaked();
                const bres = await axios.post(`${ServerURL}/stakeIds`, {isCheck,userWalletAddress});
                setIsCheck([]);
                clearInterval(transaction);
              } else if (value.result === "FAILED") {
                toast.success("Failed.....");
                clearInterval(transaction);
              } else if(value.receipt.result === "REVERT"){ 
                toast.success("REVERT Failed.....");
                clearInterval(transaction);
              } else {
                // toast.error("Failed to Approve");
        
                clearInterval(transaction);
              }
            }
          })
          .catch((value) => {
            console.log("error", value);
          });
      }, 2000);
    
// if(_result==="SUCCESS"){
//   toast.success("Stake Successfully");
// }

      // await _allignment();
      // await _MyPunks();
      // await _getStaked();
      // toast.success("Stake Successfully");

     

      setTake(false);
    } catch (e) {
      console.log(e, "e===>");
      // toast.error("Failed to Stake");
    }
  };
  const checkchangedHandler = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      setReward(true);
    } else {
      setReward(false);
    }
  };
  return (
    <div>
      <Modal
        open={selectionmodalopen}
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
                cursor: "pointer",
              },
            }}
          ></i>

          <Typography
            className={classes.bw}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Select NFTs for Staking
          </Typography>

          {/* NFTs Content Starts here */}
          <Box>
            <Box>
              <Grid container>
                <Grid item xs={1}>
                  <Checkboxs
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                    style={{ marginLeft: "-10px", color: "dodgerblue" }}
                    {...label}
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography style={{ marginTop: "10px" }}>All</Typography>
                </Grid>
              </Grid>
            </Box>

            {myPunks.length > 0
              ? myPunks.map((obj, index) => {
                  // console.log(obj,"obj")
                  return (
                    <Grid
                      key={index}
                      container
                      justifyContent="center"
                      alignItems="center"
                      style={{
                        marginTop: "30px",
                        borderTop: "1px solid #2e2e2e",
                        borderBottom: "1px solid #2e2e2e",
                      }}
                    >
                      <Grid item xs={4}>
                        <Checkboxs
                          id={obj.nftid}
                          type="checkbox"
                          name={obj.nftOwner}
                          handleClick={handleClick}
                          isChecked={isCheck.includes(obj.nftid)}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Typography>ID:{obj.mintId}</Typography>
                        <Typography>
                          Type:{obj.nftattributes[0].Type}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ width: "60px", height: "60px" }}
                          src={obj.nftimage}
                        />
                      </Grid>
                    </Grid>
                  );
                })
              : null}
          </Box>
          <Box style={{ textAlign: "center", marginTop: "30px" }}>
            <Button
              onClick={
                () => StakeNftHandler()

                // setselectionmodalopen(false)
              }
              style={{
                padding: "10px 16px",
                background: "#007ACC",
                color: "white",
              }}
              disabled={_stake}
            >
              {_stake ? "Staking....." : "Confirm NFTs"}
            </Button>
          </Box>
          {/* <br />
          <Box textAlign="center">
            REWARD IN TBL{" "}
            <Checkbox
              value={reward}
              onChange={(e) => checkchangedHandler(e)}
              type="checkbox"
            />
          </Box> */}
        </Box>
      </Modal>
    </div>
  );
}
 export const Checkboxs = ({ id, type, name, handleClick, isChecked ,disabled}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isChecked}
      disabled={disabled}
    />
  );
};
