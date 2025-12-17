import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Nosotros from './components/Nosotros'
import MisionVision from './components/MisionVision'
import Contacto from './components/Contacto'
import LinksInteres from './components/LinksInteres'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'
import './App.css'

function App() {
  return (
    <div className="App">
      <StructuredData />
      <Header />
      <Hero />
      <Servicios />
      <Nosotros />
      <MisionVision />
      <LinksInteres />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App

