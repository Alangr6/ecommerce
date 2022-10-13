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

  if (user) {
    const docRef = doc(db, `customers/${user.uid}`);
    getDoc(docRef)
      .then((doc) => {
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
    return payments;
  };

  useEffect(() => {
    async function getPayments() {
      if (user) {
        const payments = await getOrders(user.uid);
        setOrders(payments);

        setNumberItems(() => {
          const newBasket = [];
          payments.forEach((order) => {
            const basket = [];
            order.items.forEach((b) => {
              const item = basket.find(
                (bi) => bi.description === b.description
              );
              if (item) {
                item.count += 1;
              } else {
                basket.push({
                  ...b,
                  count: 1,
                });
              }
            });
            newBasket.push([...basket]);
          });
          console.log(newBasket);
          return newBasket;
        });
      }
    }
    getPayments();
  }, [user]);
  //console.log(numberItems2); // bucle infinito

  if (user) {
    return (
      <>
        <div className="center">
          <h1 className="user-title">
            Tiene la sesion iniciada con {user.email}
          </h1>
          <div>
            <h1 className="order-data-title">Pedidos realizados</h1>
          </div>
          <div>
            {orders.length !== 0 ? (
              <table className="order-table">
                <thead className="order-table-thead">
                  <tr>
                    <th className="order-table-title">ID Pedido</th>
                    <th className="order-table-title">Pedidos</th>
                    <th className="order-table-title">Precio total</th>
                    <th className="order-table-title">Pago</th>
                  </tr>
                </thead>
                <tbody className="order-table-tbody">
                  {orders.map((order, index) => {
                    {
                      return (
                        <tr className="order-table-tr" key={index}>
                          <td className="order-table-data-id">{order.id}</td>
                          <td className="order-table-data-orders">
                              {numberItems.length === 0
                                ? "cargando"
                                : numberItems[index].map((i) => {
                                    return (
                                      <p>
                                        {" "}
                                        {i.count} {i.description}
                                      </p>
                                    );
                                  })}
                              &nbsp;
                          </td>

                          <td className="order-table-data">
                            {order.amount < 7000
                              ? (order.amount + 700) / 100
                              : order.amount / 100}
                          </td>

                          <td className="order-table-data">Completado</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            ) : (
              <h4>No se registra ningun pedido realizado</h4>
            )}
          </div>

          <Logout />
        </div>
      </>
    );
  } else {
    return null;
  }
};
