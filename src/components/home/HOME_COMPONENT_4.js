import React from 'react'
import { NavLink } from 'react-router-dom'

export const HOME_COMPONENT_4 = () => {
  return (
    <div className='home-section4-div'>
      <h1 className='home-section4-title-question'>Preguntas frecuentes</h1>

      <section className='home-section4-questions'>
        <div className='home-section4-box-question'>
          <div className='home-section4-box-question2'>
            <div>
              <i className='fa-solid fa-flask fa-3x'></i>
            </div>

            <h3 className='home-section4-question-title'>
              ¿Que es el N<sub>2</sub>O?
            </h3>
            <p className='home-section4-question-paragraph'>
              Un compuesto de nitrógeno y oxígeno usado en los restaurantes o
              coctelería como propelente para la crema batida
            </p>
          </div>
          <NavLink className='product-span' to='/questions'>
            <button className='home-section4-question-buttons'>Leer más</button>
          </NavLink>
        </div>
        <div className='home-section4-box-question'>
          <div className='home-section4-box-question2'>
            <div>
              <i className='fa-solid fa-users fa-3x'></i>
            </div>

            <h3 className='home-section4-question-title'>Sobre nosotros</h3>
            <p className='home-section4-question-paragraph'>
              Somos una empresa espanola distribuidora de oxido nitroso al mejor
              precio y unos tiempos de entrega excelentes.
            </p>
          </div>
          <NavLink className='product-span' to='/questions'>
            <button className='home-section4-question-buttons'>Leer más</button>
          </NavLink>
        </div>
        <div className='home-section4-box-question'>
          <div className='home-section4-box-question2'>
            <div>
              <i className='fa-solid fa-truck fa-3x'></i>
            </div>

            <h3 className='home-section4-question-title'>Envíos</h3>
            <p className='home-section4-question-paragraph'>
              Envios solamente dentro de la peninsula. Tiempos de envio 24/48h
            </p>
          </div>
          <NavLink className='product-span' to='/questions'>
            <button className='home-section4-question-buttons'>Leer más</button>
          </NavLink>
        </div>
      </section>
    </div>
  )
}
