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
    width: "100%",
    minWidth: "140px",
    maxWidth: "280px",
    border: "hidden",
    borderRadius: "10px",
  },
  padding: {
    padding: "4px",
  },
}));

export const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState("");
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const params = useParams();
  const product = products.find((p) => p.id == params.id);
  const colRefReviews = collection(db, `products2/${params.id}/review`);
  const colRefPrices = collection(db, `products2/${params.id}/prices`);

  const inputReview = document.getElementById("input-review");
  let date = new Date();
  let currentDate =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  let basketItemsArray = JSON.stringify(basket);
  localStorage.setItem("basketItems", basketItemsArray);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(colRefProducts);
      const dataPrice = await getDocs(colRefPrices);
      const dataReviews = await getDocs(colRefReviews);

      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPrices(dataPrice.docs.map((doc) => ({ ...doc.data() })));
      setReviews(dataReviews.docs.map((doc) => ({ ...doc.data() })));
    };
    getProducts();
  }, []);

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        product: product.name,
        price: prices[0].unit_amount / 100,
        id: product.id,
        image: product.images[0],
        priceId: product.priceId,
        count: quantity,
      },
    });
  };

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

  //console.log(basket);//12veces

  if (!product) {
    return <h1>Cargando...</h1>;
  } else {
    return (
      <>
        <div className="all-products-screen">
          <div className="products-screen-div2">
            <div className="products-screen-start">
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
            </div>
            <div className="product-screen-div">
              <h1 className="product-screen-title">{product.name}</h1>

              <hr className="product-screen-hr" />

              <p className="product-screen-description">
                {" "}
                <strong className="strong-description">Descripcion: {product.description}</strong> {}
              </p>
            </div>
          </div>

          <div className="product-table-screen">
            <table className="screen-table">
              <tbody>
                <tr>
                  <td className="order-table-screen">Precio:</td>

                  <td className="order-table-screen-right">
                    {prices.map((price) => {
                      return accounting.formatMoney(
                        price.unit_amount / 100,
                        "€"
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <td className="order-table-screen">Estado:</td>

                  <td className="order-table-screen-right">En stock</td>
                </tr>
                <tr>
                  <td className="order-table-screen-button">
                  <button onClick={addToBasket} className="add-cart-button ">
                      Anadir al carrito
                    </button>
                  </td>
                  <td className="order-table-screen-button">
              
                  </td>
                
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="products-review">
          <Grid>
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
          <h3 className="reviews-title">Comentarios:</h3>
          {reviews.map((review) => {
            return (
              <div className="reviews-div" key={review.review}>
                <p>
                  <strong>{review.userEmail}</strong> : {review.review}
                </p>
                <p>{review.date}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};
