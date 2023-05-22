import React from "react";
import BigPrimaryButton from "../BigPrimaryButton";
import "./PrimaryFilled.css";

function PrimaryFilled(props) {
  const { className, bigPrimaryButtonProps } = props;

  return (
    <div className={`primary-filled ${className || ""}`}>
      <BigPrimaryButton className={bigPrimaryButtonProps.className}>{bigPrimaryButtonProps.children}</BigPrimaryButton>
    </div>
  );
}

export default PrimaryFilled;
