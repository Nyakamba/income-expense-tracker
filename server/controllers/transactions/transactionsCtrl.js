const Account = require("../../model/Account");
const Transaction = require("../../model/Transaction");
const User = require("../../model/User");
const { appErr } = require("../../utils/appErr");

//create transaction
const createTransactionCtrl = async (req, res, next) => {
  const { name, amount, notes, transactionType, account, category, createdBy } =
    req.body;

  try {
    //Find user
    const userFound = await User.findById(req.user);
    if (!userFound) return next(appErr("User not found", 404));

    //Find the account
    const accountFound = await Account.findById(account);
    if (!accountFound) return next(appErr("Account not found", 404));
    //Create the transaction
    const transaction = await Transaction.create({
      amount,
      notes,
      account,
      transactionType,
      category,
      name,
      createdBy: req.user,
    });
    ///push the transaction to the account
    accountFound.transactions.push(transaction._id);
    //resave the account
    await accountFound.save();
    res.json({ status: "success", data: transaction });
  } catch (error) {
    next(appErr(error.message));
  }
};

//get transactions
const getTransactionsCtrl = async (req, res) => {
  try {
    res.json({ msg: "Get transactions route" });
  } catch (error) {
    res.json(error);
  }
};

//get transaction
const getTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Get a single transaction route" });
  } catch (error) {
    res.json(error);
  }
};

//delete transaction
const deleteTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Delete transaction route" });
  } catch (error) {
    res.json(error);
  }
};

//update transaction
const updateTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Update transaction route" });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  createTransactionCtrl,
  getTransactionsCtrl,
  getTransactionCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
};
