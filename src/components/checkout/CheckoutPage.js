import React from "react";
import { Total } from "./components/Total";
import { BasketItems } from './components/BasketItems'

export const CheckoutPage = () => {
  
  return (
    <div className="checkoutpage center">
      <div>
        <h1 className="checkout-title">Carrito de compra</h1>
      </div>
      <BasketItems />
      <Total />
    </div>
  );
};
