import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaDownload } from 'react-icons/fa'
import './Contacto.css'

const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto-hero">
        <div className="contacto-hero-content">
          <h2 className="contacto-title">¿Necesitas un taxi en Duitama?</h2>
          <p className="contacto-subtitle">
            Contáctanos ahora y solicita tu taxi en Duitama. Llega a tu destino de forma segura y rápida
          </p>
        </div>
      </div>

      <div className="contacto-container">
        <div className="contacto-cards">
          <div className="contacto-card">
            <div className="contacto-icon">
              <FaWhatsapp />
            </div>
            <h3 className="contacto-card-title">WhatsApp</h3>
            <a 
              href="https://wa.me/573238344040" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contacto-link"
            >
              +57 323 834 4040
            </a>
          </div>

          <div className="contacto-card">
            <div className="contacto-icon">
              <FaEnvelope />
            </div>
            <h3 className="contacto-card-title">Email</h3>
            <a 
              href="mailto:taxduitama@gmail.com" 
              className="contacto-link"
            >
              taxduitama@gmail.com
            </a>
          </div>

          <div className="contacto-card">
            <div className="contacto-icon">
              <FaMapMarkerAlt />
            </div>
            <h3 className="contacto-card-title">Ubicación</h3>
            <p className="contacto-text">
              Duitama, Boyacá<br />
              Carrera 19 No. 4-50
            </p>
          </div>

          <div className="contacto-card">
            <div className="contacto-icon">
              <FaClock />
            </div>
            <h3 className="contacto-card-title">Horario</h3>
            <p className="contacto-text">24 horas - 7 días</p>
          </div>
        </div>

        <div className="app-section">
          <h3 className="app-title">Descarga la App de Tax Duitama S.A.S.</h3>
          <p className="app-description">
            Solicita tu taxi en Duitama de forma rápida y fácil desde tu dispositivo móvil. 
            Disponible en Google Play Store.
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=com.duitaxicootrachica.duitama&hl=es_CO"
            target="_blank"
            rel="noopener noreferrer"
            className="app-button-only"
          >
            <img 
              src="https://play-lh.googleusercontent.com/UVmiak5AVTbkUxKom5EnmFm9elopJqYXxGz33fN6MoJ01qb_FzvEU3G1R2S7rwHAwt4=w240-h480-rw" 
              alt="Descargar Dui taxi App"
              className="app-icon-large"
            />
          </a>
        </div>

        <div className="cta-section">
          <a 
            href="https://wa.me/573238344040" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            <FaWhatsapp />
            Solicitar Taxi Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto

