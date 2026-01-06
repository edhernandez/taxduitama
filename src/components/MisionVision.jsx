import React from 'react'
import { FaBullseye, FaEye, FaHistory } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './MisionVision.css'

const MisionVision = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear'
  }

  const slides = [
    {
      icon: <FaBullseye />,
      title: 'Misión',
      content: 'Cubrir las necesidades de transporte terrestre de pasajeros en Duitama con valores diferenciales como seguridad, confiabilidad, equidad, comodidad, lealtad, eficacia y responsabilidad; para nuestros usuarios, permitiendo así la optimización del servicio de taxis en Duitama, Boyacá.'
    },
    {
      icon: <FaEye />,
      title: 'Visión',
      content: 'Para el 2028 TAX DUITAMA S.A.S., será reconocida como la empresa líder en prestación de servicios de taxis en Duitama, Boyacá, alcanzando los más altos niveles de productividad y eficiencia, con excelente servicio al usuario, mediante suministro de tecnología, innovación y seguridad, con la intención de lograr la satisfacción del cliente, sin dejar el sentido humano que nos caracteriza.'
    },
    {
      icon: <FaHistory />,
      title: 'Nuestra Historia',
      content: 'Tax Duitama S.A.S. (Sociedad por Acciones Simplificadas) nació aproximadamente hace seis años, con el propósito esencial de brindar un servicio público de transporte individual urbano tipo taxi en Duitama; de una forma confiable, accesible y segura para todos los habitantes del Municipio de Duitama, Boyacá. Un grupo de conductores y propietarios de taxi en Duitama, decidieron unirse para ofrecer una alternativa de movilidad responsable, basada en el respeto, calidad y atención al cliente. Obteniendo así la habilitación y permiso de operación a la persona jurídica TRANSPORTE INDIVIDUAL DE PASAJEROS TAX DUITAMA S.A.S., mediante Resolución No. 495 de fecha 30 de abril de 2019 de la Alcaldía Municipal de Duitama (Boyacá). Hoy seguimos avanzando con la misma visión que nos impulsó desde el comienzo, ser el mejor servicio de taxis en Duitama, un aliado de movilidad para todos, ofreciendo un servicio eficiente, amable y seguro. Nuestra historia es la suma de miles de recorridos que se han compartido con quienes confían en Tax Duitama S.A.S. para llegar a su destino en Duitama y sus alrededores.'
    }
  ]

  return (
    <section className="mision-vision">
      <div className="mision-vision-container">
        <div className="mision-vision-header">
          <h2 className="section-title">Misión y Visión de Tax Duitama S.A.S.</h2>
          <p className="section-subtitle">
            Comprometidos con la excelencia en el servicio de transporte de taxis en Duitama, Boyacá
          </p>
        </div>

        <div className="carousel-wrapper-mv">
          <Slider {...carouselSettings} className="mision-vision-carousel">
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide-mv">
                <div className="info-card-carousel">
                  <div className="card-icon">
                    {slide.icon}
                  </div>
                  <h3 className="card-title">{slide.title}</h3>
                  <p className="card-text">{slide.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default MisionVision

