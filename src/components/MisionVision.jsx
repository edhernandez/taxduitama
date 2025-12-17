import React from 'react'
import { FaBullseye, FaEye } from 'react-icons/fa'
import './MisionVision.css'

const MisionVision = () => {
  return (
    <section className="mision-vision">
      <div className="mision-vision-container">
        <div className="mision-vision-header">
          <h2 className="section-title">Misión y Visión de Tax Duitama</h2>
          <p className="section-subtitle">
            Comprometidos con la excelencia en el servicio de transporte de taxis en Duitama, Boyacá
          </p>
        </div>

        <div className="cards-container">
          <div className="info-card">
            <div className="card-icon">
              <FaBullseye />
            </div>
            <h3 className="card-title">Misión</h3>
            <p className="card-text">
              Cubrir las necesidades de transporte terrestre de pasajeros en Duitama 
              con valores diferenciales como seguridad, confiabilidad, equidad, comodidad, 
              lealtad, eficacia y responsabilidad; para nuestros usuarios, permitiendo así 
              la optimización del servicio de taxis en Duitama, Boyacá.
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <FaEye />
            </div>
            <h3 className="card-title">Visión</h3>
            <p className="card-text">
              Para el 2028 TAX DUITAMA S.A.S., será reconocida como la empresa líder 
              en prestación de servicios de taxis en Duitama, Boyacá, alcanzando 
              los más altos niveles de productividad y eficiencia, con excelente servicio 
              al usuario, mediante suministro de tecnología, innovación y seguridad, con 
              la intención de lograr la satisfacción del cliente, sin dejar el sentido 
              humano que nos caracteriza.
            </p>
          </div>
        </div>

        <div className="historia-section">
          <h3 className="historia-title">Nuestra Historia</h3>
            <p className="historia-text">
              Tax Duitama S.A.S. nació aproximadamente hace seis años, con el propósito 
              esencial de brindar un servicio público de transporte individual urbano tipo 
              taxi en Duitama; de una forma confiable, accesible y segura para todos los habitantes 
              del Municipio de Duitama, Boyacá.
            </p>
            <p className="historia-text">
              Un grupo de conductores y propietarios de taxi en Duitama, decidieron unirse para ofrecer 
              una alternativa de movilidad responsable, basada en el respeto, calidad y 
              atención al cliente. Obteniendo así la habilitación y permiso de operación a 
              la persona jurídica TRANSPORTE INDIVIDUAL DE PASAJEROS TAX DUITAMA S.A.S., 
              mediante Resolución No. 495 de fecha 30 de abril de 2019 de la Alcaldía 
              Municipal de Duitama (Boyacá).
            </p>
            <p className="historia-text">
              Hoy seguimos avanzando con la misma visión que nos impulsó desde el comienzo, 
              ser el mejor servicio de taxis en Duitama, un aliado de movilidad para todos, 
              ofreciendo un servicio eficiente, amable y seguro. Nuestra historia es la suma 
              de miles de recorridos que se han compartido con quienes confían en Tax Duitama 
              para llegar a su destino en Duitama y sus alrededores.
            </p>
        </div>

        <div className="valores-section">
          <h3 className="valores-title">Valores Corporativos</h3>
          <div className="valores-list">
            <span className="valor-tag">Respeto</span>
            <span className="valor-tag">Ética</span>
            <span className="valor-tag">Eficiencia</span>
            <span className="valor-tag">Puntualidad</span>
            <span className="valor-tag">Responsabilidad Social</span>
            <span className="valor-tag">Compromiso</span>
            <span className="valor-tag">Calidad</span>
            <span className="valor-tag">Seguridad</span>
            <span className="valor-tag">Honestidad</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MisionVision

