import React from 'react';

function BoxesSection() {
    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            {/* New Task */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-blue-800">0</h2>
                <p className="text-sm md:text-xl md:font-bold text-blue-600">New Tasks</p>
            </div>
            {/* Completed */}
            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-green-800">3</h2>
                <p className="text-sm md:text-xl md:font-bold text-green-600">Completed</p>
            </div>
            {/* Accepted */}
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-yellow-800">0</h2>
                <p className="text-sm md:text-xl md:font-bold text-yellow-600">Accepted</p>
            </div>
            {/* Failed */}
            <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-red-800">1</h2>
                <p className="text-sm md:text-xl md:font-bold text-red-600">Failed</p>
            </div>
        </div>
    );
}

export default BoxesSection;
