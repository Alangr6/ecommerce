import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import {
   getDocs, 
} from 'firebase/firestore'
import { colRef, db } from "../firebase/Firebase";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: '100%',

  },
  main: {
    display:'grid',
    placeItems:'center'
    
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [products, setProducts] = useState([])


  useEffect(() => {
   const getProducts = async () => {
    const data = await getDocs(colRef)
    setProducts(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    
  }
   getProducts()
  }, [])
  
  

  return (
    <div className={classes.main}>
      <Grid container spacing={0}>
        {products.map((product) => {
          return (
            <Grid item sm={6} md={4}  className={classes.card}>
              <Product key={product.title} product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

