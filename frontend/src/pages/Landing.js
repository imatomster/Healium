import React from "react";
import "./Landing.css";
import logo from "../images/healium_landing_logo.png";
import { useState, useEffect } from 'react';


function Landing() {
  const [web3Modal, setWeb3Modal] = useState(null)  

  // useEffect(() => {
  //   // initiate web3modal
  //   const providerOptions = {
  //     walletconnect: {
  //       package: WalletConnectProvider,
  //       options: {
  //         infuraId: YOUR_INFURA_KEY,
  //       }
  //     },
  //   };

  //   const newWeb3Modal = new Web3Modal({
  //     cacheProvider: true, // very important
  //     network: "mainnet",
  //     providerOptions,
  //   });

  //   setWeb3Modal(newWeb3Modal)
  // }, [])

  // async function connectWallet() {
  //   const provider = await web3Modal.connect();
  // }
  
  return (
    <div className="layout">
      <div className="logo_top">
        <img src={logo} alt="My App Logo" className="logo" />
      </div>
      <div className="content">
        <div className="title">
          Transparent <br /> Healthcare
        </div>
        <div className="heading">
          Enable physicians to select procedures with precision.
        </div>
        <div className="subheading">
          Offer patients a transparent view of their charges. Streamline your
          <br /> billing with smart contract automation.
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
            className="mr-2	rounded-md bg-indigo-200 bg-opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Billing Automation
          </button>

          <button
            type="button"
            className="rounded-md bg-red-200 bg-opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Connect to Wallet
          </button>

        </div>
      </div>
    </div>
  );
}

export default Landing;
