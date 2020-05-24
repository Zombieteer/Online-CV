import React from "react";
import { Link } from "react-scroll";
import Divider from "@material-ui/core/Divider";

export const TabNav = () => {
  return (
    <ul className="tab-nav-link">
      <li>
        <Link
          className="bottom-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
        >
          My skills
        </Link>
      </li>
      <Divider orientation="vertical" flexItem />
      <li>
        <Link
          className="bottom-link"
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
        >
          Projects
        </Link>
      </li>
      <Divider orientation="vertical" flexItem />
      <li>
        <Link
          className="bottom-link"
          activeClass="active"
          to="talk"
          spy={true}
          smooth={true}
        >
          Let's Talk
        </Link>
      </li>
      <Divider orientation="vertical" col flexItem />
      <li>
        <Link
          className="bottom-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default TabNav;
