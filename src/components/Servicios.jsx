import React from 'react'
import { FaClock, FaShieldAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'
import ImageCarousel from './ImageCarousel'
import './Servicios.css'

const Servicios = () => {
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
      title: 'Cobertura Total en Duitama',
      description: 'Servicio de taxi en toda la ciudad de Duitama, Boyacá, y municipios aledaños. Llegamos a donde lo necesites.'
    },
    {
      icon: <FaUsers />,
      title: 'Servicio Familiar',
      description: 'Transporte para toda la familia con asientos especiales disponibles.'
    }
  ]

  return (
    <section className="servicios" id="servicios">
      <div className="servicios-container">
        <div className="servicios-header">
          <h2 className="section-title">¿Por qué elegir Tax Duitama?</h2>
          <p className="section-subtitle">
            Ofrecemos el mejor servicio de taxis en Duitama, Boyacá, con múltiples beneficios 
            para nuestros clientes. Tu seguridad y comodidad son nuestra prioridad.
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <div className="servicio-icon">
                {servicio.icon}
              </div>
              <h3 className="servicio-title">{servicio.title}</h3>
              <p className="servicio-description">{servicio.description}</p>
            </div>
          ))}
        </div>

        <div className="carousel-section">
          <ImageCarousel />
        </div>
      </div>
    </section>
  )
}

export default Servicios

