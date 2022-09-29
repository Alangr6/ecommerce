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
      <section className="section1">
        <img
          className="section1-img"
          src="https://images.pexels.com/photos/8477780/pexels-photo-8477780.jpeg?auto=compress&cs=tinysrgb&w=1000"
        />
        <div className="section1-div">
          <h1 className="section1-title">Por que comprar en Creamer?</h1>
          <hr className="section-hr" />
          <h3 className="section1-paragraph">
            En Creamer ofrecemos un servicio al cliente excelente.
          </h3>
          <h3 className="section1-paragraph2" >
            Nos gusta satisfacer al cliente con sus necesidades mas importantes,
            y es por eso por lo que no tendras que esperar mas para que lleguen
            tus cargadores de crema.
          </h3>
          <h3 className="section1-paragraph2">
            Enviamos tus cargadores de crema y en 24 horas los tendras en tu
            domicilio. Es por eso es que somos la tienda numero 1 en Espana.
          </h3>
        </div>
      </section>
      <section className="section2">
        <h1 className="title-products">Nuestros productos más vendidos </h1>
        <h2 className="legend">
          Los productos más cotizados del mercado en la mejora del flujo de
          trabajo con bombonas de N<sub>2</sub>O
        </h2>

        <div className="box-general">
          <div className="box-and-title">
            <NavLink className="product-span" to="/product/prod_MTl1i3yl80nzmO">
              <div className="box">
                <img
                  className="product-1"
                  src="https://grtsupply.com/wp-content/uploads/2021/08/box.png"
                  alt=""
                ></img>
              </div>{" "}
              <button className="w-btn-label">Bombona Greatwhip </button>
            </NavLink>
          </div>
          <div className="box-and-title">
            <NavLink className="product-span" to="/product/prod_MTl3O3fyS1aBHI">
              <div className="box">
                <img
                  className="product-2"
                  src="https://grtsupply.com/wp-content/uploads/2021/11/321312321321.png"
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
      <div className="background-div">
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
                Somos una empresa espanola distribuidora de oxido nitroso al
                mejor precio y unos tiempos de entrega excelentes.
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
                Envios solamente dentro de la peninsula. Tiempos de envio 24/48h
              </p>
            </div>
            <NavLink className="product-span" to="/questions">
              <button className="question-buttons">Leer más</button>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};
