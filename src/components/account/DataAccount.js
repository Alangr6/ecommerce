import React from "react";
import { useStateValue } from "../reducer/StateProvider";
import { MyAccount } from "./MyAccount";

export const DataAccount = () => {
  const [{ user }] = useStateValue();

  if(user){
    return (
        <>
          <MyAccount />
          <h1 className="user-title">Tiene la sesion iniciada con {user.email}</h1>

        </>
      );
  } else {
    return null
  }
  
};
