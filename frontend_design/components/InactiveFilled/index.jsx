import React from "react";
import BigPrimaryButton from "../BigPrimaryButton";
import "./InactiveFilled.css";

function InactiveFilled(props) {
  const { className, bigPrimaryButtonProps } = props;

  return (
    <div className={`inactive-filled ${className || ""}`}>
      <BigPrimaryButton className={bigPrimaryButtonProps.className}>{bigPrimaryButtonProps.children}</BigPrimaryButton>
    </div>
  );
}

export default InactiveFilled;
