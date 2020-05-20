import React from "react";
import sendMail from "../../public/sendmail.gif";

export const MailLoad = () => {
  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "fixed",
      }}
    >
      <img src={sendMail} alt="Loading..." />
    </div>
  );
};

export default MailLoad;
