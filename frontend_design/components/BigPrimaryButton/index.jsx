import React from "react";
import "./BigPrimaryButton.css";

function BigPrimaryButton(props) {
  const { children, className } = props;

  return (
    <div className={`small-inactive-1 ${className || ""}`}>
      <div className="big-button-1 inter-medium-white-9-4px">{children}</div>
    </div>
  );
}

export default BigPrimaryButton;
