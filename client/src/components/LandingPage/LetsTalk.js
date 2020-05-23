import React, { useState, Fragment } from "react";
import axios from "axios";
import mail from "../../public/mail.png";
import MailLoad from "../layouts/MailLoad";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";

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
    width: "20%",
  },
}));

export const LetsTalk = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [active, setActive] = useState([false, false, false]);
  const [mailSendIcon, setMailSendIcon] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggle = (e) => {
    setActive([false, false, false]);
    e.target.name === "name"
      ? setActive([true, false, false])
      : e.target.name === "email"
      ? setActive([false, true, false])
      : e.target.name === "message" && setActive([false, false, true]);
  };
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      setMailSendIcon(true);
      await axios.post("/", form, config);
      setForm({ name: "", email: "", message: "" });
      setMailSendIcon(false);
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div name="talk" className="talk">
        <h1 className="head1 heading">LET'S TALK</h1>
        <div className="outer_contact_div">
          <div className="inner_contact_div">
            <div className="mail_img">
              <img src={mail} alt="mail"></img>
            </div>
            <form className="form" onSubmit={submitHandler}>
              {/* <h1 className="Get-in-touch">Get In Touch</h1> */}
              <div className="input-div">
                <label htmlFor="form-name" className="label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className={active[0] ? "input1 active" : "input1"}
                  value={form.name}
                  onChange={onChange}
                  required
                  onClick={toggle}
                />
              </div>
              <div className="input-div">
                <label htmlFor="exampleInputEmail1" className="label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  aria-describedby="emailHelp"
                  value={form.email}
                  className={active[1] ? "input1 active" : "input1"}
                  onChange={onChange}
                  required
                  onClick={toggle}
                />
              </div>
              <div className="input-div" style={{ marginBottom: 30 }}>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  className={active[2] ? "input1 active" : "input1"}
                  required
                  placeholder="Start Typing..."
                  onClick={toggle}
                ></textarea>
              </div>
              <button type="submit" className="submit1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {mailSendIcon && <MailLoad />}
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
            <div>
              <h2 id="transition-modal-description">
                Message has been sent...
              </h2>
            </div>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default LetsTalk;
