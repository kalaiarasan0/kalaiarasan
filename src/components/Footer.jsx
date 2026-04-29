import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-2">Kalaiarasan</h2>
          <p className="text-sm text-gray-500">Backend Developer | System Design Enthusiast</p>
        </div>
        
        <div className="text-sm text-gray-500 mb-6 md:mb-0">
          &copy; {new Date().getFullYear()} Kalaiarasan. All rights reserved.
        </div>

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-xl transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </Link>
      </div>
    </footer>
  );
}
