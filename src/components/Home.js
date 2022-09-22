import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
 
  return (
    <div>
      <section className="home-section">
        <div className="home-title3">
          <h1 className="home-title">
            Tienda Nº1 de venta especializada en N<sub>2</sub>O
          </h1>
          <h4 className="home-title2">
            Carga tus cremas de la forma mas rápida y con los materiales de más
            alta calidad
          </h4>
        </div>
      </section>
      <section className="section2">
        <h1 className="titleProducts">Nuestros productos más vendidos </h1>
        <h2 className="legend">
          Los productos más cotizados del mercado en la mejora del flujo de
          trabajo con bombonas de N<sub>2</sub>O
        </h2>

        <div className="box-general">
          <div className="box-and-title">
            <NavLink
              className="product-span"
              to="/product/cvXLf92YuqNLo9JVmcy8"
            >
              <div className="box">
                <img
                  className="product-1"
                  src="https://cdn-demmc.nitrocdn.com/qqeiDqMKAiHXxQvfFeTKNlRSVfVRulbz/assets/static/optimized/rev-ae55f8c/wp-content/uploads/2021/09/5556.jpg"
                  alt=""
                ></img>
              </div>{" "}
              <button className="w-btn-label">Bombona Greatwhip </button>
            </NavLink>
          </div>
          <div className="box-and-title">
            <NavLink
              className="product-span"
              to="/product/fLjvKXhzYMJfnpPaPMXv"
            >
              <div className="box">
                <img
                  className="product-2"
                  src="data:image/jpeg;base64,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"
                  alt=""
                ></img>
              </div>{" "}
              <button className="w-btn-label">
                Capsulas N<sub>2</sub>O 8gr
              </button>
            </NavLink>
          </div>
        </div>
      </section>
      <h1 className="title-question">Preguntas frecuentes</h1>

      <section className="section-question">
        <div className="box-question">
          <div className="box-question2">
            <div className="question-icons">
              <i className="fa-solid fa-flask fa-3x"></i>
            </div>

            <h3 className="question-title">
              ¿Que es el N<sub>2</sub>O?
            </h3>
            <p className="question-paragraph">
              Un compuesto de nitrógeno y oxígeno usado en los restaurantes o
              coctelería como propelente para la crema batida
            </p>
          </div>
          <NavLink className="product-span" to="/questions">
            <button className="question-buttons">Leer más</button>
          </NavLink>
        </div>
        <div className="box-question">
          <div className="box-question2">
            <div className="question-icons">
              <i className="fa-solid fa-users fa-3x"></i>
            </div>

            <h3 className="question-title">Sobre nosotros</h3>
            <p className="question-paragraph">
              Somos una empresa espanola distribuidora de oxido nitroso al mejor precio y
              unos tiempos de entrega excelentes.





            </p>
          </div>
          <NavLink className="product-span" to="/questions">
            <button className="question-buttons">Leer más</button>
          </NavLink>
        </div>
        <div className="box-question">
          <div className="box-question2">
            <div className="question-icons">
              <i className="fa-solid fa-truck fa-3x"></i>
            </div>

            <h3 className="question-title">Envíos</h3>
            <p className="question-paragraph">
              Envios solamente dentro de la peninsula.
              Tiempos de envio 24/48h
            </p>
          </div>
          <NavLink className="product-span" to="/questions">
            <button className="question-buttons">Leer más</button>
          </NavLink>
        </div>
      </section>
      
    </div>
  );
};