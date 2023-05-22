import React from "react";
import LargeFilled from "../LargeFilled";
import "./LargeUnfilled2.css";

function LargeUnfilled2(props) {
  const { largeFilledProps } = props;

  return (
    <div className="large-unfilled-1">
      <LargeFilled
        textHere={largeFilledProps.textHere}
        text1={largeFilledProps.text1}
        largeFilled={largeFilledProps.largeFilled}
        text2={largeFilledProps.text2}
        text3={largeFilledProps.text3}
      />
    </div>
  );
}

export default LargeUnfilled2;
