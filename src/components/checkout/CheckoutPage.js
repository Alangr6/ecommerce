import React from "react";
import CheckoutCard from "./CheckoutCard";
import { productsData } from "../questions/QuestionsData";
import { useState } from "react";
import Product from "../products/Product";
import { Total } from "./Total";
import { Grid } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

export const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          {basket?.map((item) => (
            <Grid item sm={12} md={6} lg={4}>
              <CheckoutCard key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className="checkoutpage">
      <h1 className="checkout-title">Carrito de compra</h1>
      <FormRow/>
      <Total/>
    </div>
  );
};
