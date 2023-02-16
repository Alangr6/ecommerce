import React from 'react'
import accounting from 'accounting'
import { actionTypes } from '../../reducer/Reducer'
import { useStateValue } from '../../reducer/StateProvider'

export const AddToBasketTable = ({ product }) => {
  const [,dispatch] = useStateValue()
  const price = product.price.unit_amount / 100

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        product: product.name,
        price: price,
        id: product.id,
        image: product.images[0],
        priceId: product.priceId,
        count: 1,
      },
    })
  }

  return (
    <div className='product-table-screen-div'>
      <table className='product-screen-table'>
        <tbody>
          <tr>
            <td className='order-table-screen'>Precio:</td>

            <td className='order-table-screen-right'>
              {accounting.formatMoney(price, '€')}
            </td>
          </tr>
          <tr>
            <td className='order-table-screen'>Estado:</td>

            <td className='order-table-screen-right'>En stock</td>
          </tr>
          <tr>
            <td className='order-table-screen-button'>
              <button onClick={addToBasket} className='add-cart-button '>
                Anadir al carrito
              </button>
            </td>
            <td className='order-table-screen-button'></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
