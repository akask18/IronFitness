import React, { useState } from 'react';
import { Navlink } from '../../constant/NavLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">IronFit</p>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {Navlink.map((items) => (
              <div
                key={items.id}
                className="cursor-pointer hover:text-gray-300 transition duration-300"
              >
                {items.name}
              </div>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-3xl focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>

        </div>
        
        {isOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-600 pt-4">
            <div className="flex flex-col gap-4">
              {Navlink.map((items) => (
                <div
                  key={items.id}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300"
                >
                  {items.name}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}