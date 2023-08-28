import React, { useState } from 'react'
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr'

function Slider({ images }) {
    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }

    return (
        <div className="relative overflow-hidden h-screen w-auto">
            {images.map((img, index) => (
                <div
                    className={`absolute w-full flex justify-center h-3/4 transition-opacity duration-300 ${
                        index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    key={index}
                >
                    <img src={img} alt={`Slide ${index}`} className="w-auto object-cover" />
                </div>
            ))}
            <button
                className="absolute top-1/2 left-12 pr-4 transform -translate-y-20 bg-gray-300 bg-opacity-30 p-2 rounded-bl-full rounded-tl-full"
                onClick={prevSlide}
            >
                <GrCaretPrevious />
            </button>
            <button
                className="absolute top-1/2 pl-4 right-12 transform -translate-y-20 bg-gray-300 bg-opacity-30 p-2 rounded-br-full rounded-tr-full "
                onClick={nextSlide}
            >
                <GrCaretNext />
            </button>
        </div>
    )
}

export default Slider
