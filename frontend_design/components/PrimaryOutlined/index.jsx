import React from "react";
import "./PrimaryOutlined.css";

function PrimaryOutlined(props) {
  const { className } = props;

  return <div className={`primary-outlined ${className || ""}`}></div>;
}

export default PrimaryOutlined;
