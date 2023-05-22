import React from "react";
import "./Frame28.css";

function Frame28(props) {
  const { account_Circle, className } = props;

  return (
    <div className={`frame-28 ${className || ""}`}>
      <img className="account_circle" src={account_Circle} alt="account_circle" />
      <div className="patients inter-normal-white-14px">Patients</div>
    </div>
  );
}

export default Frame28;
