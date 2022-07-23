import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import { productsData } from "../questions/QuestionsData";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: '90%'
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className="all-products">
      <Grid container  spacing={0}>
        {productsData.map((product) => {
          return (
            <Grid item sm={12} md={6} lg={4} className={classes.card}>
              <Product key={product.title} product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
