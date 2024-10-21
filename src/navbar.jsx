import React from 'react'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);  
  return (
    <>
      <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-[10%]">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">
              TopOne
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-800">Beranda</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Product</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            </div>

            <div className="md:hidden">
              <button id="menu-btn" onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
              </button>
            </div>
          </div>

          <div id="mobile-menu" className = {`${isOpen ? 'block' : 'hidden'} py-5 md:hidden`}>
            <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Beranda</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Product</a>
            <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">About</a>
          </div>
        </div>
      </nav>
    </>
  );
}
