import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="items-center flex relative ml-186 mb-16">
        <div className="text-xl font-funnel text-gray-500 mt-16 cursor-pointer">
          crew 0.0
        </div>
        
        {/* ChevronDown Button */}
        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-gray-200 rounded-full transition-all duration-300 ease-out ml-2 mt-16 cursor-pointer"
          aria-label="Toggle menu"
        >
          <ChevronDown 
            className={`
              w-4 h-4 text-gray-500 transition-transform duration-500 ease-out
              ${isOpen ? 'rotate-180' : 'rotate-0'}
            `} 
          />
        </button>
      </div>

      {/* Full-Screen Sidebar sliding from bottom */}
      <div 
        className={`
          fixed inset-0 bg-white z-40
          transform transition-transform duration-1000 ease-out
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{
          transition: 'transform 1000ms cubic-bezier(0.23, 1, 0.32, 1)'
        }}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 ease-out"
          >
            <ChevronDown className="w-5 h-5 text-gray-600 rotate-90 cursor-pointer" />
          </button>
        </div>

        {/* Sidebar Content with staggered animation */}
        <div className="p-8 max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Navigation Links */}
            <nav 
              className={`
                space-y-6 transition-all duration-700 ease-out delay-100
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <a href="#" className="block text-2xl text-gray-700 hover:text-gray-500 transition-colors font-funnel duration-300">
                Latest update
              </a>
              <a href="https://github.com/manassehnnad1/crew-0.0?tab=readme-ov-file" className="block text-2xl text-gray-700 hover:text-gray-500 font-funnel transition-colors duration-300">
                About
              </a>
              <a href="https://x.com/islathebuilder" className="block text-2xl text-gray-700 hover:text-gray-500 font-funnel transition-colors duration-300">
                X
              </a>
              <footer className=" py-80 ">
        <div className="max-w-4xl mx-auto text-start">
          <p className="text-gray-600 font-funnel">
            &copy; {new Date().getFullYear()} Crew. All rights reserved.
          </p>
        </div>
      </footer>
            </nav>
          </div>
          
        </div>
        
      </div>
      
    </>
  );
};

export default NavBar;