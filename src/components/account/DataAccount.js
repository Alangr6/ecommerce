import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase/Firebase";
import { useStateValue } from "../reducer/StateProvider";
import { Logout } from "./Logout";
import { MyAccount } from "./MyAccount";

export const DataAccount = () => {
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

  //console.log(userData);
  if (user) {
    return (
      <>
      <MyAccount/>
        <h1 className="user-title">
          Tiene la sesion iniciada con {user.email}
        </h1>
        <Logout/>
      </>
    );
  } else {
    return null;
  }
};
