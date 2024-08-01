import React from 'react'
import style from './Navbaro.module.css'
import { NavLink } from 'react-router-dom'
import { useState ,useEffect} from 'react'

export default function Navbaro() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    const menu = document.getElementById('navbar-default');
    menu.classList.toggle('hidden'); // Toggle the 'hidden' class
  };
  
  
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <>
    <nav className={`bg_gray border-gray-200 dark:bg-gray-900  text-white fixed left-0 right-0 top-0 z-50 ${scrollY >100?'py-5':'py-8'} transition-all`}>
      <div className="max-w-[80%] mx-auto flex flex-wrap items-center justify-between">
        <a className="font-bold flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl md:text-2xl whitespace-nowrap dark:text-white">START FRAMEWORK</span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state on button click
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"} // Aria-expanded attribute based on state
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 ${
            isMenuOpen ? '' : 'hidden' // Toggle visibility based on state
          }`}
          id="navbar-default"
        >
          <ul className="font-semibold text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to=""
                className="block "
                aria-current="page"
              ></NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="block px-4 py-2  text-white rounded hover:bg-[#1abc9c]  dark:text-white xl:dark:hover:text-white dark:hover:bg-[#1abc9c] dark:hover:text-white xl:dark:hover:bg-[#1abc9c] transition-all"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="portfolio"
                className="block px-4 py-2  text-white rounded hover:bg-[#1abc9c]  dark:text-white xl:dark:hover:text-white dark:hover:bg-[#1abc9c] dark:hover:text-white xl:dark:hover:bg-[#1abc9c] transition-all"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="block px-4 py-2  text-white rounded  hover:bg-[#1abc9c]  dark:text-white xl:dark:hover:text-white dark:hover:bg-[#1abc9c] dark:hover:text-white xl:dark:hover:bg-[#1abc9c] transition-all"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}
