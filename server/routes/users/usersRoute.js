const express = require("express");
const {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
} = require("../../controllers/users/usersCtrl");
const isLogin = require("../../middlewares/isLogin");

const usersRoute = express.Router();

//POST/register
usersRoute.post("/register", registerUserCtrl);

//POST/login
usersRoute.post("/login", userLoginCtrl);

//GET/profile/
usersRoute.get("/profile/", isLogin, userProfileCtrl);

//DELETE/
usersRoute.delete("/", isLogin, deleteUserCtrl);

//PUT/
usersRoute.put("/", isLogin, updateUserCtrl);

module.exports = usersRoute;
