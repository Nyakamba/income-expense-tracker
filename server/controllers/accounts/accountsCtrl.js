const Account = require("../../model/Account");
const User = require("../../model/User");
const { appErr } = require("../../utils/appErr");

//create account
const createAccountCtrl = async (req, res, next) => {
  const { name, initialBalance, accountType, notes } = req.body;
  try {
    //find the logged user
    const userFound = await User.findById(req.user);

    if (!userFound) return next(appErr("User not found", 404));

    //Create the account
    const account = await Account.create({
      name,
      initialBalance,
      accountType,
      notes,
      createdBy: req.user,
    });

    //Push the account into users account field
    userFound.accounts.push(account._id);
    //Reasve the user
    await userFound.save();
    res.json({ status: "success", data: account });
  } catch (error) {
    next(appErr(error.message, 500));
  }
};

//get account
const getAccountCtrl = async (req, res, next) => {
  try {
    //find the id from params
    const { id } = req.params;

    const account = await Account.findById(id).populate("transactions");
    res.json({
      staus: "success",
      data: account,
    });
  } catch (error) {
    next(appErr(error.message, 500));
  }
};
//delete account
const deleteAccountCtrl = async (req, res, next) => {
  try {
    res.json({ msg: "Delete Account route" });
  } catch (error) {
    next(appErr(error.message, 500));
  }
};

//update account
const updateAccountCtrl = async (req, res, next) => {
  try {
    //find account
    const { id } = req.params;
    const account = await Account.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({ status: "success", data: account });
  } catch (error) {
    next(appErr(error.message, 500));
  }
};

//get accounts
const getAccountsCtrl = async (req, res, next) => {
  try {
    const accounts = await Account.find().populate("transactions");
    res.json(accounts);
  } catch (error) {
    next(appErr(error.message, 500));
  }
};
module.exports = {
  createAccountCtrl,
  getAccountCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
  getAccountsCtrl,
};
