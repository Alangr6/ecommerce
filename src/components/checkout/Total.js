import accounting from "accounting";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../reducer/StateProvider";

export const Total = () => {
  const [{ basket }, dispatch] = useStateValue();

  const totalAmount = basket?.map((item) => item.price).reduce((amount, item) => amount + item, 0);

  return (
    <>
      <div className="checkout-button">
        <div className="total-div">
        <h3>Numero de productos: {basket?.length}</h3>
        <h3>Total: {accounting.formatMoney(totalAmount, "$")}</h3>
        
        </div>
        <div className="total-div">
          <Link to='/checkout'>
          <button className="form-button">Checkout</button>

          </Link>

        </div>
      </div>
    </>
  );
};
