import React from 'react'
import Layout from '../layout'
import Card from '../components/Card'
import pr1 from '../assets/product/Imagen1.png'
import pr2 from '../assets/product/Imagen2.png'
import pr3 from '../assets/product/Imagen3.png'
import pr4 from '../assets/product/Imagen4.png'
import pr5 from '../assets/product/Imagen5.png'
import pr6 from '../assets/product/Imagen6.png'
import pr7 from '../assets/product/Imagen7.png'
import pr8 from '../assets/product/Imagen9.png'
import pr9 from '../assets/product/Imagen11.png'
import pr10 from '../assets/product/Imagen13.png'
import pr11 from '../assets/product/Imagen14.png'
import pr12 from '../assets/product/Imagen15.png'

function Shop() {
    const images = [
        { image: pr1, label: 'Rey Baltazar $100' },
        { image: pr2, label: 'Virgen de Verdun $300' },
        { image: pr3, label: 'Pedestal $600' },
        { image: pr4, label: 'Virgen de Lourdes $80' },
        { image: pr5, label: 'Vaca $50' },
        { image: pr6, label: 'Oveja $50' },
        { image: pr7, label: 'Burro $50' },
        { image: pr8, label: 'Angel $250' },
        { image: pr9, label: 'Buho Portainciensos $150' },
        { image: pr10, label: 'Buda $150' },
        { image: pr11, label: 'Cerradura $200' },
        { image: pr12, label: 'Elefante $250' },
    ]

    return (
        <Layout>
            <div className="bg-beige">
                <div className="flex flex-col">
                    <h1 className="header mb-96 border-y-black border-y-2 py-5 text-53433e border-opacity-10 bg-white">
                        Ejemplares (Proximamente...)
                    </h1>
                </div>
                <div className="flex flex-col">
                    <h1 className="header mb-3 border-y-black border-y-2 py-5 text-53433e border-opacity-10 bg-white">
                        Productos
                    </h1>
                    <div className="flex  flex-wrap justify-center flex-row">
                        {images.map(({ image, label }) => (
                            <Card image={image} label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shop
