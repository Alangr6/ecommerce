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
    display: 'flex',
    justifyContent: 'center'
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
    //height:'450px',
    alignContent:'space-between'
    
  },
  icons:{
    display: 'flex',
    alignItems:'flex-end'
  }
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
        
        <Card className={classes.card}>
        <div>
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
              
              title="bombona Fastgas"
            ><img className="product-image" src={image} alt="" /></CardMedia>
          </NavLink>

        </div>
         
          <div className={classes.icons}>
            <CardActions disableSpacing>
              <div>
                <IconButton aria-label="add to favorites" onClick={addToBasket}>
                  <AddShoppingCart />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>

            
            </CardActions>
          </div>
        </Card>{" "}
      </div>
    </>
  );
}
