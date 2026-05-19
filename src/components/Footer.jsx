"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";


const Footer = () => {

  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500 p-1.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                StudyNook
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your quiet place for focused learning. Find, book, and enjoy the perfect study room.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">
              Useful Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group w-max"
                >
                  <span className="h-px w-2 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-rooms"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group w-max"
                >
                  <span className="h-px w-2 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group w-max"
                >
                  <span className="h-px w-2 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>studynook@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 6291838357</span>
              </li>
            </ul>
          </div>
        </div>


        <div className="h-px w-full bg-gray-800 my-8"></div>

        {/* Bottom Section: Copyright & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} StudyNook. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-indigo-600">
              <FaFacebook></FaFacebook>
            </a>

            <a href="#" aria-label="X" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaXTwitter />

            </a>


            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-blue-600">


              <FaLinkedin></FaLinkedin>
            </a>


            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-pink-600">
              <FaInstagram />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;