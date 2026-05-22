"use client";

import React from 'react';
import Link from 'next/link';
import { FaBuilding, FaUsers, FaArrowRightLong } from 'react-icons/fa6';

const RoomCard = ({ room }) => {
  if (!room) return null;

  // Truncate description to ~100 characters with ellipsis
  const truncatedDesc = room.description && room.description.length > 100
    ? `${room.description.slice(0, 100)}...`
    : room.description || "No description available for this study room.";

  // Limits the amenities to max 3 chips and counts the rest
  const maxAmenities = 3;
  const displayedAmenities = room.amenities?.slice(0, maxAmenities) || [];
  const extraAmenitiesCount = Math.max(0, (room.amenities?.length || 0) - maxAmenities);

  // Fallback image for empty or broken urls
  const fallbackImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      
      {/* Room Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={room.room_image || fallbackImage} 
          alt={room.room_name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = fallbackImage;
          }}
        />
        
        {/* Floor badge overlay on top-left */}
        <div className="absolute top-3 left-3 bg-slate-900/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-white/10">
          <FaBuilding className="w-3 h-3 text-indigo-300" />
          <span>{room.floor || "N/A"}</span>
        </div>

        {/* Hourly rate overlay on top-right */}
        <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          {room.hourly_rate}
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
              <span>{room.seat_capacity || "N/A"}</span>
            </span>
          </div>

          {/* Truncated Description */}
          <p className="mt-3.5 text-xs text-slate-600 leading-relaxed min-h-[36px] line-clamp-2">
            {truncatedDesc}
          </p>

          {/* Amenities Chips */}
          <div className="flex flex-wrap gap-1.5 mt-4 min-h-[24px]">
            {displayedAmenities.map((amenity, idx) => (
              <span 
                key={idx} 
                className="bg-indigo-50/60 border border-indigo-100 text-indigo-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-md tracking-wide"
              >
                {amenity}
              </span>
            ))}
            {extraAmenitiesCount > 0 && (
              <span className="bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                +{extraAmenitiesCount} more
              </span>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Hourly Rate</span>
            <span className="text-base font-extrabold text-indigo-600">{room.hourly_rate}</span>
          </div>
          
          <Link 
            href={`/rooms/${room._id || room.id || ''}`}
            className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group/btn"
          >
            <span>View Details</span>
            <FaArrowRightLong className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;