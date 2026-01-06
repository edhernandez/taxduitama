import React from 'react'
import { FaClock, FaShieldAlt, FaMapMarkerAlt, FaUsers, FaCheck } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ServiciosNosotros.css'

const ServiciosNosotros = () => {
  const servicios = [
    {
      icon: <FaClock />,
      title: 'Servicio 24/7',
      description: 'Disponibles para ti a cualquier hora del día o la noche, todos los días del año.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Viajes Seguros',
      description: 'Conductores certificados y vehículos en perfecto estado para tu tranquilidad.'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Cobertura Total',
      description: 'Servicio en Duitama, Boyacá y cualquier parte del país. Llegamos a donde lo necesites.'
    },
    {
      icon: <FaUsers />,
      title: 'Servicio Familiar',
      description: 'Transporte para toda la familia con asientos especiales disponibles.'
    }
  ]

  const beneficios = [
    'Tarifas justas y transparentes',
    'Vehículos limpios y cómodos',
    'Pago en efectivo o transferencia',
    'Conductores profesionales',
    'Servicio puerta a puerta',
    'Atención personalizada'
  ]

  const carouselSettings = {
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

  const slides = [
    {
      src: '/images/fotos_taxis/1.jpg',
      alt: 'Tax Duitama S.A.S. - Vehículo de taxi en Duitama, Boyacá - Flota de vehículos seguros y confiables',
      title: 'Nuestra Flota de Vehículos',
      description: 'Vehículos modernos y en perfecto estado para tu seguridad y comodidad'
    },
    {
      src: '/images/fotos_taxis/2.jpg',
      alt: 'Tax Duitama S.A.S. - Servicio de taxis en Duitama con vehículos en perfecto estado',
      title: 'Vehículos en Excelente Estado',
      description: 'Mantenimiento constante para garantizar tu tranquilidad en cada viaje'
    },
    {
      src: '/images/fotos_taxis/3.jpg',
      alt: 'Tax Duitama S.A.S. - Transporte seguro y confiable en Duitama, Boyacá',
      title: 'Transporte Seguro y Confiable',
      description: 'Conductores certificados y experimentados al servicio de la comunidad'
    },
    {
      src: '/images/fotos_taxis/4.jpg',
      alt: 'Tax Duitama S.A.S. - Servicio de taxis 24/7 en Duitama con conductores certificados',
      title: 'Servicio Disponible 24/7',
      description: 'Estamos disponibles cuando más nos necesitas, todos los días del año'
    }
  ]

  return (
    <section className="servicios-nosotros" id="servicios" data-section="nosotros">
      <div className="servicios-nosotros-container">
        <div className="section-header">
          <h2 className="section-title">¿Por qué elegir Tax Duitama S.A.S.?</h2>
          <p className="section-subtitle">
            Años sirviendo a Duitama con taxis de calidad. Somos parte de la comunidad y 
            nos comprometemos con brindar el mejor servicio de transporte.
          </p>
        </div>

        <div className="servicios-grid-compact">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card-compact">
              <div className="servicio-icon-compact">
                {servicio.icon}
              </div>
              <h3 className="servicio-title-compact">{servicio.title}</h3>
              <p className="servicio-description-compact">{servicio.description}</p>
            </div>
          ))}
        </div>

        <div className="nosotros-carousel-wrapper">
          <div className="nosotros-content">
            <div className="nosotros-text">
              <h3 className="nosotros-title">Comprometidos con Duitama</h3>
              <p className="nosotros-description">
                En Tax Duitama S.A.S. nos enorgullece ser parte de la comunidad de Duitama, Boyacá. 
                Hemos transportado miles de familias y seguimos comprometidos con brindar 
                el mejor servicio de taxi con calidad, seguridad y confianza en cada viaje.
              </p>
              
              <div className="beneficios-list">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="beneficio-item">
                    <FaCheck className="check-icon" />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="carousel-wrapper">
              <Slider {...carouselSettings} className="image-carousel-unified">
                {slides.map((slide, index) => (
                  <div key={index} className="carousel-slide-unified">
                    <div className="image-container-unified">
                      <img src={slide.src} alt={slide.alt} className="carousel-image-unified" loading="lazy" />
                      <div className="slide-content-overlay">
                        <h4 className="slide-title">{slide.title}</h4>
                        <p className="slide-description">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiciosNosotros

