const { MongoClient } = require("mongodb");

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let clientPromise;
try {
  clientPromise = await client.connect();
  console.log("DB connected successfully!");
} catch (err) {
  console.error(`Error while connecting to DB: ${err.message}`);
}

export default clientPromise;
