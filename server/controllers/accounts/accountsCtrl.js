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
    next(appErr(error));
  }
};

//get account
const getAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Get single Account route" });
  } catch (error) {
    res.json(error);
  }
};
//delete account
const deleteAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Delete Account route" });
  } catch (error) {
    res.json(error);
  }
};

//update account
const updateAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Update Account route" });
  } catch (error) {
    res.json(error);
  }
};

//get accounts
const getAccountsCtrl = async (req, res) => {
  try {
    res.json({ msg: "Get all Accounts route" });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  createAccountCtrl,
  getAccountCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
  getAccountsCtrl,
};
