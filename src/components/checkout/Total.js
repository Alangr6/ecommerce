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
    try {
      if (totalAmount < 70) {
        let { id } = await addDoc(collectionRef, {
          mode: "payment",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
          payment_method_types: ["card"],
          phone_number_collection: {
            enabled: true,
          },
          collect_shipping_address: true,
          shipping_address_collection: {
            allowed_countries: ["ESP"],
          },
          line_items: basket.map((item) => {
            return {
              quantity: 1,
              price: item.priceId,
            };
          }),

          shipping_rates: ["shr_1LpZ8pGHZjQaS7naLMfxum4D"],
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
        );
      } else {
        let { id } = await addDoc(collectionRef, {
          mode: "payment",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
          payment_method_types: ["card"],
          phone_number_collection: {
            enabled: true,
          },
          collect_shipping_address: true,
          shipping_address_collection: {
            allowed_countries: ["ESP"],
          },
          line_items: basket.map((item) => {
            return {
              quantity: 1,
              price: item.priceId,
            };
          }),
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
        );
      }
    } catch (error) {
      alert(
        "Se ha producido un error al procesar su compra. Pruebe a vaciar el carrito, o compruebe si tiene la sesion de usuario iniciada"
      );
    }
    localStorage.removeItem("basketItems");
  }

  //console.log(basket);//4veces
  return (
    <>
      <div className="checkout-div">
        <div className="total-div">
          <h3>Numero de productos: {basket?.length}</h3>
          {basket?.length === 0 ? null : (
            <div>
              <h3>
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
          )}
        </div>
        <div className="checkout-button-div">
          <button
            disabled={loading || basket?.length === 0}
            onClick={createCheckoutSession}
            className="checkout-button"
          >
            {loading ? "Procesando compra..." : "Finalizar pago"}
          </button>
        </div>
      </div>
    </>
  );
};
