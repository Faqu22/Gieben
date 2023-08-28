import React from 'react'
import Badge from './Badge'
import { Link } from 'react-router-dom'

function Card({ image, label, path }) {
    return (
        <Link
            to={path}
            className="w-56 h-96 m-8  rounded-lg transform hover:scale-105 transition-transform"
        >
            {/* Contenedor de imagen */}
            <div className="flex justify-center items-center h-70 w-70 rounded-t-lg overflow-hidden">
                <img src={image} alt="Product" className="max-w-full h-auto" />
            </div>

            {/* Contenedor del ícono */}
            <div className="flex justify-center items-center">
                <Badge label={label} />
            </div>
        </Link>
    )
}

export default Card
