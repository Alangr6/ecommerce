import React from "react";
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

export const CheckoutPage = () => {
  const [{ basket }, dispatch] = useStateValue();

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

  const classes = useStyles();

  function FormRow() {
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
                  <StyledTableCell>Producto</StyledTableCell>
                  <StyledTableCell>Precio</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>

              {basket?.map((item) => (
                <CheckoutCard key={item.id} item={item} />
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
      <FormRow />
      <Total />
    </div>
  );
};

