import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AuthContextProvider from "./components/context/AuthContext/AuthContext";
import AccountContextProvider from "./components/context/AccountContext/AccountContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <AccountContextProvider>
      <App />
    </AccountContextProvider>
  </AuthContextProvider>
);
