import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/Firebase";
import { actionTypes } from "../reducer/Reducer";
import { useStateValue } from "../reducer/StateProvider";

export const MyAccount = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      navigate("/login");
    }
  };

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
      <h1 className="user-title">
        Tiene la sesion iniciada con {userData.email}
      </h1>
      <div className="user-buttons-div">
        <button className="user-buttons">Datos de la cuenta</button>
        <button className="user-buttons">Pedidos</button>
        <button className="user-buttons">Direccion de envio</button>
        <button className="user-buttons"></button>
      </div>
      </div>
      
      <button onClick={handleAuth}>Cerrar sesion</button>
      <h5>{userData.name}</h5>
    </>
  );
};
