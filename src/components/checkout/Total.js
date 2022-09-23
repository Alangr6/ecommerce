import accounting from "accounting";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { useStateValue } from "../reducer/StateProvider";

export const Total = () => {
  const [{ basket,user }] = useStateValue();

  const totalAmount = basket
    ?.map((item) => item.price)
    .reduce((amount, item) => amount + item, 0);

    function createCheckoutSession(e) {
      e.preventDefault();

        const collectionRef = collection(db, `customer/${user.uid}/checkout_sessions`);
        addDoc(collectionRef, {
          mode: "payment",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
          collect_shipping_address: true,
          line_items: {
            basket: basket.map((item) => item.product),
            price: totalAmount,
          },
        });
      console.log('h');
    }

  return (
    <>
      <div className="checkout-div">
        <div className="total-div">
          <h3>Numero de productos: {basket?.length}</h3>
          <h3>Total: {accounting.formatMoney(totalAmount, "$")}</h3>
        </div>
        <div className="total-div">
        
          <button onClick={createCheckoutSession} className="form-button">Checkout</button>

        </div>
      </div>
    </>
  );
};
