import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 absolute w-full text-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold font-poppins">
          MyWebsite
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <li><a href="/" className="hover:text-indigo-500 transition-colors duration-200">Home</a></li>
          <li><a href="/about" className="hover:text-indigo-500 transition-colors duration-200">About</a></li>
          <li><a href="/services" className="hover:text-indigo-500 transition-colors duration-200">Services</a></li>
          <li><a href="/contact" className="hover:text-indigo-500 transition-colors duration-200">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-indigo-500 transition-colors duration-200"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="hover:text-indigo-500 transition-colors duration-200"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="hover:text-indigo-500 transition-colors duration-200"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="hover:text-indigo-500 transition-colors duration-200"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
