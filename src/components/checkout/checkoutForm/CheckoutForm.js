import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStateValue } from "../../reducer/StateProvider";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../../firebase/Firebase";
import { addDoc, collection, setDoc } from "firebase/firestore";
import CheckoutCard from "../CheckoutCard";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  checkout: {
    width: "40%",
  },
}));

export default function CheckoutForm() {
  const classes = useStyles();

  const [{ basket, user }] = useStateValue();
  const totalAmount = basket
    ?.map((item) => item.price)
    .reduce((amount, item) => amount + item, 0);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  function createCheckoutSession(e) {
    e.preventDefault();
    if (user) {
      const collectionRef = collection(db, `users/${user.uid}/order_data`);

      addDoc(collectionRef, {
        mode: "payment",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        address: {
          address: address,
          name: name,
          city: city,
          province: province,
          postalCode: postalCode,
          country: country,
        },
        line_items: {
          basket: basket.map((item) => item.product),
          price: totalAmount,
        },
      });
    }
  }

  return (
    <React.Fragment>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            {basket?.map((item) => (
              <CheckoutCard key={item} item={item} />
            ))}
          </Table>
        </TableContainer>
      </div>
      <Typography className="checkout-title" variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form >
        <div className="center">
          <input type="text" required />
          <Grid className={classes.checkout} container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                onChange={(e) => setProvince(e.target.value)}
                value={province}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                onChange={(e) => setPostalCode(e.target.value)}
                value={postalCode}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
          </Grid>
        </div>{" "}
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

          <button type="submit" onClick={createCheckoutSession} className="payment-button">
            Finalizar pago
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
