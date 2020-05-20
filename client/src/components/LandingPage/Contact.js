import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Tooltip from "@material-ui/core/Tooltip";

export const Contact = () => {
  // const social = [LinkedInIcon, GitHubIcon, TwitterIcon, InstagramIcon]
  return (
    <div className="contact" name="contact">
      <div
        style={{
          paddingTop: 20,
          paddingBottom: 10,
          fontSize: 20,
          color: "grey",
        }}
      >
        Find Me at
      </div>
      <div>
        <Tooltip title="LinkedIn" arrow style={{ padding: 15 }}>
          <a
            href="https://www.linkedin.com/in/shobhit-nigam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="contact_icon" />
          </a>
        </Tooltip>
        <Tooltip title="Github" arrow style={{ padding: 15 }}>
          <a
            href="https://github.com/Zombieteer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="contact_icon" />
          </a>
        </Tooltip>
        <Tooltip title="Twitter" arrow style={{ padding: 15 }}>
          <a
            href="https://twitter.com/ShobhitNigam37"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="contact_icon" />
          </a>
        </Tooltip>
        <Tooltip title="Instagram" arrow style={{ padding: 15 }}>
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
  );
};

export default Contact;
