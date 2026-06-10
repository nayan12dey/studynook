"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiLogOut, BiUser } from "react-icons/bi";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()
  const { data: session } = useSession()
  const user = session?.user;
  console.log(user, session)

  const handleLogOut = async () => {
    await signOut()
    router.push("/login")
  }

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


          {
            user ?
              <>
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
                  >
                    Home
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 rounded-full -mb-1"></span>
                  </Link>

                  <Link
                    href="/rooms"
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


                <div className="relative group hidden md:block">
                  <button className="flex items-center gap-3 p-1 px-5 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border">
                    {session?.user?.image ? (
                      <Image
                        width={40}
                        height={40}
                        src={session?.user?.image}
                        alt="avatar"
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center ring-2 ring-blue-600/10">
                        <span className="text-white text-sm font-bold">
                          {session?.user?.name?.charAt(0)?.toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="text-left hidden lg:block">
                      <p className="text-sm font-bold truncate max-w-25">{session?.user?.name}</p>
                    </div>
                  </button>
                  <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="font-bold text-sm">Welcome back!</p>
                      <p className="text-xs truncate text-slate-500">{session?.user?.email}</p>
                    </div>
                    <Link href="/my-listings" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                      <LuLayoutDashboard className="w-4 h-4" /> My Listings
                    </Link>
                    <Link href="/my-bookings" className="px-4 py-2 text-sm hover:bg-muted flex items-center gap-3 transition-colors">
                      <BiUser className="w-4 h-4" /> My Bookings
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left">
                      <BiLogOut className="w-4 h-4" /> Log Out
                    </button>
                  </div>
                </div>

              </>
              : <>
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
                  >
                    Home
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 rounded-full -mb-1"></span>
                  </Link>

                  <Link
                    href="/rooms"
                    className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors relative group"
                  >
                    Rooms
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
              </>
          }


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>


        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 py-4 space-y-3 pb-6">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/rooms"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Rooms
            </Link>

            {user ? (
              <>
                <Link
                  href="/add-room"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Add Room
                </Link>

                <Link
                  href="/my-listings"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  My Listings
                </Link>

                <Link
                  href="/my-bookings"
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  My Bookings
                </Link>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogOut();
                  }}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  Log Out
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3 px-4 pt-2">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border hover:border-indigo-700 hover:text-indigo-700"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;