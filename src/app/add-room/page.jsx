'use client';

import React, { useState } from 'react';
import { FiHome, FiImage, FiDollarSign, FiUsers, FiLayers, FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';

const AMENITIES_OPTIONS = [
    'Whiteboard',
    'Projector',
    'Wi-Fi',
    'Power Outlets',
    'Quiet Zone',
    'Air Conditioning'
];

const AddRoomPage = () => {

    const [amenities, setAmenities] = useState([]);

    const toggleAmenity = (amenity) => {
        setAmenities(prev =>
            prev.includes(amenity)
                ? prev.filter(a => a !== amenity)
                : [...prev, amenity]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const room = {
            ... Object.fromEntries(formData.entries()),
            amenities
        }

        
        console.log("Form submitted:", room);
        toast.success('Room added successfully!');
        e.currentTarget.reset();
        setAmenities([]);

        
    };

    return (
        <div className="min-h-[calc(100vh-5rem)] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="max-w-3xl w-full bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all">
                <div className="px-6 py-10 sm:px-12 sm:py-14">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mb-3">Add a New Room</h1>
                        <p className="text-lg text-slate-500">List a new study space with its features and pricing.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Info */}
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="roomName" className="block text-sm font-semibold text-slate-700">Room Name <span className="text-rose-500">*</span></label>
                                <div className="mt-2 relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiHome className="text-slate-400 w-5 h-5" />
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        name="roomName"
                                        id="roomName"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                        placeholder="e.g., The Quiet Nook"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-semibold text-slate-700">Description <span className="text-rose-500">*</span></label>
                                <div className="mt-2">
                                    <textarea
                                        required
                                        name="description"
                                        id="description"
                                        rows={4}
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50 resize-y"
                                        placeholder="Describe the room, its vibe, and any special rules..."
                                    ></textarea>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="image" className="block text-sm font-semibold text-slate-700">Image URL</label>
                                <div className="mt-2 relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiImage className="text-slate-400 w-5 h-5" />
                                    </div>
                                    <input
                                        type="url"
                                        name="image"
                                        id="image"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                            <div>
                                <label htmlFor="floor" className="block text-sm font-semibold text-slate-700">Floor</label>
                                <div className="mt-2 relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiLayers className="text-slate-400 w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        name="floor"
                                        id="floor"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                        placeholder="e.g., 3rd Floor"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="capacity" className="block text-sm font-semibold text-slate-700">Capacity</label>
                                <div className="mt-2 relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiUsers className="text-slate-400 w-5 h-5" />
                                    </div>
                                    <input
                                        type="number"
                                        min="1"
                                        name="capacity"
                                        id="capacity"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                        placeholder="e.g., 4"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="hourlyRate" className="block text-sm font-semibold text-slate-700">Hourly Rate ($)</label>
                                <div className="mt-2 relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <FiDollarSign className="text-slate-400 w-5 h-5" />
                                    </div>
                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        name="hourlyRate"
                                        id="hourlyRate"
                                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:bg-slate-100/50"
                                        placeholder="e.g., 5.00"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="pt-6 border-t border-slate-100">
                            <label className="block text-sm font-semibold text-slate-700 mb-4">Amenities</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {AMENITIES_OPTIONS.map((amenity) => {
                                    const isSelected = amenities.includes(amenity);
                                    return (
                                        <div
                                            key={amenity}
                                            onClick={() => toggleAmenity(amenity)}
                                            className={`relative flex items-center p-4 cursor-pointer rounded-xl border-2 transition-all duration-200 select-none ${isSelected
                                                ? 'border-indigo-600 bg-indigo-50 shadow-sm'
                                                : 'border-slate-100 bg-white hover:border-indigo-200 hover:bg-slate-50'
                                                }`}
                                        >
                                            <div className={`flex items-center justify-center w-6 h-6 rounded-md mr-3 transition-colors shrink-0 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-transparent'
                                                }`}>
                                                <FiCheck className="w-4 h-4" />
                                            </div>
                                            <span className={`text-sm font-medium ${isSelected ? 'text-indigo-900' : 'text-slate-600'}`}>
                                                {amenity}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="pt-8">
                            <button
                                type="submit"

                                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-md text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                            >
                                Create Room
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoomPage;