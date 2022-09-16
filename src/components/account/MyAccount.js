import { doc, getDoc} from "firebase/firestore";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {  db } from "../firebase/Firebase";
import { useStateValue } from "../reducer/StateProvider";

export const MyAccount = () => {
  const [{ user }] = useStateValue();
  const [userData, setUserData] = useState("");

 

  if (user) {
    const docRef = doc(db, "users", user.uid);
    getDoc(docRef)
      .then((doc) => {
        //console.log(doc.data(),doc.id);
        setUserData(doc.data());
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <>
      <div className="user-div">
        
        <div className="user-buttons-div">
          <NavLink  to={!user ? '/' : `/account/${user.uid}/data-account`}>
            <button className="user-buttons"> Datos de la cuenta</button>
          </NavLink>
          <NavLink  to={!user ? '/' : `/account/${user.uid}/orders`}>
          <button className="user-buttons">Pedidos</button>
          </NavLink>
          <NavLink  to={!user ? '/' : `/account/${user.uid}/data-address`}>
          <button className="user-buttons">Direccion de envio</button>
          </NavLink>
          <NavLink  to={!user ? '/' : `/account/${user.uid}/logout`}>

          <button className="user-buttons">Cerrar sesion</button>
          </NavLink>

        </div>
      </div>

    
      
    </>
  );
};
