import React from 'react'

const StructuredData = () => {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TAX DUITAMA S.A.S.",
    "alternateName": "Tax Duitama",
    "image": "https://taxduitama.com/logo.jpg",
    "description": "Servicio de taxis en Duitama, Boyacá. Disponible 24/7 con conductores certificados y vehículos seguros. Tax Duitama - El mejor servicio de taxi en Duitama.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrera 19 No. 4-50",
      "addressLocality": "Duitama",
      "addressRegion": "Boyacá",
      "postalCode": "150461",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 5.8245,
      "longitude": -73.0344
    },
    "url": "https://taxduitama.com",
    "telephone": "+573209781909",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://play.google.com/store/apps/details?id=com.duitaxicootrachica.duitama&hl=es_CO"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Duitama",
      "containedIn": {
        "@type": "State",
        "name": "Boyacá"
      }
    },
    "serviceType": "Taxi Service",
    "keywords": "tax duitama, taxis en duitama, taxi duitama, servicio de taxi duitama"
  }

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://taxduitama.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://taxduitama.com/#servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Nosotros",
        "item": "https://taxduitama.com/#nosotros"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contacto",
        "item": "https://taxduitama.com/#contacto"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  )
}

export default StructuredData

