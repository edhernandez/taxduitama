import React, { useState, useRef } from 'react'
import { FaPlay, FaPause, FaMobileAlt } from 'react-icons/fa'
import './VideoApp.css'

const VideoApp = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef(null)

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
    <section className="video-app-section">
      <div className="video-app-container">
        <div className="video-app-header">
          <div className="video-app-icon">
            <FaMobileAlt />
          </div>
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

          <div className="video-app-cta">
            <p className="cta-text">¿Listo para probar la app?</p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.duitaxicootrachica.duitama&hl=es_CO"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-app"
            >
              <FaMobileAlt />
              Descargar App
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoApp

