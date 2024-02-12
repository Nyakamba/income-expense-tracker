const express = require("express");
require("./config/dbConnect");
require("dotenv").config();
const usersRoute = require("./routes/users/usersRoute");
const accountsRoute = require("./routes/accounts/accountsRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");

const app = express();

//middlewares

//-----------
//routes
//-----------

//users route
app.use("/api/v1/users", usersRoute);

//account route
app.use("/api/v1/accounts", accountsRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//error handlers

//listen to server

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Serve is up and running on port ${PORT}`);
});
