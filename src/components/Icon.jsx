import React from 'react'
import { Link } from 'react-router-dom'

function Icon(props) {
    return (
        <Link
            to={props.path}
            className="flex h-fit items-center space-x-2 font-semibold hover:bg-opacity-40 rounded-3xl px-4 bg-e8e8e8 hover:bg-white transition duration-300 text-53433e"
        >
            {props.icon && <img src={props.icon} alt="Icon" className="h-36" />}
            {props.name && <span>{props.name}</span>}
        </Link>
    )
}

export default Icon
