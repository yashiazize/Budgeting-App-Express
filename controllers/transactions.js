const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");

transactions.get("/:id", (req, res) => {
    const { id } = req.params;
    if (transactionsArray[id]) {
        res.json(transactionsArray[id]);
    } else {
        res.redirect("*")
    }
})

transactions.get("/", (req, res) => {
    res.json(transactionsArray)
})

transactions.post("/", (req, res) => {
    const { body } = req;
    transactionsArray.push(req.body)
    res.json(transactionsArray[transactionsArray.length - 1])
})

module.exports = transactions;