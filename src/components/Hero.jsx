import React from 'react'
import { FaWhatsapp, FaMobileAlt } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Disponible 24/7
        </div>
        
        <h1 className="hero-title">
          Tax Duitama - Taxis en Duitama<br />
          <span className="title-highlight">Tu transporte seguro 24/7</span>
        </h1>
        
        <p className="hero-description">
          Servicio de taxi en Duitama confiable, rápido y seguro. Somos la empresa líder 
          en transporte de pasajeros en Duitama, Boyacá. Llevamos años transportando 
          a la comunidad con conductores certificados y vehículos en perfecto estado.
        </p>
        
        <div className="hero-buttons">
          <a 
            href="https://wa.me/573238344040" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp />
            Solicitar por WhatsApp
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.duitaxicootrachica.duitama&hl=es_CO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaMobileAlt />
            Usar App
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

