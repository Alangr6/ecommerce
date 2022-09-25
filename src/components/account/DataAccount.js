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
  }, [user]);
  //console.log(orders); bucle infinito
  //console.log(userData);
  const recipes = [
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "<https://spoonacular.com/recipeImages/716429-312x231.jpg>",
      dishTypes: [
        {
          name: "lunch",
          name2: "main course",
          name3: "main dish",
          name4: "dinner",
        },
        {
          name: "lunch2",
          name2: "main 2course",
          name3: "main 2dish",
          name4: "dinner2",
        },
      ],
      recipe: {
        // recipe data
      },
    },
  ];
  if (user) {
    return (
      <>
        <h1 className="user-title">
          Tiene la sesion iniciada con {user.email}
        </h1>
        <h1>nombre:{userData.name}</h1>
        <div className="center">
          <h1>Pedidos realizados:</h1>
          <table>
            <thead>
              <tr>
                <th>N Pedido</th>

                <th>productos</th>
                <th>Precio total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr>
                    <td></td>
                    <td>
                      {order.items
                        ? order.items.map((item) => {
                            return <p>{item.description}</p>;
                          })
                        : ""}
                    </td>
                    <td>{order.amount / 100}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  } else {
    return null;
  }
};
