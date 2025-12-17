import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './Nosotros.css'

const Nosotros = () => {
  const beneficios = [
    'Tarifas justas y transparentes',
    'Vehículos limpios y cómodos',
    'Pago en efectivo o transferencia',
    'Conductores profesionales',
    'Servicio puerta a puerta',
    'Atención personalizada'
  ]

  return (
    <section className="nosotros" id="nosotros">
      <div className="nosotros-container">
        <div className="nosotros-content">
          <div className="nosotros-text">
            <h2 className="section-title">Más de 6 años sirviendo a Duitama con taxis de calidad</h2>
            <p className="nosotros-description">
              En Tax Duitama nos enorgullece ser parte de la comunidad de Duitama, Boyacá. 
              Hemos transportado miles de familias y seguimos comprometidos con brindar 
              el mejor servicio de taxi en Duitama con calidad, seguridad y confianza en cada viaje.
            </p>
            
            <div className="beneficios-grid">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="beneficio-item">
                  <FaCheck className="check-icon" />
                  <span>{beneficio}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="nosotros-image">
            <div className="image-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop" 
                alt="Taxi Duitama - Servicio de taxis en Duitama, Boyacá con conductores profesionales" 
                className="hero-image"
              />
              <div className="experience-badge">
                <div className="badge-number">6+</div>
                <div className="badge-text">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros

