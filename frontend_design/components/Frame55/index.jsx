import React from "react";
import "./Frame55.css";

function Frame55(props) {
  const { className } = props;

  return (
    <div className={`frame-55 ${className || ""}`}>
      <img className="image-11" src="/img/image-11-1@2x.png" alt="image 11" />
      <div className="flex-col">
        <p className="name-5 inter-medium-white-20px">
          <span className="span0 inter-medium-black-20px">John Doe </span>
          <span className="span1-2 inter-bold-topaz-16px">29 Yrs, Male</span>
        </p>
        <div className="flex-row-1 inter-semi-bold-white-8px">
          <div className="phone-number-925-555-6678">
            <span className="span0-2 inter-semi-bold-topaz-8px">
              Phone Number
              <br />
            </span>
            <span className="span1 inter-normal-black-12px">925-555-6678</span>
          </div>
          <div className="email-johngmailcom">
            <span className="span0 inter-semi-bold-topaz-8px">
              Email
              <br />
            </span>
            <span className="span1 inter-normal-black-12px">john@gmail.com</span>
          </div>
        </div>
        <p className="address-123-piedmont inter-semi-bold-white-8px">
          <span className="span0 inter-semi-bold-topaz-8px">
            Address
            <br />
          </span>
          <span className="span1 inter-normal-black-12px">123 Piedmont Ave, Berkeley CA, 94720</span>
        </p>
      </div>
    </div>
  );
}

export default Frame55;
