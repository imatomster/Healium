import React from "react";
import Frame49 from "../Frame49";
import "./Frame58.css";

function Frame58(props) {
  const { diagnosis, className } = props;

  return (
    <div className={`frame-58 ${className || ""}`}>
      <div className="diagnosis valign-text-middle inter-semi-bold-black-11-8px">{diagnosis}</div>
      <Frame49 />
    </div>
  );
}

export default Frame58;
