import React from "react";
import { MyAccount } from "../account/MyAccount";

export const CreateUser = () => {
  return (
    <div>
      <MyAccount></MyAccount>
      <h1 className='title-user'>Crear Usuario</h1>
      <form >
        <div className="form-user">
          <label className="label-user">Nombre </label>
          <input type="text" className="input-user" />
        </div>
        <div className="form-user">
          <label className="label-user">Email</label>
          <input type="email" className="input-user" />
        </div>
        <div className="form-user">
          <label className="label-user">Contrasena</label>
          <input type="password" className="input-user" />
        </div>
        <div className="form-user">
          <button type="submit" className="form-button">
            Crear Usuario
          </button>
        </div>
      </form>
    </div>
  );
};
