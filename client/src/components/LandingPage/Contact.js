import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Tooltip from "@material-ui/core/Tooltip";
import DP from "../../../src/public/ShobhitDP.jpg";

export const Contact = () => {
  const openNavigator = () => {
    window.location.href = `mailto:aryan.nigam1996@gmail.com`;
  };
  const openCall = () => {
    window.open("tel:9532044474");
  };
  // const social = [LinkedInIcon, GitHubIcon, TwitterIcon, InstagramIcon]
  return (
    <div className="contact" name="contact">
      <h1
        className="head2 heading"
        style={{
          // paddingTop: 20,
          paddingBottom: 10,
          // fontSize: 20,
          // color: "grey",
        }}
      >
        Contact Me at
      </h1>
      <div className="more-contact" style={{ padding: "20px 0px" }}>
        <div class="contact-DP-div" style={{ padding: "20px 0px" }}>
          <div>
            <img src={DP} className="contact-DP"></img>
          </div>
          <h3 className="head3">
            Email:{" "}
            <a style={{ color: "blue" }} onClick={openNavigator}>
              aryan.nigam1996@gmail.com
            </a>
          </h3>
          <h3 className="head3">
            Phone:{" "}
            <a style={{ color: "blue" }} onClick={openCall}>
              +91-9532044474
            </a>
          </h3>
        </div>
        <div>
          <Tooltip title="LinkedIn" arrow style={{ padding: "0px 25px" }}>
            <a
              href="https://www.linkedin.com/in/shobhit-nigam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="contact_icon" />
            </a>
          </Tooltip>
          <Tooltip title="Github" arrow style={{ padding: "0px 25px" }}>
            <a
              href="https://github.com/Zombieteer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="contact_icon" />
            </a>
          </Tooltip>
          <Tooltip title="Twitter" arrow style={{ padding: "0px 25px" }}>
            <a
              href="https://twitter.com/ShobhitNigam37"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="contact_icon" />
            </a>
          </Tooltip>
          <Tooltip title="Instagram" arrow style={{ padding: "0px 25px" }}>
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
  );
};

export default Contact;
