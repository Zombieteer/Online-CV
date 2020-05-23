import React, { Fragment } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import shobhit from "../../../src/public/logo.jpeg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    border: "2px solid orange",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  logo: {
    height: "50%",
    width: "35%",
    borderRadius: "50%",
  },
  head: {
    textAlign: "center",
    marginLeft: 50,
    paddingTop: "5%",
  },
}));

export const ModalTempelate = ({ open, handleClose, handleopen, type }) => {
  const classes = useStyles();

  return (
    <Fragment>
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
                <CancelIcon style={{ float: "right", fontSize: 35 }} />
              </div>
              <div style={{ display: "flex", width: "85vh" }}>
                <img
                  id="transition-modal-description"
                  className={classes.logo}
                  src={shobhit}
                ></img>
                <div className={classes.head}>
                  <h1>Shobhit Nigam</h1>
                  <div style={{ padding: "20px 0px" }}>
                    <Tooltip
                      title="LinkedIn"
                      arrow
                      style={{ padding: "0px 25px" }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shobhit-nigam/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon className="contact_icon" />
                      </a>
                    </Tooltip>
                    <Tooltip
                      title="Github"
                      arrow
                      style={{ padding: "0px 25px" }}
                    >
                      <a
                        href="https://github.com/Zombieteer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon className="contact_icon" />
                      </a>
                    </Tooltip>
                    <Tooltip
                      title="Twitter"
                      arrow
                      style={{ padding: "0px 25px" }}
                    >
                      <a
                        href="https://twitter.com/ShobhitNigam37"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon className="contact_icon" />
                      </a>
                    </Tooltip>
                    <Tooltip
                      title="Instagram"
                      arrow
                      style={{ padding: "0px 25px" }}
                    >
                      <a
                        href="https://www.instagram.com/shobhman/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon className="contact_icon" />
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Modal>
      )}
    </Fragment>
  );
};

export default ModalTempelate;
