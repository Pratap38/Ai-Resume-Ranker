import React from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className='m-auto p-[3rem] relative flex items-center space-x-8 bg-white shadow-2xs rounded-b-4xl'>
          <ul className='mx-auto px-20 py-6 flex items-center justify-center space-x-[300px] bg-white shadow-2xl rounded-2xl'>
            
            <li className="relative flex items-center space-x-2 group">
              <FontAwesomeIcon icon={faHouse} /> 
              <Link to="/" className="hover:text-black transition-colors duration-200 font-bold text-[20px] font-sans">
                Home
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-200 group-hover:w-full"></div>
            </li>

            <li className="relative flex items-center space-x-2 group">
              <FontAwesomeIcon icon={faStar} />
              <Link to="/ranker" className="font-bold text-[20px] font-sans">
                Ranker
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-200 group-hover:w-full"></div>
            </li>

            <li className="relative flex items-center space-x-2 group">
              <Link to="/" className="font-bold text-[20px] font-sans">
                <FontAwesomeIcon icon={faPlus} /> More
              </Link>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-200 group-hover:w-full"></div>
            </li>

          </ul>

          {/* Centered decorative image below nav items */}
          <div className="flex justify-center mt-4">
            <img 
              src="/images/border2.png" 
              alt="decorative border" 
              className="w-26 h-16"
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
