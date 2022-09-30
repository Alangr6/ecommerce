import accounting from "accounting";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/Firebase";
import { useStateValue } from "../reducer/StateProvider";

export const Total = () => {
  const [{ basket, user }] = useStateValue();

  let totalAmount = basket
    ?.map((item) => item.price)
    .reduce((amount, item) => amount + item, 0);
   const shipping = 7  ?  totalAmount < 70 : 0
   console.log(shipping);
  let date = new Date();
  let currentDate =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  async function createCheckoutSession() {
    const collectionRef = collection(
      db,
      `customers/${user.uid}/checkout_sessions`
    );
    
    let { id } = await addDoc(collectionRef, {
      mode: "payment",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
      collect_shipping_address: true,
      shipping_address_collection: {
        allowed_countries: ['ESP'],
      },
      line_items: basket.map((item) => {
        return {
          quantity: 1,
          price: item.priceId,
        };
      }),
      date: currentDate,
      shipping:shipping
    });
    const cancelStreaming = onSnapshot(
      doc(db, `customers/${user.uid}/checkout_sessions/${id}`),
      (snapshot) => {
        let url = snapshot.data().url;
        if (url) {
          cancelStreaming();
          window.location.href = url;
        }
      }
    )
  }
//console.log(basket);//4veces
  return (
    <>
      <div className="checkout-div">
        <div className="total-div">
          <h3 className="total-price">Numero de productos: {basket?.length}</h3>
          <h3 className="total-price">Total: {totalAmount < 70 ? accounting.formatMoney(totalAmount + 7, "$") : accounting.formatMoney(totalAmount,"$")}</h3>
          <h6>{totalAmount < 70 ? `Coste de envio  ${accounting.formatMoney(7, "$")}`  : null} </h6>
        </div>
        <div className="checkout-button-div">
          <button onClick={createCheckoutSession} className="form-button">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
