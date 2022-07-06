import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className='all-products'>
      <Grid container  spacing={3}>
        <Grid item  sm={12} md={6} lg={4}>
          <Product />
        </Grid>
        <Grid item  sm={12} md={6} lg={4}>
          <Product />
        </Grid>
        <Grid item  sm={12} md={6} lg={4}>
          <Product />
        </Grid>
        <Grid item  sm={12} md={6} lg={4}>
          <Product />
        </Grid>
        <Grid item  sm={12} md={6} lg={4}>
          <Product />
        </Grid>
       
        
      </Grid>
    </div>
  );
}
