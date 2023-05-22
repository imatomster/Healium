import React from "react";
import BigPrimaryButton2 from "../BigPrimaryButton2";
import "./PrimaryFilled2.css";

function PrimaryFilled2(props) {
  const { bigPrimaryButton2Props } = props;

  return (
    <div className="primary-filled-2">
      <BigPrimaryButton2>{bigPrimaryButton2Props.children}</BigPrimaryButton2>
    </div>
  );
}

export default PrimaryFilled2;
