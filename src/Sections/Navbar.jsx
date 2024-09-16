import React from "react";
import { useState } from "react";
import { FaBars} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { navLinks } from "../constants";


const NavItems = () => {
    return(
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id}>
                    <a href={href} className="nav-li_a" onClick={() => {}}>{name}</a>
                </li>
            ))}
        </ul>
    )
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-black font-bold text-xl hover:text-black transition-colors"
          >
            Portfolio
          </a>

          <button onClick={toggleMenu}>
            {isOpen? <FaX className="w-6 h-6 sm:hidden"/> : <FaBars className="w-6 h-6 sm:hidden" />}
          </button>

        <nav className="sm:flex hidden">
            <NavItems />
        </nav>

        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' :'max-h-0'}`}>
        <nav className="p-5">
            <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
