const mongoose = require("mongoose");
// const validator = require("validator");

var Schema = mongoose.Schema;

const CPTCodeSchema = new Schema({
  "CPT Code": {
    type: Number,
    unique: true,
  },
  "CPT Short Description": {
    type: String,
  },
  "CPT Default Price": {
    type: String,
  },
});

CPTCode = mongoose.model("CPTCode", new Schema({}), "csv");

// CPTCode.findOne({ _id: '6449a71d3295fa3b024cb227'}, function (err, user) {
//   if (err) {
//     console.log(err);
//   } else { 
//     console.log(user);
//   }
// });

CPTCode.findOne({"CPT Default Price":"$1,100.00"}).exec().then((docs) => {console.log(docs)});

// CPTCode.find() // find all users
//   .skip(100) // skip the first 100 items
//   .limit(10) // limit to 10 items    // sort ascending by firstName// select firstName only
//   .exec() // execute the query
//   .then((docs) => {
//     console.log(docs);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

module.exports = CPTCode;
