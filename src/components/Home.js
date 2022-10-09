import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="home-section-div">
          <h1 className="home-title">
            Tienda Nº1 de venta especializada en N<sub>2</sub>O
          </h1>
          <h4 className="home-title2">
            Carga tus cremas de la forma mas rápida y con los materiales de más
            alta calidad
          </h4>
        </div>
      </section>
      <section className="home-section2">
        <img
          className="home-section2-img"
          alt="section2"
          src="https://images.pexels.com/photos/8477780/pexels-photo-8477780.jpeg?auto=compress&cs=tinysrgb&w=1000"
        />
        <div className="home-section2-div">
          <h1 className="home-section2-title">Por que comprar en Creamer?</h1>
          <hr className="home-section2-hr" />
          <h3 className="home-section2-paragraph">
            En Creamer ofrecemos un servicio al cliente excelente.
          </h3>
          <h3 className="home-section2-paragraph2">
            Nos gusta satisfacer al cliente con sus necesidades mas importantes,
            y es por eso por lo que no tendras que esperar mas para que lleguen
            tus cargadores de crema.
          </h3>
          <h3 className="home-section2-paragraph2">
            Enviamos tus cargadores de crema y en 24 horas los tendras en tu
            domicilio. Es por eso es que somos la tienda numero 1 en Espana.
          </h3>
        </div>
      </section>
      <section className="home-section3">
        <h1 className="home-section3-title">
          Nuestros productos más vendidos{" "}
        </h1>
        <h2 className="home-section3-legend">
          Los productos más cotizados del mercado en la mejora del flujo de
          trabajo con bombonas de N<sub>2</sub>O
        </h2>

        <div className="home-section3-box-div">
          <div className="home-section3-box-and-title">
            <NavLink
              className="product-span2"
              to="/product/prod_MTl1i3yl80nzmO"
            >
              <div className="box">
                <img
                  className="box-product-img"
                  src="https://grtsupply.com/wp-content/uploads/2021/08/box.png"
                  alt=""
                ></img>
              </div>{" "}
              <button className="box-product-button">Bombona Greatwhip </button>
            </NavLink>
          </div>
          <div className="home-section3-box-and-title">
            <NavLink
              className="product-span3"
              to="/product/prod_MTl3O3fyS1aBHI"
            >
              <div className="box2">
                <img
                  className="box-product2-img"
                  src="https://grtsupply.com/wp-content/uploads/2021/11/321312321321.png"
                  alt=""
                ></img>
              </div>{" "}
              <button className="box-product-button">
                Capsulas N<sub>2</sub>O 8gr
              </button>
            </NavLink>
          </div>
        </div>
      </section>
      <div className="home-section4-div">
        <h1 className="home-section4-title-question">Preguntas frecuentes</h1>

        <section className="home-section4-questions">
          <div className="home-section4-box-question">
            <div className="home-section4-box-question2">
              <div>
                <i className="fa-solid fa-flask fa-3x"></i>
              </div>

              <h3 className="home-section4-question-title">
                ¿Que es el N<sub>2</sub>O?
              </h3>
              <p className="home-section4-question-paragraph">
                Un compuesto de nitrógeno y oxígeno usado en los restaurantes o
                coctelería como propelente para la crema batida
              </p>
            </div>
            <NavLink className="product-span" to="/questions">
              <button className="home-section4-question-buttons">
                Leer más
              </button>
            </NavLink>
          </div>
          <div className="home-section4-box-question">
            <div className="home-section4-box-question2">
              <div>
                <i className="fa-solid fa-users fa-3x"></i>
              </div>

              <h3 className="home-section4-question-title">Sobre nosotros</h3>
              <p className="home-section4-question-paragraph">
                Somos una empresa espanola distribuidora de oxido nitroso al
                mejor precio y unos tiempos de entrega excelentes.
              </p>
            </div>
            <NavLink className="product-span" to="/questions">
              <button className="home-section4-question-buttons">
                Leer más
              </button>
            </NavLink>
          </div>
          <div className="home-section4-box-question">
            <div className="home-section4-box-question2">
              <div>
                <i className="fa-solid fa-truck fa-3x"></i>
              </div>

              <h3 className="home-section4-question-title">Envíos</h3>
              <p className="home-section4-question-paragraph">
                Envios solamente dentro de la peninsula. Tiempos de envio 24/48h
              </p>
            </div>
            <NavLink className="product-span" to="/questions">
              <button className="home-section4-question-buttons">
                Leer más
              </button>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};
