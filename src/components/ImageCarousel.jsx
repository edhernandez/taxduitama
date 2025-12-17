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

  // Placeholder images - el usuario puede reemplazarlas con imágenes reales
  const slides = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
      alt: 'Tax Duitama S.A.S. - Vehículos de taxi en Duitama, Boyacá disponibles 24/7',
      title: 'Nuestros Vehículos en Duitama'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=600&fit=crop',
      alt: 'Servicio de taxis en Duitama confiable y seguro',
      title: 'Servicio Confiable en Duitama'
    },
    {
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'Conoce Nuestro Servicio de Taxis en Duitama'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
      alt: 'Conductores profesionales de taxis en Duitama certificados y experimentados',
      title: 'Conductores Certificados en Duitama'
    }
  ]

  return (
    <div className="carousel-container">
      <h3 className="carousel-title">Galería de Taxis en Duitama</h3>
      <Slider {...settings} className="image-carousel">
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide.type === 'video' ? (
              <div className="video-container">
                <video controls className="carousel-video">
                  <source src={slide.src} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
                <div className="slide-overlay">
                  <h4>{slide.title}</h4>
                </div>
              </div>
            ) : (
              <div className="image-container">
                <img src={slide.src} alt={slide.alt} className="carousel-image" />
                <div className="slide-overlay">
                  <h4>{slide.title}</h4>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageCarousel

