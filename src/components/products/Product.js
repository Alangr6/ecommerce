import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
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
    justifyContent: 'center',
    marginTop:'50px'
  },
  action: {
    padding: 16,
  },
  card: {
    position: 'relative',
    width: '100%',
    margin: '3rem',
    border: 'hidden',
    borderRadius: '10px',
    maxHeight:'600px',
    maxWidth:'400px',
    minWidth:'260px',
    alignContent:'space-between'
    
  },
  icons:{
    display: 'flex',
    alignItems:'flex-end'
  },
  title:{
    color:'black',
    maxHeight:'58px',
    display:'flex',
    alignItems:'start',
  }
}));

export default function Product({ product  }) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const price = product.price.unit_amount/100
  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        product:product.name,
        price:price,
        id:product.id,
        image:product.images[0]
      },
    });
  };

  return (
    <>
      <div className="all-products2">
        
        <Card className={classes.card}>
        <div>
        <NavLink className="products-outlined" to={`/product/${product.id}`}>
            <CardHeader className={classes.title}
              action={
                <Typography
                  className={classes.action}
                  variant="h5"
                  color="textSecondary"
                >
                   {accounting.formatMoney(price, "€")} 
                </Typography>
              }
              title={product.name}
              subheader="en Stock"
            />
            <CardMedia
              className={classes.media}
              
              title="bombona Fastgas"
            ><img className="product-image" src={product.images[0]} alt="" /></CardMedia>
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
