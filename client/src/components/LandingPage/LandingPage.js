import React, { useEffect } from "react";
import "./nav.css";
import BackgroungLogo from "./BackgroungLogo";
import NavTags from "../layouts/NavTags";
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
import grass from "../../../src/public/grass.svg";
import menu from "../../public/menu.svg";
import { Events } from "react-scroll";

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
  let checkleft = 12;
  var i = 1;

  const refreshPage = () => {
    window.location.reload(false);
  };

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
        left = left + 6;
        i = 3.2;
        return <BackgroungLogo img={item} left={left} top={top} />;
      } else {
        i = 1;
        top = 0;
        checkleft = left + 12;
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
        <div className="logo" onClick={refreshPage}>
          <img src={SN_logo} className="nav-home-logo" alt="shobhit-logo" />
        </div>
        {/* <img src={menu} style={{ width: 30, color: "#888888" }} ></img> */}
        <div className="right-nav-div">
          <NavTags />
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
            <h1 className="head1">Shobhit Nigam |</h1>
            <h2 className="head2">
              Full <span style={{ color: "orange" }}>Stack</span> Developer
            </h2>
            <h3 className="head3">
              I <FavoriteIcon style={{ color: red[800] }} /> to built great user
              experiences.
            </h3>
          </div>
          <div className="intro rightImage-Div">
            <img className="rightImage" src={rightI} alt="apple products"></img>
          </div>
        </div>
        <div className="grass"></div>
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
