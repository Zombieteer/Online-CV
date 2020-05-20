import React from "react";

export const BackgroungLogo = ({ img, left, top }) => {
  return (
    <img
      style={{ ...tech_img, top: `${top}%`, left: `${left}%`, padding: 20 }}
      src={img}
      alt={img}
    />
  );
};

const tech_img = {
  zIndex: -1,
  height: "6vw",
  width: "6vw",
  opacity: 0.35,
  position: "absolute",
};

export default BackgroungLogo;
