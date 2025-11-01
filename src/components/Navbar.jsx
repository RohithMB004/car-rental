import React from "react";
import { Link } from "react-router-dom";
import { Search, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider"; // ✅ Import your theme hook

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // ✅ Get darkMode + toggle function

  return (
    <nav
      className={`py-3 px-10 flex justify-between items-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800 shadow-sm"
      }`}
    >
      {/* Logo */}
      <h1 className="text-3xl lg:text-4xl font-extrabold tracking-wide">
        <span className="text-[#00BFFF]">Drive</span>
        <span className={darkMode ? "text-white" : "text-[#001F3F]"}>Easy</span>
      </h1>

      {/* Links */}
      <ul className="flex items-center space-x-6 font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/bookings">My Bookings</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search cars"
            className={`border rounded-full pl-3 pr-8 py-1 text-sm outline-none transition-all ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                : "bg-white text-black border-gray-300"
            }`}
          />
          <Search
            size={16}
            className={`absolute right-2 top-2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          />
        </div>

        {/* Dark / Light Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-700" />
          )}
        </button>

        {/* Admin */}
        <Link
          to="/admin"
          className={`font-medium ${
            darkMode
              ? "text-gray-300 hover:text-green-400"
              : "text-gray-700 hover:text-green-600"
          }`}
        >
          Admin
        </Link>

        {/* Login */}
        <Link
          to="/login"
          className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-4 py-1 rounded-full font-medium transition-all"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

//completed
