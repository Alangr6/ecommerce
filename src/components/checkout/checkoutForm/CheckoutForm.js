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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../../products/Products";

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
  const [warning, setWarning] = useState("");

  function createCheckoutSession(e) {
    e.preventDefault();
    if (
      address === "" ||
      name === "" ||
      city === "" ||
      province === "" ||
      postalCode === "" ||
      country === ""
    ) {
      setWarning("Rellene todos los campos del formulario");
    }  else {
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
  const navigate = useNavigate('/products')
  if(basket.length == 0 ){
   return <Products/>
  }else {
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
        <h1>{warning ?  warning :  '' }</h1>
  
        <Typography className="checkout-title" variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <form>
          <div className="center">
            {/*   */}
            <Grid className={classes.checkout} container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
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
                  id="address"
                  name="address"
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
                  id="province"
                  name="province"
                  label="State/Province/Region"
                  fullWidth
                  onChange={(e) => setProvince(e.target.value)}
                  value={province}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="postalCode"
                  name="postalCode"
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
              {/*    <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color="secondary" name="saveAddress" value="yes" />
                  }
                  label="Use this address for payment details"
                />
              </Grid> */}
            </Grid>
          </div>{" "}
          <Typography className="checkout-title" variant="h6" gutterBottom>
            Payment method
          </Typography>
          <div className="center">
            <div>Precio final {totalAmount}$</div>
  
            <button
              type="submit"
              onClick={createCheckoutSession}
              className="payment-button"
            >
              Finalizar pago
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
   
  
 
}
