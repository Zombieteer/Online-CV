import React, { Fragment } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import shobhit from "../../../src/public/logo.jpeg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    border: "3px solid orange",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  logo: {
    height: "50%",
    width: "35%",
    borderRadius: "50%",
  },
  head: {
    fontSize: 44,
    marginLeft: "10%",
    paddingTop: "5%",
  },
}));

export const ModalTempelate = ({ open, handleClose, handleopen, type }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {console.log("logo")}
      {type === "logo" && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div onClick={handleClose} style={{ cursor: "pointer" }}>
                <CancelIcon style={{ float: "right" }} />
              </div>
              <div style={{ display: "flex", width: "85vh" }}>
                <img
                  id="transition-modal-description"
                  className={classes.logo}
                  src={shobhit}
                ></img>
                <h1 className={classes.head}>Shobhit Nigam</h1>
              </div>
            </div>
          </Fade>
        </Modal>
      )}
    </Fragment>
  );
};

export default ModalTempelate;
