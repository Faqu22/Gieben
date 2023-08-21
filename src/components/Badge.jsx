import React from 'react'

function Badge({ label }) {
    return (
        <div className="w-56 h-32 bg-gray-300 hover:bg-gray-400  rounded-lg flex items-center justify-center transition-colors duration-300">
            <p className="text-gray-700 font-semibold text-xl">{label}</p>
        </div>
    )
}

export default Badge
