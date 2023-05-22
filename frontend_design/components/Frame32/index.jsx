import React from "react";
import "./Frame32.css";

function Frame32(props) {
  const { image9, spanText1, spanText2, spanText3, x11231100Am } = props;

  return (
    <div className="frame-3-4">
      <div className="frame-3-5">
        <img className="image-1" src={image9} alt="image 9" />
        <p className="name-4 inter-bold-white-14px">
          <span className="inter-bold-black-14px">{spanText1}</span>
          <span className="inter-normal-black-14px">{spanText2}</span>
          <span className="span2 inter-normal-steel-blue-12px">{spanText3}</span>
        </p>
      </div>
      <div className="x1123-11 inter-normal-black-12px">{x11231100Am}</div>
    </div>
  );
}

export default Frame32;
