import React, { useContext } from "react";
import { contextVariable } from "../ContextFile";

export default function Cart() {
  const { cartItems } = useContext(contextVariable);
  // console.log(cartItems);

  const cartMappedVariable = cartItems.map((i) => (
    <div className="iteminCartContainer" key={i.id}>
      <img src={i.url} alt="" />
      <p>{i.id}</p>
    </div>
  ));

  const emptyCartVariable = (
    <div className="emptydivContainer">
      <p>Your Cart is Currently Empty</p>
    </div>
  );

  // console.log(cartItems.length);
  return <>{cartItems.length === 0 ? emptyCartVariable : cartMappedVariable}</>;
}
