const express = require("express");

require("dotenv").config();

const router = express.Router();

//// Users
// B@B Users API
////


router.post("/sendData", async function (req, res) {
  const { xd } = req.body;

 
  return res.status(200).json({ msg: "Success" });
});
