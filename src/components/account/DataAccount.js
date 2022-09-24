import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/Firebase";
import { useStateValue } from "../reducer/StateProvider";
import { Logout } from "./Logout";
import { MyAccount } from "./MyAccount";

export const DataAccount = () => {
  const [{ user }] = useStateValue();
  const [userData, setUserData] = useState("");
  const [orders, setOrders] = useState([]);

  if (user) {
    const docRef = doc(db, `customers/${user.uid}`);
    getDoc(docRef)
      .then((doc) => {
        //console.log(doc.data(),doc.id);
        setUserData(doc.data());
      })
      .catch((err) => console.log(err.message));
  }

  const getOrders = async (uid) => {
    const collectionRefOrders = collection(db, `customers/${uid}/payments`);
    const snaps = await getDocs(collectionRefOrders);
    const payments = snaps.docs.map((snap) => snap.data());
    console.log(payments);
    return payments;
  };

  useEffect(() => {
    async function getPayments() {
      if (user) {
        const payments = await getOrders(user.uid);
        setOrders(payments);
      }
    }
    getPayments();
  }, []);
  //console.log(orders); bucle infinito
  //console.log(userData);

 
  
  if (user) {
    return (
      <>
        <MyAccount />
        <h1 className="user-title">
          Tiene la sesion iniciada con {user.email}
        </h1>
        <h1>nombre:{userData.name}</h1>
     {/*    {orders ? 
          orders.map((order) => {
            return (
              <div>
                <h1>{order.amount/100}</h1>
                <h2>{order.items}</h2>
              </div>
            );
          }):''} */}
      </>
    );
  } else {
    return null;
  }
};
