import React from 'react'
import { useStateValue } from '../reducer/StateProvider'
import { ReviewComponent } from './Components/ReviewComponent'
import { AddToBasketTable } from './Components/AddToBasketTable'
import { useProductsData, useReviewsData } from './functions/useData'
import { useParams } from 'react-router-dom'

export const ProductScreen = () => {
  const params = useParams()
  const [{ basket }] = useStateValue()
  const { reviews } = useReviewsData()
  const products = useProductsData()
  const product = products.find((p) => p.id === params.id)

  let basketItemsArray = JSON.stringify(basket)
  localStorage.setItem('basketItems', basketItemsArray)

  if (!product) {
    return (
      <div className='loader-div'>
        <span className='loader'></span>
      </div>
    )
  } else {
    return (
      <>
        <div className='all-products-screen-div'>
          <div className='product-screen-div0'>
            <div className='product-screen-div'>
              <div className='product-screen-card-div'>
                <img
                  className='product-screen-image'
                  src={product.images[0]}
                  alt=''
                />
              </div>
            </div>

            <div className='product-screen-div2'>
              <h1 className='product-screen-title'>{product.name}</h1>

              <div className='product-screen-description'>
                <strong className='product-screen-strong-description'>
                  Descripción
                </strong>
                :<p> {product.description}</p> {}
              </div>
            </div>
            <AddToBasketTable product={product} />
          </div>
          <ReviewComponent reviews={reviews} product={product} />
        </div>
      </>
    )
  }
}
