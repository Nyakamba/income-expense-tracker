import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import AddTransaction from "./components/Forms/AddTransaction";
import AccountDashboard from "./components/Dashboard/AccountDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/dashboard" element={<AccountDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
