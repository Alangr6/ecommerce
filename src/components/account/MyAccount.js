import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/Firebase";
import { actionTypes } from "../reducer/Reducer";
import { useStateValue } from "../reducer/StateProvider";

export const MyAccount = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  const [userDataArray, setUserDataArray] = useState(null);
  const navigate = useNavigate();

  const fakeData = [
    {
      name: "petu",
    },
  ];

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
  async function userData(idDoc) {
    const docRef = doc(db, `users/${idDoc}`);
    const query = await getDoc(docRef);
    if (query.exists()) {
      const infoUser = query.data();
      return infoUser;
    } else {
      await setDoc(docRef, { reaction: [...fakeData] });
      const query = await getDoc(docRef);
      const infoUser = query.data();
      return infoUser.reaction;
    }
  }

  useEffect(() => {
    async function fetchData() {
      const dataArray = await userData(user.email);
      setUserDataArray(dataArray);
    }
    return fetchData;
  }, []);
  return (
    <div>
      <button onClick={handleAuth}>Cerrar sesion</button>
      <h1>{!userDataArray ? 'n' : userDataArray}</h1>
    </div>
  );
};
