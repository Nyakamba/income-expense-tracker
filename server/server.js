const express = require("express");

const app = express();

//middlewares

//routes

//error handlers

//listen to server

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Serve is up and running on port ${PORT}`);
});
