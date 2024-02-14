const bcrypt = require("bcryptjs");
const User = require("../../model/User");

//register
const registerUserCtrl = async (req, res, next) => {
  const { fullname, password, email } = req.body;
  try {
    //check is user exists
    const userFound = await User.findOne({ email });
    if (userFound) {
      next(new Error("User Already Exist"));
    }

    //check if fields are empty
    if (!email || !password || !fullname)
      return res.json({ message: "Pleas provide all fields" });
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
    res.json(error);
  }
};

//login
const userLoginCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (!userFound) return res.json({ message: "Invalid login credentials" });

    //check for password validity
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if (!isPasswordMatch)
      return res.json({ message: "Invalid login credentials" });

    res.json({
      status: "success",
      fullname: userFound.fullname,
      id: userFound._id,
    });
  } catch (error) {
    res.json(error);
  }
};
//profile
const userProfileCtrl = async (req, res) => {
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
