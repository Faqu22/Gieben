import React from 'react'
import Badge from './Badge'
import { Link } from 'react-router-dom'

function Card({ image, label, path }) {
    return (
        <Link
            to={path}
            className="w-56 h-96 m-8 border bg-white hover:bg-gray-100 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-transform"
        >
            {/* Contenedor de imagen */}
            <div className="flex justify-center items-center h-2/3 rounded-t-lg overflow-hidden">
                <img src={image} alt="Product" className="max-w-full h-auto" />
            </div>

            {/* Contenedor del ícono */}
            <div className="flex justify-center items-center h-1/3 bg-gray-200 rounded-b-lg">
                <Badge label={label} />
            </div>
        </Link>
    )
}

export default Card
