import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'
import { AddShoppingCart } from '@material-ui/icons'
import accounting from 'accounting'
import { actionTypes } from '../reducer/Reducer'
import { useStateValue } from '../reducer/StateProvider'
import { NavLink } from 'react-router-dom'

export default function Product({ product }) {
  const [{ basket }, dispatch] = useStateValue()
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

  let basketItemsArray = JSON.stringify(basket)
  localStorage.setItem('basketItems', basketItemsArray)
  return (
    <>
      <div className='product-div'>
        <div className='product-name-price-div'>
          <NavLink className='product-outlined' to={`/product/${product.id}`}>
            <h2 className='product-title'>{product.name}</h2>
            <h3 className='product-price'>
              {' '}
              {accounting.formatMoney(price, '€')}
            </h3>
          </NavLink>
        </div>
        <div className='product-img-div'>
          <NavLink className='product-outlined' to={`/product/${product.id}`}>
            <img className='product-img' src={product.images[0]} alt='' />
          </NavLink>
        </div>
        <div className='product-icons-div'>
          <IconButton aria-label='add to favorites' onClick={addToBasket}>
            <AddShoppingCart />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </div>
      </div>
    </>
  )
}
