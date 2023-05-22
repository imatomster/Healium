const { MongoClient } = require("mongodb");

if (!process.env.MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async function connectClient(db_name, col_name) {
  try {
    clientPromise = await client.connect();
    const db = await clientPromise.db(db_name).collection(col_name);

    console.log("Connected to MongoDB!", db_name, col_name);
    return db;
  } catch (err) {
    console.error(err);
  }
};

/** Tests */
// const query = await Codes.find().limit(4).toArray();
//   // console.log(query);

//   // await Codes.findOne({ _id: new ObjectID('6449a71d3295fa3b024cb225') }, function (err, user) {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log(user);
//   //   }
//   // });

//   // await Codes.findOne({'CPT Short Description': 'INCISION & DRAINAGE ABSCESS COMPLICATED/MULTIPLE' }, function (err, user) {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log(user);
//   //   }
//   // });