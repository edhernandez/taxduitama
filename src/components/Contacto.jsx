import React from 'react'
import { FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'
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
              <FaClock />
            </div>
            <h3 className="contacto-card-title">Horario</h3>
            <p className="contacto-text">24 horas - 7 días</p>
          </div>
        </div>

        <div className="ubicacion-section">
          <div className="ubicacion-header">
            <div className="ubicacion-icon">
              <FaMapMarkerAlt />
            </div>
            <h3 className="ubicacion-title">Ubicación</h3>
            <p className="ubicacion-address">
              Duitama, Boyacá<br />
              Carrera 19 No. 4-50
            </p>
          </div>
          <div className="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1234567890123!2d-73.039309!3d5.820721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f760c743069%3A0xcf4014a1183b09e4!2sCra%2019%20%234-50%2C%20Duitama%2C%20Boyac%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Tax Duitama S.A.S. - Carrera 19 No. 4-50, Duitama, Boyacá"
            />
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

