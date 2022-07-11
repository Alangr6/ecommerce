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
import { actionTypes } from "../checkout/Reducer";
import { useStateValue } from "../checkout/StateProvider";

const useStyles = makeStyles((theme) => ({
  media: {
    height: '250px',
    paddingTop: "56.25%", // 16:9
  },
  action: {
    padding: 16,
  },
}));

export default function Product({product:{ title, price, id} }) {
  const classes = useStyles();
  const [{basket}, dispatch] =  useStateValue()


  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        title,
        price,
        id
      }
    })
  }

  return (
    <>
      <div className="all-products2">
        <Card className="card">
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
            title={title}
            subheader="en Stock"
          />
          <CardMedia
            className={classes.media}
            image="data:image/jpeg;base64,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"
            title="bombona Fastgas"
          />
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
