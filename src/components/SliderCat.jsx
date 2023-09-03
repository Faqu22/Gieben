import React from 'react'
import Slider from 'react-slick'
import SlideCat from './SlideCat'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import '../button.css'

function SliderCat({ items }) {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000, // Añade esta línea
        speed: 500,
        slidesToShow: 4, // Mostrar 4 elementos
        slidesToScroll: 1, // Desplazar uno a la vez
        arrows: true, // Mostrar flechas de navegación
    }

    return (
        <div className="relative h-96 w-auto max-w-screen-xl mx-auto ">
            <Slider {...settings} className="mx-5">
                {items.map(({ image, label }) => (
                    <Link to="/shop">
                        <SlideCat key={label} image={image} label={label} />
                    </Link>
                ))}
            </Slider>
        </div>
    )
}

export default SliderCat
