const express = require("express");
const transactionsController = require("./controllers/transactions");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
})

app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not Found!");
});

module.exports = app;
