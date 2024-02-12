const express = require("express");
const usersRoute = require("./routes/users/usersRoute");

const app = express();

//middlewares

//-----------
//routes
//-----------

//users route
app.use("/api/v1/users/", usersRoute);

//account route
//POST/api/v1/accounts
app.post("/api/v1/accounts", async (req, res) => {
  try {
    res.json({ msg: "Create Account route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/accounts/:id
app.get("/api/v1/accounts/:id", async (req, res) => {
  try {
    res.json({ msg: "Get single Account route" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/v1/accounts/:id
app.delete("/api/v1/accounts/:id", async (req, res) => {
  try {
    res.json({ msg: "Delete Account route" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/accounts/:id
app.put("/api/v1/accounts/:id", async (req, res) => {
  try {
    res.json({ msg: "Update Account route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/accounts
app.get("/api/v1/accounts", async (req, res) => {
  try {
    res.json({ msg: "Get all Accounts route" });
  } catch (error) {
    res.json(error);
  }
});

//transactions route
//POST/api/v1/transctions
app.post("/api/v1/transactions", async (req, res) => {
  try {
    res.json({ msg: "Create transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/transctions
app.get("/api/v1/transactions", async (req, res) => {
  try {
    res.json({ msg: "Get transactions route" });
  } catch (error) {
    res.json(error);
  }
});

//GEt/api/v1/transctions/:id
app.get("/api/v1/transactions/:id", async (req, res) => {
  try {
    res.json({ msg: "Get a single transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/v1/transctions/:id
app.delete("/api/v1/transactions/:id", async (req, res) => {
  try {
    res.json({ msg: "Delete transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/transctions/:id
app.put("/api/v1/transactions/:id", async (req, res) => {
  try {
    res.json({ msg: "Update transaction route" });
  } catch (error) {
    res.json(error);
  }
});
//error handlers

//listen to server

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Serve is up and running on port ${PORT}`);
});
