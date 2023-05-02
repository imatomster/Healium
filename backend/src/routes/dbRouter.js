const express = require("express");
const router = express.Router();
const connectClient = require("../database");

let cpt_db;
// then and asynch is used to deal with waiting until the result is done before continuing
connectClient("cpt_to_price", "csv").then((result) => {
  cpt_db = result; // problem was that the varialble was intialzied to a promise

  //space for testing below here
});

router.get("/findAndMatch", async function (req, res) {
  const { department, symptoms, diagnosis, procedure } = req.body;

  // pattern = new RegExp("|" + department + "|" + symptoms + "|" + diagnosis + "|" + procedure, 'i');

  pattern = new RegExp(procedure, "i");

  const query = await cpt_db
    .find({ "CPT Short Description": pattern })
    .limit(3)
    .toArray();
  console.log(query);

  return res.status(200).json({ query });
});

module.exports = router;
