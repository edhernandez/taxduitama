import React, { useState } from 'react'
import './Logo.css'

const Logo = ({ variant = 'full', className = '' }) => {
  const [imageError, setImageError] = useState(false)
  
  // Intentar diferentes formatos de imagen
  const getImageSrc = (baseName) => {
    return `/images/logos/${baseName}.jpeg`
  }

  const imageSrc = variant === 'full' 
    ? getImageSrc('logo-completo')
    : getImageSrc('logo-simple')

  const altText = variant === 'full'
    ? 'TAX DUITAMA S.A.S. - Logo Completo'
    : 'TAX DUITAMA S.A.S.'

  if (imageError) {
    // Fallback: mostrar texto si la imagen no carga
    return (
      <div className={`logo ${variant} ${className} logo-fallback`}>
        <span className="logo-text-fallback">TAX DUITAMA</span>
        {variant === 'full' && <span className="logo-text-fallback-small">S.A.S</span>}
        {variant === 'simple' && <span className="logo-company-name">TAX DUITAMA</span>}
      </div>
    )
  }

  return (
    <div className={`logo ${variant} ${className}`}>
      <img 
        src={imageSrc}
        alt={altText}
        className={variant === 'full' ? 'logo-image-full' : 'logo-image-simple'}
        onError={() => setImageError(true)}
        loading="lazy"
      />
      {variant === 'simple' && (
        <span className="logo-company-name">TAX DUITAMA</span>
      )}
    </div>
  )
}

export default Logo
