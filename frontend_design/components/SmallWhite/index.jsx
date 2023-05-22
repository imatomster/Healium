import React from "react";
import BigPrimaryButton2 from "../BigPrimaryButton2";
import "./SmallWhite.css";

function SmallWhite(props) {
  const { bigPrimaryButton2Props } = props;

  return (
    <div className="small-white-1">
      <BigPrimaryButton2 className={bigPrimaryButton2Props.className}>
        {bigPrimaryButton2Props.children}
      </BigPrimaryButton2>
    </div>
  );
}

export default SmallWhite;
