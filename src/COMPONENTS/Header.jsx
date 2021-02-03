import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-div">
      <Link exact="true" to="/" className="linkComponent">
        <h1>ImageZone</h1>
      </Link>

      <Link to="/cart" className="linkComponent">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </div>
  );
}
