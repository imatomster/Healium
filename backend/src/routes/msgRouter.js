const express = require("express");

require("dotenv").config();

const router = express.Router();

//// Users
// B@B Users API
////

let recievedMSG;

router.post("/send", async function (req, res) {
  const { msg } = req.body;

  const response = await fetch("http://localhost:4000/v1/user/recieve?msg=" + msg, {
    method: 'POST',
    });

    response.json().then(data => {
      console.log(JSON.stringify(data));
    });


  return res.status(200).json({ msg });
});

router.post("/recieve", async function (req, res) {
  body = req.body
  const { msg, diane } = req.body;

  recievedMSG = msg;

  console.log(recievedMSG);
  console.log(diane)

  return res.status(200).json({ body });
});

router.get("/getMSG", async function (req, res) {
  return res.status(200).json({ recievedMSG });
});

module.exports = router;
