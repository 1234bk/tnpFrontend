import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/tnp/logo1.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdown, setIsdropdown] = useState(false)
const dropdownRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsdropdown(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <div className="fixed top-0 left-0 w-full z-[80] p-4 px-6 md:px-20 backdrop-blur-3xl bg-white/60 shadow-xl">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" > <div className="flex items-center ">
          <img src={logo1} alt="logo" className="h-14 hidden md:block w-auto rounded" />
        <h3 className="text-4xl font-bold text-[#9B1C1C] ">PCTE</h3>
        </div></Link>

        
         

        {/* Desktop Menu */}
        <div className="md:flex  hidden gap-10 text-[#9B1C1C]  text-xl ml-auto">
          <Link to="/allposts" className=" hover:text-red-700">Placement Drives</Link>
          
                {/* <Link to="/quiz" className=" hover:text-red-700">Prep Quiz</Link> */}
                <Link to="/guestlecture" className="block  hover:text-red-700">Guest Lecture</Link>
                {/* <Link to="/placement-scheduler" className="block  hover:text-red-700">Placement Scheduler</Link> */}
              <h1
  className="cursor-pointer"
  onClick={() => window.open('https://pcte.edu.in/about-us/', '_blank')}
>
  About
</h1>

          <Link className='hover:text-red-700' to="/contact">Contact</Link>


          {/* Other Services Dropdown */}
          <div className="relative block md:hidden" ref={dropdownRef}> 
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setIsdropdown(!isDropdown)}
            >
              <span className="hover:text-red-700">Other Services</span>
              <RiArrowDropDownLine size={26} />
            </div>

            {isDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-60 px-4 text-base font-normal">
                <Link to="/placement-drives" className="block py-1 hover:text-red-700">Placement Drives</Link>
                <Link to="/quiz" className="block py-1 hover:text-red-700">Prep Quiz</Link>
                <Link to="/guest-lecture" className="block py-1 hover:text-red-700">Guest Lecture</Link>
                <Link to="/placement-scheduler" className="block py-1 hover:text-red-700">Placement Scheduler</Link>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Icon */}
        <div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 text-lg  mt-3">
          <h1 
           className="cursor-pointer"
  onClick={() => window.open('https://pcte.edu.in/about-us/', '_blank')}
  >About</h1>
          <Link className='hover:text-red-700' to="/contact">Contact</Link>

          {/* Dropdown for Mobile */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setIsdropdown(!isDropdown)}
            >
              <span className='hover:text-red-700'>Other Services</span>
              <RiArrowDropDownLine size={22} />
            </div>

            {isDropdown && (
              <div className="mt-2 ml-4 text-base">
                <Link to="/placement-drives" className="block py-1 hover:text-red-700">Placement Drives</Link>
                <Link to="/prep-quiz" className="block py-1 hover:text-red-700">Prep Quiz</Link>
                <Link to="/guest-lecture" className="block py-1 hover:text-red-700">Guest Lecture</Link>
                <Link to="/placement-scheduler" className="block py-1 hover:text-red-700">Placement Scheduler</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar