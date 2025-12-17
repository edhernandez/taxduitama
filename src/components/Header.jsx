import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaWhatsapp, FaMobileAlt } from 'react-icons/fa'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#inicio" className="logo-container" aria-label="Tax Duitama - Inicio">
          <Logo variant="simple" />
        </a>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`} aria-label="Navegación principal">
          <a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios'); }} aria-label="Servicios de taxis en Duitama">Servicios</a>
          <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} aria-label="Sobre Tax Duitama">Nosotros</a>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} aria-label="Contactar Tax Duitama">Contacto</a>
          <div className="header-buttons-mobile">
            <a 
              href="https://play.google.com/store/apps/details?id=com.duitaxicootrachica.duitama&hl=es_CO"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-app"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaMobileAlt />
              Usar App
            </a>
            <a 
              href="https://wa.me/573238344040" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-solicitar"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaWhatsapp />
              Solicitar por WhatsApp
            </a>
          </div>
        </nav>

        <div className="header-buttons">
          <a 
            href="https://play.google.com/store/apps/details?id=com.duitaxicootrachica.duitama&hl=es_CO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-app"
          >
            <FaMobileAlt />
            Usar App
          </a>
          <a 
            href="https://wa.me/573238344040" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-solicitar"
          >
            <FaWhatsapp />
            Solicitar por WhatsApp
          </a>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header

