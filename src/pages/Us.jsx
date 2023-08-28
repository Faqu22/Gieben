import React from 'react'
import Layout from '../layout'
import Slider from '../components/Slider'
import Help from '../assets/home/apoyar.png'
import Mision from '../assets/home/mision.png'
import Origen from '../assets/home/origen.png'

function Us() {
    const images = [Help, Mision, Origen]
    return (
        <Layout>
            <div className="bg-e8e8e8">
                <Slider images={images} />
            </div>
        </Layout>
    )
}

export default Us
