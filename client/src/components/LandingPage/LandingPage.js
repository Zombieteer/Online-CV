import React, { useEffect } from "react";
import "./nav.css";
import BackgroungLogo from "./BackgroungLogo";
import ProjectSection from "./ProjectSection";
import LetsTalk from "./LetsTalk";
import Contact from "./Contact";
import About from "./About";
import ModalTempelate from "../layouts/ModalTempelate";
import rightI from "../../../src/public/i.png";
import shobhit from "../../../src/public/logo.jpeg";
import SN_logo from "../../../src/public/SN_logo.png";
import html5 from "../../../src/public/HTML5.svg";
import css3 from "../../../src/public/css3.svg";
import django from "../../../src/public/django.svg";
import express from "../../../src/public/expressjs.svg";
import github from "../../../src/public/github.svg";
import googleCloud from "../../../src/public/google-cloud.svg";
import javascript from "../../../src/public/javascript.svg";
import mongodb from "../../../src/public/mongodb.svg";
import nodejs from "../../../src/public/nodejs.svg";
import python from "../../../src/public/python.svg";
import react from "../../../src/public/REACT.svg";
import redux from "../../../src/public/redux.svg";
import { Link, Events } from "react-scroll";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";

let tech_images = [
  html5,
  css3,
  django,
  express,
  github,
  googleCloud,
  javascript,
  mongodb,
  nodejs,
  python,
  react,
  redux,
];

export const LandingPage = () => {
  let top = 0;
  let left = 0;
  let checkleft = 10;
  var i = 1;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openImage = () => {
    handleOpen();
  };
  // <ModalTempelate type="logo" />;

  const positioning = (item) => {
    while (tech_images.indexOf(item) !== tech_images.length) {
      if (left !== checkleft) {
        top = top + 17 * i;
        left = left + 5;
        i = 3.2;
        return <BackgroungLogo img={item} left={left} top={top} />;
      } else {
        i = 1;
        top = 0;
        checkleft = left + 10;
      }
    }
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }, []);

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={SN_logo} className="nav-home-logo" alt="shobhit-logo" />
        </div>
        <div style={{ display: "flex" }}>
          <ul className="nav-item-link">
            <li>
              {" "}
              <Link activeClass="active" to="about" spy={true} smooth={true}>
                About
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
          <div className="logo" onClick={openImage}>
            <img src={shobhit} className="user-logo" alt="shobhit-logo" />
          </div>
        </div>
      </div>

      <div className="basic-about">
        <div className="back_techs">
          {tech_images.map((item) => positioning(item))}
        </div>
        <div className="about_front">
          <div className="intro">
            <h1 className="head">
              Full <span style={{ color: "orange" }}>Stack</span> Developer
            </h1>
            <h2 className="head2">
              I <FavoriteIcon style={{ color: red[800] }} /> to built great user
              experiences.
            </h2>
          </div>
          <div className="intro">
            <img className="rightImage" src={rightI} alt="apple products"></img>
          </div>
        </div>
      </div>
      <About />
      <ProjectSection />
      <LetsTalk />
      <Contact />
      <ModalTempelate
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        type="logo"
      />
    </div>
  );
};

export default LandingPage;
