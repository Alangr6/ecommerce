import React from 'react'
import Grid from '@material-ui/core/Grid'
import Product from './Product'
import { useProductsData } from './functions/useData'

export default function Products() {
  const products = useProductsData()
  
  if (products.length === 0) {
    return (
      <div className='loader-div'>
        <span className='loader'></span>
      </div>
    )
  } else
    return (
      <>
        <div className='products-page-div'>
          <div className='products-title-div'>
            <h1 className='products-title'>Tienda</h1>
          </div>
          <div className='products-div'>
            <Grid container spacing={0}>
              {products.map((product) => {
                return (
                  <Grid key={product.id} item sm={6} md={4}>
                    <Product product={product} />
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </div>
      </>
    )
}
