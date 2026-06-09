import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { FaArrowRightLong } from 'react-icons/fa6';


const Banner = () => {
    return (
        <div className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <div className="col-span-1 lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 mb-6 border border-indigo-200">
                            <span className="flex w-2 h-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
                            Now open for study rooms
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                            Find Your Perfect <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                                Study Room
                            </span>
                        </h1>

                        <p className="mt-4 text-lg sm:text-xl text-gray-600 mb-10 max-w-lg">
                            Browse and book quiet, private study rooms in your library. List your own room and earn while helping others focus.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                            <Link
                                href="/rooms"
                                className="w-full sm:w-auto"
                            >
                                <Button className={"w-full sm:w-auto p-6 lg:p-10 rounded-full text-base lg:text-lg bg-indigo-600 hover:bg-indigo-700 transition-all duration-400 hover:scale-104"}>
                                    Explore Rooms <FaArrowRightLong className="w-5 h-5 ml-2" /></Button>
                            </Link>

                            <Link
                                href="/my-listings"
                                className="w-full sm:w-auto"
                            >
                                <Button variant='outline' className="w-full sm:w-auto bg-indigo-50 hover:bg-indigo-100 text-indigo-500 p-6 lg:p-10 rounded-full text-base lg:text-lg">List Your Room</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-span-1 lg:col-span-6 relative mt-8 lg:mt-0">

                        <div className="relative z-10 mx-auto w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white">
                            <Image
                                src="/studynook.jpg"
                                alt="banner image"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;