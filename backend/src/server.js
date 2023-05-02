require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const msgRouter = require("./routes/msgRouter");

const port = process.env.PORT ? process.env.PORT : 4000;

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/v1/test/", msgRouter);
app.use("/v1/mongo/", mongo);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.on('recieve', (data) => {
  console.log(`Recieved msg: ${data}`);
});

module.exports = { app };
