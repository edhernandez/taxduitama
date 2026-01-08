import React from 'react'
import Logo from './Logo'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Logo variant="full" logoName="logo-completo-2" />
            </div>
            <p className="footer-slogan">
              "Viaja con tranquilidad. Tu seguridad es nuestra prioridad"
            </p>
            <p className="footer-text" style={{marginTop: '1rem'}}>
              El mejor servicio de <strong>taxis en Duitama</strong>, Boyacá. 
              Disponible 24/7 para tu comodidad y seguridad.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Información</h4>
            <p className="footer-text">
              <strong>NIT:</strong> 901159191
            </p>
            <p className="footer-text">
              <strong>Dirección:</strong> Duitama (Boyacá), Carrera 19 No. 4-50
            </p>
            <p className="footer-text">
              <strong>Email:</strong> taxduitama@gmail.com
            </p>
            <p className="footer-text">
              <strong>PQR:</strong> 3209781909
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Servicios</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nuestra-app">Nuestra App</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section footer-links-interes">
            <h4 className="footer-subtitle">Links de Interés</h4>
            <div className="footer-links-grid">
              <a 
                href="https://www.runt.gov.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link-external"
              >
                RUNT
              </a>
              <a 
                href="https://www.fcm.org.co/simit/#/home-public" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link-external"
              >
                SIMIT
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} TAX DUITAMA S.A.S. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

