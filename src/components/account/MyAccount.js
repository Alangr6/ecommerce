import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { actionTypes } from "../reducer/Reducer";
import { useStateValue } from "../reducer/StateProvider";

export const MyAccount = () => {
  const [{ user, basket }, dispatch] = useStateValue();
  const navigate = useNavigate()

  const handleAuth = () => {
    if(user){
      auth.signOut()
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      })
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      })
      navigate('/')
    }
  }

  return (
    <div>
      <button onClick={handleAuth} >Cerrar sesion</button>
    </div>
  );
};
