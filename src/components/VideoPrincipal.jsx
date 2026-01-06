import React, { useState, useRef } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import './VideoPrincipal.css'

const VideoPrincipal = () => {
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
    <section className="video-principal-section">
      <div className="video-principal-container">
        <div className="video-principal-header">
          <h2 className="video-principal-title">Conoce Tax Duitama S.A.S.</h2>
          <p className="video-principal-subtitle">
            Descubre quiénes somos y cómo trabajamos para brindarte el mejor servicio de taxis en Duitama
          </p>
        </div>

        <div className="video-wrapper">
          <div className="video-container-principal">
            {!isLoaded && (
              <div className="video-loading">
                <div className="loading-spinner"></div>
                <p>Cargando video...</p>
              </div>
            )}
            <video
              ref={videoRef}
              className="video-principal"
              controls={false}
              onLoadedData={handleLoadedData}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              preload="metadata"
              playsInline
            >
              <source src="/videos/Videoprincipal.mp4" type="video/mp4" />
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
      </div>
    </section>
  )
}

export default VideoPrincipal

