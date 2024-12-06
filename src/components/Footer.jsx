import React from "react";
import styleBite from "../assets/logo2.png";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={styleBite}
            alt="Interior Design Logo"
            className="w-12 h-12"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">About Us</h5>
            <p className="text-sm leading-relaxed">
              We specialize in providing high-quality services to help you
              achieve your goals. Stay connected with us for updates and new
              projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
            <li>
            <Link
              to='/about'
              className="text-green-700 hover:text-yellow-600 transition duration-300 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
             to='/projects'
              className="text-green-700 hover:text-yellow-600 transition duration-300 font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
             to='/services'
              className="text-green-700 hover:text-yellow-600 transition duration-300 font-medium"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className="text-green-700 hover:text-yellow-600 transition duration-300 font-medium"
            >
              Contact
            </Link>
          </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              {/* Pinterest */}
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition"
              >
                <i className="fab fa-pinterest-p text-white"></i>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition"
              >
                <i className="fab fa-youtube text-white"></i>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 hover:opacity-90 transition"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition"
              >
                <i className="fab fa-whatsapp text-white"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
