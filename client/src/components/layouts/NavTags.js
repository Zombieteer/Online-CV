import React from "react";
import { Link } from "react-scroll";

export const NavTags = () => {
  return (
    <ul className="nav-item-link">
      <li>
        {" "}
        <Link activeClass="active" to="about" spy={true} smooth={true}>
          My skills
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="project" spy={true} smooth={true}>
          Projects
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="talk" spy={true} smooth={true}>
          Let's Talk
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavTags;
