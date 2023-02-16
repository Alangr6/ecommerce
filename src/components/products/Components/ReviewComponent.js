import { Grid, TextField } from '@material-ui/core'
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { db } from '../../firebase/Firebase'
import { useStateValue } from '../../reducer/StateProvider'

export const ReviewComponent = ({ reviews, product }) => {
  const [{ user }] = useStateValue()
  const [review, setReview] = useState('')

  const inputReview = document.getElementById('input-review')
  let date = new Date()
  let currentDate =
    date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()

  async function addReview() {
    if (inputReview.value.trim().length === 0) {
      return null
    } else {
      const collectionRef = collection(db, `products2/${product.id}/review`)
      await addDoc(collectionRef, {
        review: review,
        userEmail: user.email,
        date: currentDate,
      })

      window.location.reload()
    }
  }
  return (
    <div className='product-review-div'>
      <div>
        <NavLink to='/products'>
          <button className='go-back-button'>Volver</button>
        </NavLink>
      </div>
      <Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='input-review'
            name='input-review'
            label='Anade un comentario'
            fullWidth
            onChange={(e) => setReview(e.target.value)}
            value={review}
          />
        </Grid>
      </Grid>
      <button
        id='btn-submit'
        onClick={addReview}
        type='submit'
        className='review-button'
      >
        Publicar
      </button>
      <div className='all-reviews-div'>
        <h3 className='reviews-title'>Comentarios:</h3>
        {reviews.map((review) => {
          return (
            <div className='reviews-div' key={review.review}>
              <p className='reviews-paragraph'>
                <strong>{review.userEmail}</strong> : {review.review}
              </p>
              <p>{review.date}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
