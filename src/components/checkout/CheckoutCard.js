import React from "react";
import { useStateValue } from "../reducer/StateProvider";
import { actionTypes } from "../reducer/Reducer";
import TableBody from "@material-ui/core/TableBody";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


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
        localStorage.removeItem('basketItems');
      
  };
  localStorage.setItem('basketItems', JSON.stringify(basket));

console.log(item);
  return (
    <>
      <tbody>
        <tr>
          <td align="center">
            <img className="checkout-image" alt={`${item.product}foto`} src={item.image} />{" "}
          </td>

          <td align="left">{item.count === 0 ? null : item.count}</td>
          <td align="left">{item.product}</td>
          <td align="left">{item.price * item.count}$</td>
          <td align="left">
            <i onClick={removeItem} className="fa-solid fa-trash"></i>
          </td>
        </tr>
      </tbody>
    </>
  );
}
