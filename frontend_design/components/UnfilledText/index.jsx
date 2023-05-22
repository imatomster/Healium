import React from "react";
import "./UnfilledText.css";

function UnfilledText(props) {
  const { spanText1, spanText2, spanText3, className } = props;

  return (
    <div className={`unfilled-text ${className || ""}`}>
      <div className="ellipse-10"></div>
      <p className="text inter-bold-white-14px">
        <span className="span0-6 inter-bold-black-14px">{spanText1}</span>
        <span className="span-3 inter-normal-black-12px">{spanText2}</span>
        <span className="span-3 inter-normal-steel-blue-12px">{spanText3}</span>
      </p>
    </div>
  );
}

export default UnfilledText;
