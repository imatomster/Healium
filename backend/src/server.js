/** Import Area */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const msgRouter = require("./routes/msgRouter");
const dbRouter = require("./routes/dbRouter");

/** Mongodb connection */
const clientPromise = require("./database");

/** Express connection */
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

/** Router connection */
app.use("/v1/test/", msgRouter);
app.use("/v1/mongo/", dbRouter);

/** Listening and running server */
const port = process.env.PORT ? process.env.PORT : 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.on("recieve", (data) => {
  console.log(`Recieved msg: ${data}`);
});

module.exports = { app };
