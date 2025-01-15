import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-400">
    Jaykishor Kushwaha
  </h1>
  <nav>
    <ul className="flex gap-6 text-lg text-gray-300">
      <li>
        <Link to="/" className="hover:text-yellow-400 transition duration-200">Home</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-yellow-400 transition duration-200">About</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-yellow-400 transition duration-200">Contact</Link>
      </li>
    </ul>
  </nav>
</header>

  
  
  );
};

export default Header;
