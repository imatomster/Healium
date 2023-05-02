const express = require("express");

require("dotenv").config();

const router = express.Router();

//// Users
// B@B Users API
////

let recievedMSG;

router.post("/send", async function (req, res) {
  const { msg } = req.query;

  console.log(msg);


  const response = await fetch("http://localhost:4001/v1/user/recieve?msg=" + msg, {
    method: 'POST',
    });

    response.json().then(data => {
      console.log(JSON.stringify(data));
    });


  return res.status(200).json({ msg: "Success" });
});

router.post("/recieve", async function (req, res) {
  const { msg } = req.query;

  recievedMSG = msg;
  console.log(msg)

  return res.status(200).json({ msg: "Success" });
});

router.get("/getMSG", async function (req, res) {
  console.log(recievedMSG);
  return res.status(200).json({ recievedMSG });
});

module.exports = router;
