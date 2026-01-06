import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoPrincipal from './components/VideoPrincipal'
import ServiciosNosotros from './components/ServiciosNosotros'
import VideoApp from './components/VideoApp'
import MisionVision from './components/MisionVision'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'
import './App.css'

function App() {
  return (
    <div className="App">
      <StructuredData />
      <Header />
      <Hero />
      <VideoPrincipal />
      <ServiciosNosotros />
      <VideoApp />
      <MisionVision />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App

