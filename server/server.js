const express = require("express");

const app = express();

//middlewares

//-----------
//routes
//-----------

//users route
//POST/api/v1/users/register
app.post("/api/v1/users/register", async (req, res) => {
  try {
    res.json({ msg: "Register route" });
  } catch (error) {
    res.json(error);
  }
});

//POST/api/v1/users/login
app.post("/api/v1/users/login", async (req, res) => {
  try {
    res.json({ msg: "Login route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/users/porofile/:id
app.get("/api/v1/users/porofile/:id", async (req, res) => {
  try {
    res.json({ msg: "Profile route" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/v1/users/:id
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({ msg: "Delete route" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/users/:id
app.put("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({ msg: "Update route" });
  } catch (error) {
    res.json(error);
  }
});
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

//transactions route
//POST/api/v1/transctions
app.post("/api/v1/transctions", async (req, res) => {
  try {
    res.json({ msg: "Create transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/transctions
app.get("/api/v1/transctions", async (req, res) => {
  try {
    res.json({ msg: "Get transactions route" });
  } catch (error) {
    res.json(error);
  }
});

//GEt/api/v1/transctions/:id
app.post("/api/v1/transctions/:id", async (req, res) => {
  try {
    res.json({ msg: "Get a single transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/v1/transctions/:id
app.delete("/api/v1/transctions/:id", async (req, res) => {
  try {
    res.json({ msg: "Delete transaction route" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/transctions/:id
app.put("/api/v1/transctions/:id", async (req, res) => {
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
