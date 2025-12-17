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
              <Logo variant="full" />
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
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Servicios</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
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

