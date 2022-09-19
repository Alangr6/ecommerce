import React from "react";

import { useStateValue } from "../reducer/StateProvider";
import { actionTypes } from "../reducer/Reducer";

import TableBody from "@material-ui/core/TableBody";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default function CheckoutCard({ item }) {
  console.log();
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: item.id,
    });
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
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });



  const miCarritoSinDuplicados = basket.reduce((acumulador, valorActual) => {
    const elementoYaExiste = acumulador.find(elemento => elemento.id === valorActual.id);
    //console.log(valorActual);
    console.log(elementoYaExiste);
    if (elementoYaExiste) {
      return acumulador.map((elemento) => {
        if (elemento.id === valorActual.id) {
          return {
            ...elemento,
            cantidad: elemento.cantidad + valorActual.cantidad
          }
        }
  
        return elemento;
      });
    }
  
    return [...acumulador, valorActual];
  }, []);
  
  // /console.log(miCarritoSinDuplicados);


  
    let repetido=false;

    for(let i=0; i< basket.lenght; i++){
      if(basket[i].id==item.id){
        basket[i].cantidad++
        repetido=true;
        
      }
      console.log(basket[i]);
    }
  

  return (
    <>
      <TableBody>
        <StyledTableRow key={item.id}>
          {item.quantity}
          <StyledTableCell align="center">
            <img className="checkout-image" src={item.image} />{" "}
          </StyledTableCell>

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
