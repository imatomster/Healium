import React from "react";
import "./LargeFilled.css";

function LargeFilled(props) {
  const { textHere, text1, largeFilled, text2, text3 } = props;

  return (
    <div className="large-unfilled-2">
      <div className="overlap-group1-3">
        <div className="filled-state">
          <div className="text-here inter-medium-black-16px">{textHere}</div>
          <div className="overlap-group-3">
            <div className="text-1 valign-text-middle dmsans-medium-quick-silver-16px">{text1}</div>
            <div className="large-filled valign-text-middle">{largeFilled}</div>
            <div className="rectangle-3"></div>
            <div className="text-1 valign-text-middle dmsans-medium-quick-silver-16px">{text2}</div>
          </div>
        </div>
        <div className="text-2">{text3}</div>
      </div>
    </div>
  );
}

export default LargeFilled;
