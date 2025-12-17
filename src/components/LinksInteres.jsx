import React from 'react'
import './LinksInteres.css'

const LinksInteres = () => {
  return (
    <section className="links-interes">
      <div className="links-interes-container">
        <h2 className="section-title">Links de Interés</h2>
        <div className="links-grid">
          <a 
            href="https://www.runt.gov.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-card"
          >
            <div className="link-logo runt-logo">
              <div className="runt-icon">
                <span className="runt-letter">R</span>
                <span className="runt-text">RUNT</span>
              </div>
            </div>
            <span className="link-label">RUNT</span>
          </a>

          <a 
            href="https://www.fcm.org.co/simit/#/home-public" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link-card"
          >
            <div className="link-logo simit-logo">
              <div className="simit-text">simit</div>
            </div>
            <span className="link-label">SIMIT</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default LinksInteres

