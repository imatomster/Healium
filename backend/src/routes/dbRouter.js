const express = require("express");
const router = express.Router();
// const CPTCode = require("../models/CPTCode");

router.get("/findAndMatch", async function (req, res) {
  body = req.body;
  const { department, symptoms, diagnosis, procedure } = req.body;


  // console.log(CPTCode.find({ cptcode: 10061})._id);

  return res.status(200).json({ body });
});

module.exports = router;