import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import Billing from "./pages/Billing";
import Messages from "./pages/Messages";

// import { Web3ReactProvider } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";

// function getLibrary(provider) {
//   return new Web3Provider(provider);
// }

function App() {
  return (
    // <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
    // </Web3ReactProvider>
  );
}

export default App;
