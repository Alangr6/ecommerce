import React from "react";
import { useStateValue } from "../reducer/StateProvider";
import { actionTypes } from "../reducer/Reducer";
import TableBody from "@material-ui/core/TableBody";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { useEffect } from "react";
import { basketItems } from "../account/FecthData";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default function CheckoutCard({ item }) {
  const [{ basket }, dispatch] = useStateValue();
  

  const removeItem = () => {
      dispatch({
        type: actionTypes.REMOVE_ITEM,
        id: item.id,
        
      });
  };
console.log(item.id);

  return (
    <>
      <TableBody>
        <StyledTableRow>
          <StyledTableCell align="center">
            <img className="checkout-image" src={item.image} />{" "}
          </StyledTableCell>

          <StyledTableCell align="left">{item.count == 0 ? null : item.count}</StyledTableCell>
          <StyledTableCell align="left">{item.product}</StyledTableCell>
          <StyledTableCell align="left">{item.price}$</StyledTableCell>
          <StyledTableCell align="left">
            <i onClick={removeItem} className="fa-solid fa-trash"></i>
          </StyledTableCell>
        </StyledTableRow>
      </TableBody>
    </>
  );
}
