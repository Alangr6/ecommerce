import React from "react";
import { useHandleSignOut } from '../account_functions/accountFunctions'


export const Logout = () => {
  const handleSignOut = useHandleSignOut()

  const handleLogout = () => {
    handleSignOut()
  }
  return (
    <>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesion
      </button>
    </>
  );
};
