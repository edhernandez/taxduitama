import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageCarousel.css'

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear'
  }

  // Imágenes de la flota de vehículos de Tax Duitama S.A.S.
  const slides = [
    {
      type: 'image',
      src: '/images/fotos_taxis/1.jpg',
      alt: 'Tax Duitama S.A.S. - Vehículo de taxi en Duitama, Boyacá - Flota de vehículos seguros y confiables',
      title: 'Nuestra Flota de Vehículos'
    },
    {
      type: 'image',
      src: '/images/fotos_taxis/2.jpg',
      alt: 'Tax Duitama S.A.S. - Servicio de taxis en Duitama con vehículos en perfecto estado',
      title: 'Vehículos en Excelente Estado'
    },
    {
      type: 'image',
      src: '/images/fotos_taxis/3.jpg',
      alt: 'Tax Duitama S.A.S. - Transporte seguro y confiable en Duitama, Boyacá',
      title: 'Transporte Seguro y Confiable'
    },
    {
      type: 'image',
      src: '/images/fotos_taxis/4.jpg',
      alt: 'Tax Duitama S.A.S. - Servicio de taxis 24/7 en Duitama con conductores certificados',
      title: 'Servicio Disponible 24/7'
    }
  ]

  return (
    <div className="carousel-container">
      <h3 className="carousel-title">Nuestra Flota de Vehículos</h3>
      <Slider {...settings} className="image-carousel">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="image-container">
              <img src={slide.src} alt={slide.alt} className="carousel-image" loading="lazy" />
              <div className="slide-overlay">
                <h4>{slide.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageCarousel

