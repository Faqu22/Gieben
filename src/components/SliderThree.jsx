import React from 'react'
import Slider from 'react-slick'
import SlideCat from './SlideCat'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import '../button.css'
import SceneThree from './threeJS/index'

function SliderThree({ items }) {
    const settings = {
        dots: true,
        autoplay: false,
        infinite: false,
        // autoplaySpeed: 2000, // Añade esta línea
        speed: 500,
        draggable: false,
        slidesToShow: 1, // Mostrar 4 elementos
        slidesToScroll: 1, // Desplazar uno a la vez
        arrows: true, // Mostrar flechas de navegación
    }

    return (
        <div className="relative h-96 w-auto max-w-screen-xl mx-auto ">
            <Slider {...settings} className="mx-5">
                {items.map(({ model, label, rot, picker }, index) => (
                    <SceneThree
                        key={index} // o, si tus items tienen un identificador único, usa eso en lugar de index
                        model={model}
                        label={label}
                        rot={rot}
                        picker={picker}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default SliderThree
