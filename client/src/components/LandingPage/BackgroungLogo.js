import React from "react";

export const BackgroungLogo = ({ img, left, top }) => {
  return (
    <img
      style={{ top: `${top}vh`, left: `${left}vw`, padding: 20 }}
      className="tech_img"
      src={img}
      alt={img}
    />
  );
};

export default BackgroungLogo;
