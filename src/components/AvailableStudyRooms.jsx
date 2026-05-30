
import { fetchavailableRooms } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong, FaBuilding, FaUsers } from 'react-icons/fa6';

const AvailableStudyRooms = async () => {

    const rooms = await fetchavailableRooms()



    return (
        <div className="py-24 bg-slate-50 min-w-[1024px]">
            <div className="w-[1200px] mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Study Rooms</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our top-rated spaces designed to help you focus, collaborate, and succeed.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        rooms.map(room => <div key={room._id}>
                            <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">

                                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                                    <Image
                                        src={room.room_image}
                                        alt={room.room_name}
                                        width={300}
                                        height={500}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />


                                    <div className="absolute top-3 left-3 bg-slate-900/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-white/10">
                                        <FaBuilding className="w-3 h-3 text-indigo-300" />
                                        <span>Floor {room?.floor}</span>
                                    </div>


                                    <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                        ${room.hourly_rate}/hr
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Room Name */}
                                        <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors duration-250">
                                            {room.room_name}
                                        </h3>

                                        {/* Seat Capacity Badge & Specs */}
                                        <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mt-2">
                                            <span className="flex items-center gap-1 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                                                <FaUsers className="w-3.5 h-3.5 text-indigo-500" />
                                                <span>{room.seat_capacity} people</span>
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="mt-3.5 text-xs text-slate-600 leading-relaxed min-h-[36px] line-clamp-2">
                                            {room.description}
                                        </p>

                                        {/* Amenities Chips */}
                                        <div className="flex flex-wrap gap-1.5 mt-4 min-h-[24px]">
                                            {room.amenities.map((amenity, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-indigo-50/60 border border-indigo-100 text-indigo-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-md tracking-wide"
                                                >
                                                    {amenity}
                                                </span>
                                            ))}
                                            {room.amenities > 0 && (
                                                <span className="bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                                                    +{room.amenities} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Footer actions */}
                                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Hourly Rate</span>
                                            <span className="text-base font-extrabold text-indigo-600">${room.hourly_rate}/hr</span>
                                        </div>

                                        <Link
                                            href={`/rooms/${room._id}`}
                                            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group/btn"
                                        >
                                            <span>View Details</span>
                                            <FaArrowRightLong className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableStudyRooms;