const express = require("express");

const transactionsRoute = express.Router();

//POST/api/v1/transctions
transactionsRoute.post("/", async (req, res) => {
  try {
    res.json({ msg: "Create transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/transctions
transactionsRoute.get("/", async (req, res) => {
  try {
    res.json({ msg: "Get transactions route" });
  } catch (error) {
    res.json(error);
  }
});

//GEt/api/v1/transctions/:id
transactionsRoute.get("/:id", async (req, res) => {
  try {
    res.json({ msg: "Get a single transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/v1/transctions/:id
transactionsRoute.delete("/:id", async (req, res) => {
  try {
    res.json({ msg: "Delete transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/transctions/:id
transactionsRoute.put("/:id", async (req, res) => {
  try {
    res.json({ msg: "Update transaction route" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = transactionsRoute;
