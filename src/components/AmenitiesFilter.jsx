'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const AmenitiesFilter = () => {

    


    const router = useRouter();
    const searchParams = useSearchParams();

    const [amenities, setAmenities] = useState(
        searchParams.get('amenities') || ''
    );




    const handleChange = (e) => {

        const value = e.target.value;

        setAmenities(value);

        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set('amenities', value);
        } else {
            params.delete('amenities');
        }

        router.push(`/rooms?${params.toString()}`);

    };



    return (
        <div className="relative w-full group">
            <select
                onChange={handleChange}
                defaultValue={searchParams.get('amenities') || ''}
                className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-indigo-400 hover:shadow-md cursor-pointer font-medium outline-none"
            >
                <option value="">All Amenities</option>
                <option value="Whiteboard">Whiteboard</option>
                <option value="Projector">Projector</option>
                <option value="WiFi">WiFi</option>
                <option value="Power Outlets">Power Outlets</option>
                <option value="Quiet Zone">Quiet Zone</option>
                <option value="AC">AC</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 group-hover:text-indigo-500 transition-colors duration-300">
                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </div>
        </div>
    );
};

export default AmenitiesFilter;