import React, { useState } from "react";
import twimbit_tempelate from "../../public/twimbit_tempelate.png";
import twimbit_logo from "../../public/twimbit_logo.jpg";
import contactser_tempelate from "../../public/contactser_tempelate.png";
import contactKeeper_logo from "../../public/contactKeeper_logo.png";
import Project from "./Project";

export const ProjectSection = () => {
  const [projects, setProjects] = useState([
    {
      title: twimbit_logo,
      image: twimbit_tempelate,
      detail:
        "Twimbit Provides joy in the consumption of research, for every individual and every company.",
      techUsed: "Reactjs, Material UI",
      detail_color: "#034658",
      target: "https://twimbit.com/",
    },
    {
      title: contactKeeper_logo,
      image: contactser_tempelate,
      detail: "Saving contacts in your own personal space, now more secure",
      detail_color: "#E04A58",
      techUsed: "MongoDB, Expressjs, Reactjs, Nodejs, Bcrypt, JWT",
      target: "http://contactser.herokuapp.com/login",
    },
  ]);

  return (
    <div className="container" name="project">
      <h1 className="heading head">Projects</h1>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
};
export default ProjectSection;
