import accounting from "accounting";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/Firebase";
import { useStateValue } from "../reducer/StateProvider";

export const Total = () => {
  const [{ basket, user }] = useStateValue();

  const totalAmount = basket
    ?.map((item) => item.price)
    .reduce((amount, item) => amount + item, 0);
    let date = new Date();
    let currentDate =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  

 async function createCheckoutSession() {
    const collectionRef = collection(
      db,
      `customers/${user.uid}/checkout_sessions`
    );
 let {id} = await addDoc(collectionRef, {
      mode: "payment",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
      collect_shipping_address: true,
      line_items: basket.map((item) => {
         return { 
        quantity:1,
        price: item.priceId,
        }}),
        date:currentDate
    });
    const cancelStreaming =  onSnapshot(doc(db, `customers/${user.uid}/checkout_sessions/${id}`),
      (snapshot) => {
        let url = snapshot.data().url
        if(url){
          cancelStreaming()
          window.location.href = url
        }
      }
    )
  }

  return (
    <>
      <div className="checkout-div">
        <div className="total-div">
          <h3>Numero de productos: {basket?.length}</h3>
          <h3>Total: {accounting.formatMoney(totalAmount, "$")}</h3>
        </div>
        <div className="total-div">
          <button onClick={createCheckoutSession} className="form-button">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
