import React from 'react'
import MiloSVG from './milosvg.jsx'
import '../assets/loader.css'

function Loader() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-beige  z-50">
            <MiloSVG />
        </div>
    )
}

export default Loader
