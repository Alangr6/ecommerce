import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../reducer/StateProvider'
import { collection, getDocs } from 'firebase/firestore'
import { colRefProducts, db } from '../firebase/Firebase'
import { ReviewComponent } from './productScreenComponents/ReviewComponent'
import { AddBasketTable } from './productScreenComponents/AddBasketTable'

export const ProductScreen = () => {
  const [products, setProducts] = useState([])
  const [prices, setPrices] = useState([])
  const [reviews, setReviews] = useState([])
  const [{ basket }] = useStateValue()
  const params = useParams()
  const product = products.find((p) => p.id === params.id)
  const colRefReviews = collection(db, `products2/${params.id}/review`)
  const colRefPrices = collection(db, `products2/${params.id}/prices`)

  let basketItemsArray = JSON.stringify(basket)
  localStorage.setItem('basketItems', basketItemsArray)

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(colRefProducts)
      const dataPrice = await getDocs(colRefPrices)
      const dataReviews = await getDocs(colRefReviews)

      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setPrices(dataPrice.docs.map((doc) => ({ ...doc.data() })))
      setReviews(dataReviews.docs.map((doc) => ({ ...doc.data() })))
    }
    getProducts()
  }, [])

  console.log(basket) //12veces

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
            <AddBasketTable product={product} prices={prices} />
          </div>
          <ReviewComponent reviews={reviews} product={product} />
        </div>
      </>
    )
  }
}
