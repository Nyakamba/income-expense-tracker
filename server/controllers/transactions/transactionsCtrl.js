//create transaction
const createTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "Create transaction route" });
  } catch (error) {
    res.json(error);
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
