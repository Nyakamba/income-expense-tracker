const express = require("express");
const {
  createTransactionCtrl,
  getTransactionsCtrl,
  getTransactionCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
} = require("../../controllers/transactions/transactionsCtrl");
const isLogin = require("../../middlewares/isLogin");

const transactionsRoute = express.Router();

//POST/api/v1/transctions
transactionsRoute.post("/", isLogin, createTransactionCtrl);

//GET/api/v1/transctions
transactionsRoute.get("/", getTransactionsCtrl);

//GEt/api/v1/transctions/:id
transactionsRoute.get("/:id", getTransactionCtrl);

//DELETE/api/v1/transctions/:id
transactionsRoute.delete("/:id", deleteTransactionCtrl);

//PUT/api/v1/transctions/:id
transactionsRoute.put("/:id", updateTransactionCtrl);

module.exports = transactionsRoute;
