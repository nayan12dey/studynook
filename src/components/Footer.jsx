"use client";

import Link from "next/link";

export default function Footer() {
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>

            <a href="#" aria-label="X (formerly Twitter)" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>


            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-blue-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>

            
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full hover:bg-pink-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
