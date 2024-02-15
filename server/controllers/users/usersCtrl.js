const bcrypt = require("bcryptjs");
const User = require("../../model/User");
const { appErr } = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");

//register
const registerUserCtrl = async (req, res, next) => {
  const { fullname, password, email } = req.body;
  try {
    //check is user exists
    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(appErr("User Already Exist", 400));
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create user
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.json({
      status: "success",
      fullname: user.fullname,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    next(appErr(error));
  }
};

//login
const userLoginCtrl = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (!userFound) return next(appErr("Invalid login credentials", 400));

    //check for password validity
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if (!isPasswordMatch) return next(appErr("Invalid login credentials", 400));

    res.json({
      status: "success",
      fullname: userFound.fullname,
      id: userFound._id,
      token: generateToken(userFound._id),
    });
  } catch (error) {
    next(appErr(error));
  }
};
//profile
const userProfileCtrl = async (req, res) => {
  //how to get token from headers
  const headerObj = req.headers;

  const token = headerObj["authorization"].split(" ")[1];
  const result = verifyToken(token);
  console.log(result);
  try {
    res.json({ msg: "Profile route" });
  } catch (error) {
    res.json(error);
  }
};
//delete
const deleteUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Delete route" });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Update route" });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
};
