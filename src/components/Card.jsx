import React from 'react'
import Icon from './Icon'
import { Link } from 'react-router-dom'

function Card({ image, label, path }) {
    return (
        <Link
            to={path}
            className="w-56 h-96 m-8 border-black border border-opacity-30 flex flex-col items-center justify-between bg-[rgb(197,174,143)] rounded-lg hover:scale-105"
        >
            <div className="pt-4 w-full flex justify-center">
                <img src={image} alt="Product" className="rounded-t-lg mt-6" />
            </div>
            <div className="border-t-2 border-black w-full flex justify-center py-4">
                <Icon name={label} />
            </div>
        </Link>
    )
}
export default Card
