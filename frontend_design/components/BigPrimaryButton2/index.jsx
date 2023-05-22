import React from "react";
import "./BigPrimaryButton2.css";

function BigPrimaryButton2(props) {
  const { children, className } = props;

  return (
    <div className={`small-primary-2 ${className || ""}`}>
      <div className="big-button">{children}</div>
    </div>
  );
}

export default BigPrimaryButton2;
