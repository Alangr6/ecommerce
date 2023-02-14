import React, { useEffect, useState } from 'react'
import Login from '../Log/Login'
import { useStateValue } from '../reducer/StateProvider'
import { getOrders } from './account_functions/accountFunctions'
import { Logout } from './Logout'

export const DataAccount = () => {
  const [{ user }] = useStateValue()
  //const [userData, setUserData] = useState('')
  const [orders, setOrders] = useState([])
  const [numberItems, setNumberItems] = useState([])

 /*  if (user) {
    const docRef = doc(db, `customers/${user.uid}`)
    getDoc(docRef)
      .then((doc) => {
        setUserData(doc.data())
      })
      .catch((err) => console.log(err.message))
  } */
  useEffect(() => {
    async function getPayments() {
      if (user) {
        const payments = await getOrders(user.uid)
        setOrders(payments)

        setNumberItems(() => {
          const newBasket = []
          payments.forEach((order) => {
            const basket = []
            order.items.forEach((b) => {
              const item = basket.find((bi) => bi.description === b.description)
              if (item) {
                item.count += 1
              } else {
                basket.push({
                  ...b,
                  count: 1,
                })
              }
            })
            newBasket.push([...basket])
          })
          
          return newBasket
        })
      }
    }
    getPayments()
  }, [user])
  //console.log('hola'); //5veces

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
          <div>
            {orders.length !== 0 ? (
              <ul className='responsive-table'>
                <li className='table-header'>
                  <div className='col col-1-header'>ID Pedido</div>
                  <div className='col col-2'>Pedidos</div>
                  <div className='col col-3'>Precio total</div>
                  <div className='col col-4'>Pago</div>
                </li>
                {orders.map((order, index) => {
                  
                  return (
                    
                    <li className='table-row' key={index}>
                      <div className='col col-1' data-label='Job Id'>
                        {order.id}
                      </div>
                      <div className='col col-2' data-label='Customer Name'>
                        {numberItems.length === 0
                          ? 'cargando'
                          : numberItems[index].map((item, index) => {
                              return (
                                <p key={index}>
                                  {' '}
                                  {item.count} {item.description}
                                </p>
                              )
                            })}
                      </div>
                      <div className='col col-3' data-label='Amount'>
                        {order.amount < 7000
                          ? (order.amount + 700) / 100
                          : order.amount / 100}{' '}
                      </div>
                      <div className='col col-4' data-label='Payment Status'>
                        Completado
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <h4>No se registra ningun pedido realizado</h4>
            )}
          </div>
          <Logout />
        </div>
      </>
    )
  } else {
    return (<Login />)
  }
}
