import React from 'react'
import { NavLink } from 'react-router-dom'

export const HomeComponent3 = () => {
  return (
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
  </section>  )
}
