import { NavLink, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import accounting from "accounting";
import { useStateValue } from "../reducer/StateProvider";
import { actionTypes } from "../reducer/Reducer";
import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getDocs } from "firebase/firestore";
import { colRef } from "../firebase/Firebase";



export const ProductScreen = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
   const getUsers = async () => {
    const data = await getDocs(colRef)
    setProducts(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    
  }
   getUsers()
  }, [])

  const useStyles = makeStyles((theme) => ({
    media: {
      display: 'flex',
      justifyContent: 'center',
      
    },
    action: {
      padding: 16,
    },
    card: {
      position: 'relative',
      width: '300px',
      margin: '3rem',
      border: 'hidden',
      borderRadius: '10px',
      maxHeight:'600px',
      
    },
  }));
  const classes = useStyles();

  const params = useParams();
  const product = products.find((p) => p.id == params.id);
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        product: product.product,
        price: product.price,
        id: product.id,
        image:product.image
      },
    });
  };
  console.log(product);
  if(!product){
    return <h1></h1>
  } else {
    return (
      <>
        <div className="all-products-screen">
          <Card className={classes.card}>
            <div className="">
              <CardMedia
                className={classes.media}
                
                title="bombona Fastgas"
              ><img className="product-screen-image" src={product.image} alt="" /></CardMedia>
            </div>
          </Card>{" "}
          <div className="product-screen-div">
            <h1 className="product-screen-title">{product.product}</h1>
            <hr />
            <div className="product-screen-stars">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <p>&#11088;</p>
                ))}
            </div>
            <hr />
            
            <p className="product-screen-description">
              {" "}
              <strong>Descripcion: {product.description}</strong> {}
            </p>
           
          </div>
          <div className="product-table-screen">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow key={product.id}>
                    <TableCell component="th" scope="row">
                      Precio:
                    </TableCell>
                    <TableCell align="right">{accounting.formatMoney(product.price, "€")}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell component="th" scope="row">
                      Estado:
                    </TableCell>
                    <TableCell align="right">en Stock</TableCell>
                  </TableRow>
                 
                    <TableCell >
                      <button onClick={addToBasket} className="add-cart-button">Anadir al carrito</button>
                      </TableCell>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          
        </div>
        <NavLink to='/products'>
        <button className="go-back-button">Volver</button>
  
        </NavLink>
      </>
    );
  }
  
};
