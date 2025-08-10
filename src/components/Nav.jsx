import React from "react";
import { Link } from "react-router-dom";

const Nav= () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 px-6 py-4">
      <div className="text-white text-2xl font-bold">
        <Link to="/">MakeupShop</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-pink-400">Landing</Link>
        </li>
        <li>
          <Link to="/Home" className="text-white hover:text-pink-400">Home</Link>
        </li>
        <li>
          <Link to="/products" className="text-white hover:text-pink-400">Products</Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:text-pink-400">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-pink-400">Contact</Link>
        </li>
        <li>
          <Link to="/blog" className="text-white hover:text-pink-400">Blog</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-pink-400">About Us</Link>
        </li>
        <li>
          <Link to="/signin" className="text-white hover:text-pink-400">Sign In</Link>
        </li>
        <li>
          <Link to="/signup" className="text-white hover:text-pink-400">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
