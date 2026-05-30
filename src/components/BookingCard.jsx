
import { Button } from '@heroui/react';
import React from 'react';
import { FaBolt } from 'react-icons/fa6';

const BookingCard = ({ hourly_rate, room_name }) => {
    return (
        <div className="sticky top-24 bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl shadow-indigo-100/60 p-6 flex flex-col gap-5">
            {/* Price */}
            <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-indigo-600">${hourly_rate}</span>
                <span className="text-slate-400 text-sm mb-1 font-medium">/ hour</span>
            </div>

            <hr className="border-slate-100" />


            <button
                id="book-now-btn"
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.97] text-white font-bold py-3.5 rounded-2xl transition-all duration-300 shadow-md hover:shadow-indigo-300/50 hover:shadow-lg flex items-center justify-center gap-2"
            >
                <FaBolt className="w-4 h-4" />
                Book Now
            </button>

            <button
                id="save-room-btn"
                className="w-full border border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 rounded-2xl transition-all duration-200 text-sm"
            >
                Save Room
            </button>

            <p className="text-center text-[11px] text-slate-400">
                No payment charged until confirmed
            </p>
        </div>
    );
};

export default BookingCard;