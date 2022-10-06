import accounting from "accounting";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/Firebase";
import { useStateValue } from "../reducer/StateProvider";

export const Total = () => {
  const [{ basket, user }] = useStateValue();
  const [loading, setLoading] = useState(false);

  let totalAmount = basket
    ?.map((item) => item.price)
    .reduce((amount, item) => amount + item, 0);

  async function createCheckoutSession() {
    const collectionRef = collection(
      db,
      `customers/${user.uid}/checkout_sessions`
    );
    setLoading(true);
    const paymentSession = await addDoc(collectionRef, {
      mode: "payment",
      payment_method_types: ['card'],
      phone_number_collection: {
        enabled: true,
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 1500,
              currency: 'usd',
            },
            display_name: 'Next day air',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 1,
              },
            },
          },
        },
      ],
      line_items: basket.map((item) => {
        return {
          quantity: 1,
          price: item.priceId,
        };
      }),
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
    let { id } = paymentSession;
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
    
     //localStorage.removeItem('basketItems')
    
  }
  //console.log(basket);//4veces
  return (
    <>
      <div className="checkout-div">
        <div className="total-div">
          <h3 className="total-price">Numero de productos: {basket?.length}</h3>
          <h3 className="total-price">
            Total:{" "}
            {totalAmount < 70
              ? accounting.formatMoney(totalAmount + 7, "$")
              : accounting.formatMoney(totalAmount, "$")}
          </h3>
          <h6>
            {totalAmount < 70
              ? `Coste de envio  ${accounting.formatMoney(7, "$")}`
              : null}{" "}
          </h6>
        </div>
        <div className="checkout-button-div">
          <button
            disabled={loading}
            onClick={createCheckoutSession}
            className="form-button"
          >
            {loading ? "Procesando compra..." : "Finalizar pago"}
          </button>
        </div>
      </div>
    </>
  );
};
