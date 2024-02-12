//register
const registerUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "Register route" });
  } catch (error) {
    res.json(error);
  }
};

//login
const userLoginCtrl = async (req, res) => {
  try {
    res.json({ msg: "Login route" });
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
