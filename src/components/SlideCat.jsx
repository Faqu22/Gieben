import React from 'react'

function SlideCat({ image, label }) {
    return (
        <div className="items-center h-72 justify-center w-72 mx-2 relative group overflow-hidden">
            <img src={image} alt={label} className="w-full z-0 min-h-full" />
            <div className="subtitle absolute inset-x-0 bottom-0 bg-gray-400 flex items-center justify-center bg-opacity-50 h-0 group-hover:h-12 transition-height duration-300">
                <p className="text-base not-italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Vista Previa
                </p>
            </div>
        </div>
    )
}

export default SlideCat
