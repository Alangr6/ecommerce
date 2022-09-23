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
import { addDoc, collection, getDocs } from "firebase/firestore";
import { colRefProducts, db } from "../firebase/Firebase";
import { Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    display: "flex",
    justifyContent: "center",
  },
  action: {
    padding: 16,
  },
  card: {
    position: "relative",
    width: "300px",
    border: "hidden",
    borderRadius: "10px",
    maxHeight: "600px",
  },

  start: {
    padding: "3rem",
  },
}));

export const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [review, setReview] = useState("");
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const params = useParams();
  const product = products.find((p) => p.id == params.id);

  const colRefReviews = collection(db, `products2/${params.id}/review`);
  const colRefPrices = collection(db, `products2/${params.id}/prices`);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(colRefProducts);
      const dataPrice = await getDocs(colRefPrices);

      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPrices(dataPrice.docs.map((doc) => ({ ...doc.data() })));
    };
    getProducts();

    const getReviews = async () => {
      const dataReviews = await getDocs(colRefReviews);

      setReviews(dataReviews.docs.map((doc) => ({ ...doc.data() })));
    };

    getReviews();
  }, []);

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        product: product.name,
        price: prices[0].unit_amount,
        id: product.id,
        image: product.images[0],
      },
    });
  };

  const inputReview = document.getElementById("input-review");
  var date = new Date();
  var currentDate =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  async function addReview() {
    if (inputReview.value.trim().length === 0) {
      return null;
    } else {
      const collectionRef = collection(db, `products2/${product.id}/review`);
      await addDoc(collectionRef, {
        review: review,
        userEmail: user.email,
        date: currentDate,
      });
      inputReview.value = "";
      window.location.reload();
    }
  }

  if (!product) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <>
        <div className="all-products-screen">
          <div className={classes.start}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} title="bombona Fastgas">
                <img
                  className="product-screen-image"
                  src={product.images[0]}
                  alt=""
                />
              </CardMedia>
            </Card>{" "}
            <NavLink to="/products">
              <button className="go-back-button">Volver</button>
            </NavLink>
            <Grid className={classes.checkout} container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="input-review"
                  name="input-review"
                  label="Anade un comentario"
                  fullWidth
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                />
              </Grid>
            </Grid>
            <button
              id="btn-submit"
              onClick={addReview}
              type="submit"
              className="review-button"
            >
              Publicar
            </button>
            <h3>Comentarios:</h3>
            {reviews.map((review) => {
              return (
                <div>
                  <p>
                    <strong>{review.userEmail}</strong> : {review.review}
                  </p>
                  <p>{review.date}</p>
                </div>
              );
            })}
          </div>
          <div className="product-screen-div">
            <h1 className="product-screen-title">{product.name}</h1>
            <hr />

            <hr />

            <p className="product-screen-description">
              {" "}
              <strong>Descripcion: {product.description}</strong> {}
            </p>
          </div>
          <div className="product-table-screen">
            <TableContainer className={classes.table} component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow key={product.id}>
                    <TableCell component="th" scope="row">
                      Precio:
                    </TableCell>
                    <TableCell align="right">
                      {prices.map((price) => {
                        return accounting.formatMoney(
                          price.unit_amount / 100,
                          "€"
                        );
                      })}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Estado:
                    </TableCell>
                    <TableCell align="right">en Stock</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <select
                        className="add-cart-select"
                        name=""
                        id=""
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      >
                        {[...Array(product.stock).keys()].map((x) => {
                          return (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          );
                        })}
                      </select>{" "}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <button onClick={addToBasket} className="add-cart-button">
                        Anadir al carrito
                      </button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </>
    );
  }
};
