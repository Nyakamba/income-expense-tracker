const express = require("express");

const usersRoute = express.Router();

//POST/register
usersRoute.post("/register", async (req, res) => {
  try {
    res.json({ msg: "Register route" });
  } catch (error) {
    res.json(error);
  }
});

//POST/login
usersRoute.post("/login", async (req, res) => {
  try {
    res.json({ msg: "Login route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/profile/:id
usersRoute.get("/profile/:id", async (req, res) => {
  try {
    res.json({ msg: "Profile route" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/:id
usersRoute.delete("/:id", async (req, res) => {
  try {
    res.json({ msg: "Delete route" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/:id
usersRoute.put("/:id", async (req, res) => {
  try {
    res.json({ msg: "Update route" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = usersRoute;
