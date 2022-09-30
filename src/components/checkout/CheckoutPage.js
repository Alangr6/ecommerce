import React, { useEffect, useState } from "react";
import CheckoutCard from "./CheckoutCard";
import { Total } from "./Total";
import { useStateValue } from "../reducer/StateProvider";



export const CheckoutPage = () => {
  const [{ basket, user }] = useStateValue();
  const [basketCart, setBasketCart] = useState([]);

  useEffect(() => {
    setBasketCart(() => {
      const newBasket = [];
      basket.forEach((b) => {
        const item = newBasket.find((bi) => bi.product === b.product);
        if (item) {
          item.count += 1;
        } else {
          newBasket.push({
            ...b,
            count: 1,
          });
        }
      });
      console.log(newBasket);
      return newBasket;
    });
  }, [basket]);
  //console.log(basketCart);//6 veces
  function CheckoutBasketData() {
    if (basket.length === 0) {
      return (
        <div className="blank-div">
          <h1 className="empty-cart">
          Su carrito se encuentra actualmente vacio
        </h1>
        </div>
        
      );
    } else {
      return (
        <>
          <h1 className="center">
            {!user
              ? "Necesita iniciar sesion para proceder al metodo de pago"
              : ""}
          </h1>

          <div className="table-container">
       
              <table className='checkout-table' aria-label="customized table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th></th>
                  </tr>
                </thead>

                {basketCart?.map((item, index) => (
                  <CheckoutCard  key={index} item={item} />
                ))}
              </table>
          </div>
        </>
      );
    }
  }

  return (
    <div className="checkoutpage center">
      <h1 className="checkout-title">Carrito de compra</h1>
      <CheckoutBasketData />
      <Total />
    </div>
  );
};
