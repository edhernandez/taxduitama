import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
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
          Tax Duitama S.A.S. - Taxis en Duitama<br />
          <span className="title-highlight">Tu transporte seguro 24/7</span>
        </h1>
        
        <p className="hero-description">
          Servicio de taxi en Duitama confiable, rápido y seguro. Somos la empresa líder 
          en transporte de pasajeros en Duitama, Boyacá. Llevamos años transportando 
          a la comunidad con conductores certificados y vehículos en perfecto estado.
        </p>
        
        <div className="hero-buttons">
          <a 
            href="https://play.google.com/store/apps/details?id=com.duitaxicootrachica.duitama&hl=es_CO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-app-only"
          >
            <img 
              src="https://play-lh.googleusercontent.com/UVmiak5AVTbkUxKom5EnmFm9elopJqYXxGz33fN6MoJ01qb_FzvEU3G1R2S7rwHAwt4=w240-h480-rw" 
              alt="Descargar Dui taxi App"
              className="app-icon-button"
            />
          </a>
          <a 
            href="https://wa.me/573238344040" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp />
            Solicitar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

