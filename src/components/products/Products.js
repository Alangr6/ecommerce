import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import { collection, getDocs } from "firebase/firestore";
import { colRefProducts, db } from "../firebase/Firebase";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: "100%",
  },
  main: {
    display: "grid",
    placeItems: "center",
  },
}));

export default function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

    const getProducts = async () => {
      const data = await getDocs(colRefProducts);
     const productos = [];
      for await (const snap of data.docs) {
        const product = snap.data();
        product.id = snap.id;
        const price = await getDocs(collection(snap.ref, "prices"));
        product.price = price.docs[0].data();
        product.priceId = price.docs[0].id
        productos.push(product);
      }
      return productos
    };

    useEffect(() => {
      async function getProducts2(){
        const products2 = await getProducts()
        setProducts(products2)
      }
      getProducts2()
    },[])
    
    return (
    <div className={classes.main}>
      <Grid container spacing={0}>
        {products.map((product) => {
          return (
            <Grid key={product.id} item sm={6} md={4} className={classes.card}>
              <Product  product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
