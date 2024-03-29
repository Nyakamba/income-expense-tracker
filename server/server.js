require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/dbConnect");
const usersRoute = require("./routes/users/usersRoute");
const accountsRoute = require("./routes/accounts/accountsRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");

const app = express();

//middlewares
app.use(express.json()); //pass incoming data

//cors
app.use(cors());
//-----------
//routes
//-----------

//users route
app.use("/api/v1/users", usersRoute);

//account route
app.use("/api/v1/accounts", accountsRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers
app.use(globalErrHandler);

//listen to server

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Serve is up and running on port ${PORT}`);
});
