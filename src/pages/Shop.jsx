import React from 'react'
import Layout from '../layout'
import Card from '../components/Card'
import pr1 from '../assets/shop/animals/buho1.jpeg'
import pr2 from '../assets/shop/animals/buho2.jpeg'
import pr3 from '../assets/shop/animals/cat1.jpeg'
import pr4 from '../assets/shop/animals/cat2.jpeg'
import pr5 from '../assets/shop/animals/elefant1.jpeg'
import pr6 from '../assets/shop/animals/elefant2.jpeg'
import pr7 from '../assets/shop/animals/horse1.jpeg'
import pr8 from '../assets/shop/animals/tiger1.jpeg'
import pr9 from '../assets/shop/people/dancer.jpeg'
import pr10 from '../assets/shop/people/farmer1.jpeg'
import pr11 from '../assets/shop/figures/warrior1.jpeg'
import pr12 from '../assets/shop/product/jar1.jpeg'

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
            <div className="bg-e8e8e8">
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
