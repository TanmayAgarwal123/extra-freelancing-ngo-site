
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif font-bold text-lakshya-blue">Lakshya</span>
              <span className="ml-1 text-2xl font-serif font-bold text-lakshya-orange">NGO</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 hover:text-lakshya-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-lakshya-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-lakshya-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-lakshya-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link to="/donate">
              <Button className="bg-lakshya-orange hover:bg-orange-600 text-white transition-colors">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-lakshya-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lakshya-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lakshya-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lakshya-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lakshya-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/donate" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-lakshya-orange text-white hover:bg-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
