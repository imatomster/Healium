import React from "react";
import "./Frame31.css";

function Frame31(props) {
  const { className } = props;

  return (
    <div className={`frame-31-1 ${className || ""}`}>
      <img className="icon-home-1" src="/img/home@2x.png" alt="icon-home" />
      <div className="place-2 inter-normal-white-14px">Home</div>
    </div>
  );
}

export default Frame31;
