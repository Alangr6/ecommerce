import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { colRefProducts, db } from '../../firebase/Firebase'

export const useReviewsData = () => {
  const [reviews, setReviews] = useState([])
  const params = useParams()
  const colRefReviews = collection(db, `products2/${params.id}/review`)

  useEffect(() => {
    const getProducts = async () => {
      const dataReviews = await getDocs(colRefReviews)
      setReviews(dataReviews.docs.map((doc) => ({ ...doc.data() })))
    }
    getProducts()
  }, [])
  return { reviews }
}

export const useProductsData = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(colRefProducts)
      const productsArray = []
      for await (const snap of data.docs) {
        const product = snap.data()
        product.id = snap.id
        const price = await getDocs(collection(snap.ref, 'prices'))
        product.price = price.docs[0].data()
        product.priceId = price.docs[0].id
        productsArray.push(product)
      }
      setProducts(productsArray)
    }
    getProducts()
  }, [])
  return products
}
