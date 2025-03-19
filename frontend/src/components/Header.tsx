import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { GrUserSettings } from "react-icons/gr";
import { IoExitOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#" className="hover:text-gray-300 transition">
              Logo
            </a>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300 transition">Home</a>
            <a href="#" className="hover:text-gray-300 transition">Portfolio</a>
            <a href="#" className="hover:text-gray-300 transition">Mutual Funds</a>
            <a href="#" className="hover:text-gray-300 transition">Tools</a>
            <a href="#" className="hover:text-gray-300 transition">Transactions</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <CiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" aria-label="Search" />
            <FaRegBell className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" aria-label="Notifications" />
            <GrUserSettings className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" aria-label="Settings" />
            <IoExitOutline className="w-6 h-6 cursor-pointer hover:text-red-500 transition" aria-label="Logout" />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <a href="#" className="hover:text-gray-300 transition">Home</a>
            <a href="#" className="hover:text-gray-300 transition">Portfolio</a>
            <a href="#" className="hover:text-gray-300 transition">Mutual Funds</a>
            <a href="#" className="hover:text-gray-300 transition">Tools</a>
            <a href="#" className="hover:text-gray-300 transition">Transactions</a>
            
            <div className="flex space-x-4">
              <CiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
              <FaRegBell className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
              <GrUserSettings className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" />
              <IoExitOutline className="w-6 h-6 cursor-pointer hover:text-red-500 transition" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
