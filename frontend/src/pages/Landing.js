import React from "react";
import "./Landing.css";
import logo from "../images/healium_landing_logo.png";

function Landing() {
  return (
    <div className="layout">
      <div className="logo_top">
          <img src={logo} alt="My App Logo" className="logo"/>
      </div>
      <div className="content">
        <div className="title">Transparent <br/> Healthcare</div>
        <div className="heading">
          Enable physicians to select procedures with precision.
        </div>
        <div className="subheading">
          Offer patients a transparent view of their charges. Streamline your
          <br/> billing with smart contract automation.
        </div>
        <div className="buttons">
          <button
            type="button"
            className="mr-2	rounded-md bg-purple-950 bg-opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Procedure Clarity
          </button>
          <button
            type="button"
            className="mr-2	rounded-md bg-pink-200 bg-opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Patient Confidence
          </button>
          <button
            type="button"
            className="rounded-md bg-indigo-200 bg-opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Billing Automation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
