import React, { useState, useRef, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import styleBite from '../assets/logoi[1].png';



const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-green-100 shadow-md sticky top-0 z-50">
      <div onClick={()=>navigate('/')} className="flex items-center" style={{cursor:'pointer'}}>
        <img
          src={styleBite}
          alt="Interior Design Logo"
          className="w-12 h-12 mr-3"
        />
        <h1 className="text-4xl font-extrabold text-green-800 font-head">
          Style <span className="text-yellow-600">Bi+ytes</span>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
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
      </nav>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden flex items-center text-green-700 hover:text-yellow-600 transition duration-300"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        ref={dropdownRef}
        className={`absolute top-16 right-6 bg-green-100 rounded-lg shadow-lg md:hidden transform transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
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
    </header>
  );
};

export default Header;
