import React from 'react'
import Layout from '../layout'
import SliderCat from '../components/SliderCat'
import BgOfA from '../assets/home/bginpart.png'
import Product0 from '../assets/home/catalog1.png'
import Product1 from '../assets/home/catalog2.png'
import Product2 from '../assets/home/catalog3.png'
import Product3 from '../assets/home/catalog4.png'
import Product4 from '../assets/home/catalog5.png'
import Product5 from '../assets/home/catalog6.png'
import Product6 from '../assets/home/catalog7.png'
import Product7 from '../assets/home/catalog8.png'

function Home() {
    const cards = [
        { image: Product0, label: 'Animales', path: '/tienda' },
        { image: Product1, label: 'Figura', path: '/tienda' },
        { image: Product2, label: 'Personas', path: '/tienda' },
        { image: Product3, label: 'aaa', path: '/tienda' },
        { image: Product4, label: 'pedro', path: '/tienda' },
        { image: Product5, label: 'Manzana', path: '/tienda' },
        { image: Product6, label: 'mma', path: '/tienda' },
        { image: Product7, label: 'Mandarina', path: '/tienda' },
    ]
    return (
        <Layout>
            <div className="bg-e8e8e8 flex flex-col">
                <div className="flex justify-center items-center">
                    <img src={BgOfA} alt="Bacground" className="blur-sm bg-black bg-opacity-30" />
                    <div className="absolute">
                        <h1 className="text-7xl font-openSans  text-center text-second font-thin m-5">
                            GIEBEN
                        </h1>
                        <h1 className="text-7xl font-openSans text-center text-second font-thin m-5">
                            te da la
                        </h1>
                        <h1 className="text-7xl font-openSans text-center text-second font-thin m-5">
                            bienvenida
                        </h1>
                        <span className="text-4xl not-italic">¿Que quieres crear?</span>
                    </div>
                </div>
                <div>
                    <br />
                    <div className="flex justify-center items-center">
                        <SliderCat items={cards} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
