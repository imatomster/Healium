require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const msgRouter = require("./routes/msgRouter2");

const port = process.env.PORT2 ? process.env.PORT2 : 4001;

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/v1/user2/", msgRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.on('recieve', (data) => {
  console.log(`Recieved msg: ${data}`);
});

module.exports = { app };
