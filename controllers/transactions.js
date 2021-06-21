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
    transactionsArray.push(body)
    res.json(transactionsArray[transactionsArray.length - 1])
})

transactions.put("/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;
    if (transactionsArray[id]) {
        transactionsArray[id] = body;
        res.json(transactionsArray[id])
    } else {
        res.redirect("*")
    }
 })

 transactions.delete("/:id", (req, res) => {
     const { id } = req.params;
     if (transactionsArray[id]) {
         const deletedTransaction = transactionsArray.splice(id, 1)
         res.json(deletedTransaction[0])
     }
 })
 
module.exports = transactions;