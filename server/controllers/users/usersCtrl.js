const bcrypt = require("bcryptjs");
const User = require("../../model/User");
const { appErr } = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");

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
    next(appErr(error.message, 500));
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
    next(appErr(error.message, 500));
  }
};
//profile
const userProfileCtrl = async (req, res) => {
  try {
    const user = await User.findById(req.user).populate({
      path: "accounts",
      populate: {
        path: "transactions",
        model: "Transaction",
      },
    });
    res.json(user);
  } catch (error) {
    next(appErr(error.message, 500));
  }
};
//delete
const deleteUserCtrl = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(appErr(error.message, 500));
  }
};

//update
const updateUserCtrl = async (req, res, next) => {
  try {
    //check if email exists
    //if (req.body.email) {
    const userFound = await User.findOne({ email: req.body.email });
    if (userFound) return next(appErr("Email is taken", 400));
    // }

    //check if user is updating password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      //update the user
      const user = await User.findByIdAndUpdate(
        req.user,
        {
          password: hashedPassword,
        },
        { new: true, runValidators: true }
      );
      //send response
      return res.status(200).json({
        status: "success",
        data: user,
      });
    }

    const user = await User.findByIdAndUpdate(req.user, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(appErr(error.message, 500));
  }
};
module.exports = {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
};
