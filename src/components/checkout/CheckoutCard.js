import React from "react";

import { useStateValue } from "../reducer/StateProvider";
import { actionTypes } from "../reducer/Reducer";

import TableBody from "@material-ui/core/TableBody";
import { withStyles, makeStyles } from '@material-ui/core/styles';import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";



export default function CheckoutCard({ item }) {
  console.log(item);
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: item.id,
    });
    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
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
    const useStyles = makeStyles({
      table: {
        minWidth: 700,
      },
    });
  return (
   <>
   <TableBody>
     
          <StyledTableRow key={item.id}>
          <StyledTableCell align="left"></StyledTableCell>

            <StyledTableCell align="left">{item.product}</StyledTableCell>
            <StyledTableCell align="left">{item.price}</StyledTableCell>
            <StyledTableCell align="left"><button onClick={removeItem}>a</button></StyledTableCell>

          </StyledTableRow>

      </TableBody>
   </>
  );
}
