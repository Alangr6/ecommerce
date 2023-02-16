import React from 'react'
import Login from '../login/Login'
import { useStateValue } from '../reducer/StateProvider'
import { OrderTable } from './components/OrderTable'
import { Logout } from './components/Logout'

export const DataAccount = () => {
  const [{ user }] = useStateValue()

  if (user) {
    return (
      <>
        <div className='account-main-div '>
          <div>
            <h1 className='user-title'>
              Tiene la sesion iniciada con {user.email}
            </h1>
            <h1 className='order-data-title'>Pedidos realizados</h1>
          </div>
          <OrderTable />
          <Logout />
        </div>
      </>
    )
  } else {
    return <Login />
  }
}
