import React from "react";
import "./Frame30.css";

function Frame30(props) {
  const { className } = props;

  return (
    <div className={`frame-30 ${className || ""}`}>
      <img className="drafts" src="/img/drafts@2x.png" alt="drafts" />
      <div className="messages inter-normal-white-14px">Messages</div>
    </div>
  );
}

export default Frame30;
