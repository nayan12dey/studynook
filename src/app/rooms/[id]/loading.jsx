import { Spinner } from '@heroui/react';
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-[50vh] w-full">
                <Spinner size="lg" className='text-indigo-700' label="Loading..." />
            </div>
        </div>
    );
};

export default LoadingSpinner;