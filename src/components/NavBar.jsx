import { useState } from "react";
import { navLinks } from "../data";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { logo } from "../assets/icons";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <header
      className="w-full lg:px-16"
      style={{ position: "fixed", width: "100%", backgroundColor: "#000000", height:"70px", zIndex:1000 }}
    >
      <nav className="flex justify-between max-container px-4 md:px-6 items-center">
        <Link to="/" className="text-[30px]" onClick={handleMenuToggle}>
          <img src={logo} style={{ height: "50%", width: "70px" }} alt="logo" />
        </Link>

        {/* Desktop menu */}
        <ul className="flex flex-1 gap-16 justify-center text-white max-xl:hidden">
          {navLinks.map(({name, path}, index) => (
            <li key={index}>
              <NavLink to={path} className="text-sm uppercase">
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login/Register buttons for desktop */}
        <div className="flex gap-10 max-xl:hidden text-sm">
          <Link
            to='/contact'
            className="flex items-center py-3 px-12 text-white border-2  border-[#ffff] rounded-lg uppercase hover:bg-[#003366] hover:text-white"
          >
            Contact <FaPhoneAlt className="mx-2"/>
          </Link>
          {/* <Link
            href="#"
            className="flex items-center py-3 px-12 bg-[#003366] rounded-lg text-white uppercase hover:text-[#008080] hover:bg-transparent hover:border-[#FF6600] border-2"
          >
            register
          </Link> */}
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="max-xl:block xl:hidden px-2" onClick={handleMenuToggle}>
          {menuOpen ? (
            <IoMdClose className="text-[30px] text-[#adb2b8] cursor-pointer" />
          ) : (
            <GiHamburgerMenu
              className="text-[30px] text-[#adb2b8] cursor-pointer"
              // Handle click to toggle the dropdown menu
            />
          )}
        </div>

        {/* Dropdown menu for mobile */}
        {menuOpen && (
          <div className="absolute top-full lg:hidden left-0  w-full bg-white shadow-lg z-10 max-xl:flex flex-col items-start px-5 ">
            <ul className="w-full ">
              {navLinks.map(({name,path}, index) => (
                <li key={index} className="w-full py-2">
                  <NavLink
                    to={path}
                    className="block w-full p-2 text-sm uppercase hover:bg-gray-200"
                    onClick={handleMenuToggle}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 w-full">
              <Link
                to='/contact'
                className="w-full flex items-center py-3 px-4 mb-6 text-blue border-2 border-[#003366] rounded-lg uppercase hover:bg-[#003366] hover:text-white text-center"
              >
                CONTACT
              </Link>
              {/* <Link
                href="#"
                className="w-full flex items-center py-3 mb-2 px-4 bg-[#003366]  hover:text-green-500 rounded-lg text-white uppercase text-center"
              >
                register
              </Link> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
