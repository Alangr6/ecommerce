import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import { collection, getDocs } from "firebase/firestore";
import { colRefProducts } from "../firebase/Firebase";

export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await getDocs(colRefProducts);
    const productos = [];
    for await (const snap of data.docs) {
      const product = snap.data();
      product.id = snap.id;
      const price = await getDocs(collection(snap.ref, "prices"));
      product.price = price.docs[0].data();
      product.priceId = price.docs[0].id;
      productos.push(product);
    }
    return productos;
  };

  useEffect(() => {
    async function getProducts2() {
      const products2 = await getProducts();
      setProducts(products2);
    }
    getProducts2();
  }, []);
  console.log(products); //2veces

  return (
    <>
      <div className="products-page-div">
        <div className="products-title-div">
          <h1 className="products-title">Tienda</h1>
        </div>
        <div className="products-div">
          <Grid container spacing={0}>
            {products.map((product) => {
              return (
                <Grid key={product.id} item sm={6} md={4}>
                  <Product product={product} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}
