import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../reducer/StateProvider'
import CheckoutCard from '../CheckoutCard'

export const BasketItems = () => {
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
      return newBasket;
    });
  }, [basket]);

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
          <h1 className="checkout-login-disclaimer">
            {!user
              ? "Necesita iniciar sesión para proceder al método de pago"
              : ""}
          </h1>

          <div className="table-container">
            <table className="checkout-table" aria-label="customized table">
              <thead>
                <tr>
                  <th className="checkout-card-th"></th>
                  <th className="checkout-card-th">Cantidad</th>
                  <th className="checkout-card-th">Producto</th>
                  <th className="checkout-card-th">Precio</th>
                  <th className="checkout-card-th"></th>
                </tr>
              </thead>

              {basketCart?.map((item, index) => (
                <CheckoutCard key={index} item={item} />
              ))}
            </table>
          </div>
        </>
      );
    }
  }
  return (
    CheckoutBasketData()
  )

}
