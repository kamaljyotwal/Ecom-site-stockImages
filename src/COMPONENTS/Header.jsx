import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { contextVariable } from "../ContextFile";

export default function Header() {
  const { cartItems } = useContext(contextVariable);
  return (
    <div className="header-div">
      <Link exact="true" to="/" className="linkComponent">
        <h1>ImageZone</h1>
      </Link>

      <Link to="/cart" className="linkComponent">
        {cartItems.length === 0 ? (
          <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        ) : (
          <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        )}
      </Link>
    </div>
  );
}
