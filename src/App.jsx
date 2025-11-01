import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Bookings from "./pages/Bookings";
import CarDetails from "./pages/CarDetails";
import AvailableCars from "./components/AvailableCars";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useTheme } from "./components/ThemeProvider";

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/available" element={<AvailableCars />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
