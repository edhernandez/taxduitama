import React, { useState, useRef } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import './VideoApp.css'

const VideoApp = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [appIconError, setAppIconError] = useState(false)
  const videoRef = useRef(null)

  const appIconSrc = appIconError 
    ? 'https://play-lh.googleusercontent.com/UVmiak5AVTbkUxKom5EnmFm9elopJqYXxGz33fN6MoJ01qb_FzvEU3G1R2S7rwHAwt4=w240-h480-rw'
    : '/images/logos/Duitaxi.jfif'

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
  }

  return (
    <section className="video-app-section" id="nuestra-app">
      <div className="video-app-container">
        <div className="video-app-header">
          <h2 className="video-app-title">¿Cómo usar nuestra App?</h2>
          <p className="video-app-subtitle">
            Aprende a solicitar tu taxi en Duitama de forma rápida y fácil desde tu dispositivo móvil
          </p>
        </div>

        <div className="video-app-content">
          <div className="video-wrapper-app">
            <div className="video-container-app">
              {!isLoaded && (
                <div className="video-loading">
                  <div className="loading-spinner"></div>
                  <p>Cargando video...</p>
                </div>
              )}
              <video
                ref={videoRef}
                className="video-app"
                controls={false}
                onLoadedData={handleLoadedData}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                preload="metadata"
                playsInline
              >
                <source src="/videos/Videousoapp.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {!isPlaying && (
                <div className="video-overlay" onClick={togglePlay}>
                  <button className="play-button" aria-label="Reproducir video">
                    <FaPlay />
                  </button>
                </div>
              )}

              {isPlaying && (
                <div className="video-controls-overlay">
                  <button 
                    className="pause-button" 
                    onClick={togglePlay}
                    aria-label="Pausar video"
                  >
                    <FaPause />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="app-download-section">
            <div className="app-download-content">
              <h3 className="app-download-title">Descarga la App de Duitaxi</h3>
              <p className="app-download-description">
                Solicita tu taxi en Duitama de forma rápida y fácil desde tu dispositivo móvil. 
                Disponible en Google Play Store.
              </p>
              <div className="app-download-options">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.duitaxicootrachica.duitama&hl=es_CO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-icon-link"
                >
                  <img 
                    src={appIconSrc}
                    alt="Descargar Dui taxi App"
                    className="app-icon-large"
                    onError={() => setAppIconError(true)}
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoApp

