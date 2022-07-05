import React from 'react'
import { MyAccount } from '../account/MyAccount'

export const Login = () => {
  return (
<div>
      <MyAccount></MyAccount>
      <h1 className='title-user'>Iniciar Sesion</h1>
      <form >

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
            Iniciar sesion
          </button>
        </div>
      </form>
    </div>    
  )
}
