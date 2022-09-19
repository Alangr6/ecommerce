import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStateValue } from "../../reducer/StateProvider";
import {  makeStyles } from "@material-ui/core/styles";
import { ShippingAddressForm } from "./ShippingAddressForm";

const useStyles = makeStyles((theme) => ({
  checkout: {
    width: "40%",
  },

}));



export default function CheckoutForm() {
  const classes = useStyles();

  const [{ basket }, dispatch] = useStateValue();
  const totalAmount = basket?.map((item) => item.price).reduce((amount, item) => amount + item, 0);

  return (
    <React.Fragment>
     <ShippingAddressForm/>
      <Typography className="checkout-title" variant="h6" gutterBottom>
        Payment method
      </Typography>
      <div className="center">


       {/*  <Grid className={classes.checkout} container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
          
        </Grid> */}
        <div>Precio final {totalAmount}$</div>

          <button className="payment-button">Finalizar pago</button>
      </div>
    </React.Fragment>
  );
}
