import React from 'react'
import logoImage from '../assets/logo.png'
import Icon from './Icon'

const navItems = [
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Inicio', path: '/' },
    { icon: logoImage, path: '/' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Contacto', path: '/contacto' },
]
function Header() {
    return (
        <div className="header flex bg-beige justify-center ">
            <nav className="flex space-x-44 text-lg items-center">
                {navItems.map((item, index) => (
                    <Icon key={index} {...item} />
                ))}
            </nav>
        </div>
    )
}

export default Header
