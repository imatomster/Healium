import React from "react";
import LargeUnfilled2 from "../LargeUnfilled2";
import "./LargeUnfilled.css";

function LargeUnfilled(props) {
  const { largeUnfilled2Props } = props;

  return (
    <div className="large-unfilled">
      <LargeUnfilled2 largeFilledProps={largeUnfilled2Props.largeFilledProps} />
    </div>
  );
}

export default LargeUnfilled;
