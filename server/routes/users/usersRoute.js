const express = require("express");
const {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
} = require("../../controllers/users/usersCtrl");

const usersRoute = express.Router();

//POST/register
usersRoute.post("/register", registerUserCtrl);

//POST/login
usersRoute.post("/login", userLoginCtrl);

//GET/profile/:id
usersRoute.get("/profile/:id", userProfileCtrl);

//DELETE/:id
usersRoute.delete("/:id", deleteUserCtrl);

//PUT/:id
usersRoute.put("/:id", updateUserCtrl);

module.exports = usersRoute;
