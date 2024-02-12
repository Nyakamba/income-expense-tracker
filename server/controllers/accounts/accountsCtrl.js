//create account
const createAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "Create Account route" });
  } catch (error) {
    res.json(error);
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
