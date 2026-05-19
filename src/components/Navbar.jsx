"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
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
              <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                StudyNook
              </span>
            </Link>
          </div>


          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 rounded-full -mb-1"></span>
            </Link>

            <Link
              href="/all-rooms"
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
            >
              Rooms
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 rounded-full -mb-1"></span>
            </Link>

            <Link
              href="/add-room"
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
            >
              Add Room
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 rounded-full -mb-1"></span>
            </Link>

            <Link
              href="/my-listings"
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
            >
              My Listings
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 rounded-full -mb-1"></span>
            </Link>

            <Link
              href="/my-bookings"
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
            >
              My Bookings
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 rounded-full -mb-1"></span>
            </Link>
          </div>


          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
            >
              <Button variant="outline" className={"border hover:border-indigo-700 hover:text-indigo-700"}>Login</Button>
            </Link>
            <Link
              href="/register">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-sm shadow-indigo-200 transition-all hover:shadow-md">Register</Button>
            </Link>
          </div>


          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>


      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 border-t border-gray-200 opacity-100" : "max-h-0 opacity-0"
          } bg-white shadow-lg absolute w-full`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/rooms"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Rooms
          </Link>

        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="px-4 flex flex-col space-y-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;