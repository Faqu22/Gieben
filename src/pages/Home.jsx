import React from 'react'
import Layout from '../layout'
import Slider from '../components/Slider'
import Card from '../components/Card'
import Statue from '../assets/statue.png'
import Help from '../assets/apoyar.png'
import Mision from '../assets/mision.png'
import Origen from '../assets/origen.png'
import Product0 from '../assets/animals/animales1.png'
import Product1 from '../assets/figures/figuras1.png'
import Product2 from '../assets/people/personas1.png'
import Product3 from '../assets/product/Imagen14.png'

function Home() {
    const images = [Help, Mision, Origen]
    const cards = [
        { image: Product0, label: 'Animales', path: '/tienda' },
        { image: Product1, label: 'Figura', path: '/tienda' },
        { image: Product2, label: 'Personas', path: '/tienda' },
        { image: Product3, label: 'Personaje', path: '/tienda' },
    ]
    return (
        <Layout>
            <div className="bg-beige flex flex-col">
                <div className="flex items-center justify-center text-xs">
                    <img src={Statue} className="w-80 h-auto blur-sm" />
                    <h1 className="text-5xl font-extrabold font-petit text-bb9885 mb-16 bg-bba485 p-4 border-x-2 border-e84a5f ml-44 rounded-3xl shadow-lg flex items-center border-b-8 hover:border-blue-200 transition duration-300 text-neutral-50">
                        Bienvenido a Gieben
                    </h1>
                </div>
                <div className="mt-14">
                    <Slider images={images} />
                </div>
                <div>
                    <div className="border-y-black border-y-2 py-5 text-53433e border-opacity-10 bg-white">
                        <h1>Catalogo</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        {cards.map(({ image, label, path }) => (
                            <Card image={image} label={label} path={path} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
