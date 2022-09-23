import React, { useEffect, useState } from "react";
import CheckoutCard from "./CheckoutCard";
import { Total } from "./Total";
import { useStateValue } from "../reducer/StateProvider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const useStyles = makeStyles({
  tableContainer: {
    display: "flex",
    justifyContent: "center",
  },
  table: {},
});

export const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [basketCart, setBasketCart] = useState([]);
  const classes = useStyles();


  useEffect(() => {
    setBasketCart(() => {
      const newBasket = [];
      basket.forEach(b => {
        const item = newBasket.find(bi => bi.product === b.product)
        if (item) {
          item.count += 1;
        } else {
          newBasket.push({
            ...b,
            count: 1
          });
        }
      })
      console.log(newBasket)
      return newBasket;
    });
  }, [])

  function CheckoutBasketData() {
    if (basket.length == 0) {
      return (
        <h1 className="empty-cart">
          Su carrito se encuentra actualmente vacio
        </h1>
      );
    } else {
      return (
        <div className="table-container">
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>Cantidad</StyledTableCell>
                  <StyledTableCell>Producto</StyledTableCell>
                  <StyledTableCell>Precio</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>

              {basketCart?.map((item) => (
                <CheckoutCard  item={item} />
              ))}
            </Table>
          </TableContainer>
        </div>
      );
    }
  }

  return (
    <div className="checkoutpage">
      <h1 className="checkout-title">Carrito de compra</h1>
      <CheckoutBasketData />
      <Total />
    </div>
  );
};

