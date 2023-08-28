import React from 'react'
import logoImage from '../assets/brand/logo.png'
import Icon from './Icon'

const navItems = [
    { name: 'Nosotros', path: '/us' },
    { name: 'Inicio', path: '/' },
    { icon: logoImage, path: '/' },
    { name: 'Tienda', path: '/shop' },
    { name: 'Contacto', path: '/contact' },
]
function Header() {
    return (
        <div className="header flex bg-e8e8e8 justify-center">
            <nav className="flex space-x-44 text-lg items-center">
                {navItems.map((item, index) => (
                    <Icon key={index} {...item} />
                ))}
            </nav>
        </div>
    )
}

export default Header
