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
    width: '90%'
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [products, setProducts] = useState([])


  useEffect(() => {
   const getUsers = async () => {
    const data = await getDocs(colRef)
    setProducts(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    
  }
   getUsers()
  }, [])
  
  
console.log(products);

  return (
    <div className="all-products">
      <Grid container  spacing={0}>
        {products.map((product) => {
          return (
            <Grid item sm={12} md={6} lg={4} className={classes.card}>
              <Product key={product.title} product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

