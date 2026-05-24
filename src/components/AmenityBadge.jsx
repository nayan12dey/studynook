
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const AmenityBadge = ({ label }) => {
    return (
        <div>
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
                <FaCircleCheck className="w-3 h-3 text-indigo-400" />
                {label}
            </span>
        </div>
    );
};

export default AmenityBadge;