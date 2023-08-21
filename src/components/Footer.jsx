import React from 'react'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import Logo from '../assets/LogoOp.png'

function Footer() {
    return (
        <div className="flex flex-row justify-start items-center bg-black text-white py-6 pb-10 space-x-48">
            <a className="flex flex-row" href="https://github.com/Faqu22">
                <div className=" flex flex-col ml-4 mr-8">
                    <h1 className="mb-4 mt-4 text-5xl"> EXPLORAR</h1>
                    <ul>
                        <li className="mb-3">INICIO</li>
                        <li className="mb-3">TIENDA</li>
                        <li>CONTACTO</li>
                    </ul>
                </div>
                <div className=" flex flex-col ml-4 ">
                    <h1 className="mb-4 mt-4 text-5xl"> HABLENOS</h1>
                    <ul>
                        <li className="flex items-center mb-3">
                            <AiFillPhone className="w-8 h-auto mr-3 text-white" />
                            +598 283 2 32 82
                        </li>
                        <li className="flex items-center mb-3">
                            <AiOutlineMail className="w-8 h-auto mr-3 text-white" />
                            GiebenOficial@gmail.com
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={Logo} alt="Logo" className="w-64 ml-96 relative" />
                </div>
            </a>
        </div>
    )
}

export default Footer
