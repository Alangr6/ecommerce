import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/Firebase";
import { useStateValue } from "../reducer/StateProvider";
import { Logout } from "./Logout";

export const DataAccount = () => {
  const [{ user }] = useStateValue();
  const [userData, setUserData] = useState("");
  const [orders, setOrders] = useState([]);
  const [numberItems, setNumberItems] = useState([]);
  const [alan, setAlan] = useState([]);

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
    const paidOrders = query(
      collectionRefOrders,
      where("status", "==", "succeeded")
    );
    const snaps = await getDocs(paidOrders);
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
  }, [user]);
  //console.log(orders); bucle infinito
  //console.log(userData);

 /*  useEffect(() => {
    setAlan(() => {
      orders.map((order) => {
        order.items.map((item) => {
          setNumberItems(item.description);
        });
      });
    });
  }, []); */
  //console.log(numberItems);
  if (user) {
    return (
      <>
        <h1 className="user-title">
          Tiene la sesion iniciada con {user.email}
        </h1>
        <div className="center">
        <div className="product-page-div">
          <hr className="order-data-hr" />
          <h1 className="order-data-title">Pedidos realizados</h1>
          <hr className="order-data-hr2" />
        </div>     
             {orders.length != 0 ? (
            <table className="order-table">
              <thead>
                <tr>
                  <th className="order-table-title">N Pedido</th>
                  <th className="order-table-title">productos</th>
                  <th className="order-table-title">Precio total</th>
                  <th className="order-table-title">Pago</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  return (
                    <tr key={index}>
                      <td className="order-table-data"></td>
                      <td className="order-table-data">
                        {order.items
                          ? order.items.map((item, index) => {
                              return <p key={index}>{item.description}</p>;
                            })
                          : ""}
                      </td>
                      <td className="order-table-data">{order.amount / 100}</td>
                      <td className="order-table-data">Completado</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h4>No se registra ningun pedido realizado</h4>
          )}
                  <Logout />

        </div>
      </>
    );
  } else {
    return null;
  }
};
