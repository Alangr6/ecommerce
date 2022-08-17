import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import { AddShoppingCart } from "@material-ui/icons";
import accounting from "accounting";
import { actionTypes } from "../reducer/Reducer";
import { useStateValue } from "../reducer/StateProvider";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "100px",
    paddingTop: "56.25%", // 16:9
  },
  action: {
    padding: 16,
  },
}));

export default function Product({ product: { product, price, id, image } }) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        product,
        price,
        id,
        image
      },
    });
  };

  return (
    <>
      <div className="all-products2">
        <Card className="card">
          <NavLink className="products-outlined" to={`/product/${id}`}>
            <CardHeader
              action={
                <Typography
                  className={classes.action}
                  variant="h5"
                  color="textSecondary"
                >
                  {accounting.formatMoney(price, "€")}
                </Typography>
              }
              title={product}
              subheader="en Stock"
            />
            <CardMedia
              className={classes.media}
              image={image}
              title="bombona Fastgas"
            />
          </NavLink>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Bombona de N2O, Fastgas. Las mejores bombonas utilizadas como
              agente mezclador y espumante al producir nata montada.
            </Typography>
          </CardContent>
          <div className="actions">
            <CardActions disableSpacing>
              <div>
                <IconButton aria-label="add to favorites" onClick={addToBasket}>
                  <AddShoppingCart />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>

              <div className="stars">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <p>&#11088;</p>
                  ))}
              </div>
            </CardActions>
          </div>
        </Card>{" "}
      </div>
    </>
  );
}
