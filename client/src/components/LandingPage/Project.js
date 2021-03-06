import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const Project = ({
  project: { title, image, detail, target, detail_color, techUsed },
}) => {
  return (
    <Card
      className="project-card"
      style={{ borderTop: `${detail_color} solid 5px` }}
    >
      <CardContent>
        <div className="project">
          <img className="mac-screen" src={image} alt="mac-screen"></img>
          <div class="info">
            <div className="company-logo-div">
              <img
                className="company-logo"
                src={title}
                alt="company-logo"
              ></img>
            </div>
            <h3
              className="head3"
              style={{ color: `${detail_color}`, fontSize: 25 }}
            >
              {detail}
            </h3>
            <h4
              className="head4"
              style={{ color: `${detail_color}`, fontSize: 21 }}
            >
              Tech Used: {techUsed}
            </h4>
            <a
              href={target}
              target="_blank"
              rel="noopener noreferrer"
              className="clickable-button"
            >
              Visit
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Project;
