// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Pages/SignIn/SignIn";
import Footer from "./Components/Footer/Footer";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import Register from "./Pages/Register/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/Dashboard/ProtectedRoute";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
