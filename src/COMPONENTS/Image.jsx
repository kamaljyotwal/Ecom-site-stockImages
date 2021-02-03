import React, { useState, useContext } from "react";
import { contextVariable } from "../ContextFile";
import PropTypes from "prop-types";

export default function Image({ src }) {
  const [hoverState, setHoverState] = useState(false);
  const { pushingCart, cartItems, toggleFavoriteFunc, filterItemFromCart } = useContext(
    contextVariable
  );

  function favoriteFunc() {
    if (src.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavoriteFunc(src.id)}></i>;
    } else if (hoverState) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavoriteFunc(src.id)}></i>;
    }
  }
  // console.log(src);

  function ifIteminCartFunc() {
    const isItInCart = cartItems.some((i) => i.id === src.id);

    if (isItInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => filterItemFromCart(src)}></i>;
    } else if (hoverState) {
      return <i className="ri-add-circle-line cart" onClick={() => pushingCart(src)}></i>;
    }
  }

  return (
    <div
      className="imageContainer"
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <img src={src.url} alt="" />

      {favoriteFunc()}
      {ifIteminCartFunc()}
    </div>
  );
}

Image.propTypes = PropTypes.object.isRequired;
PropTypes.shape({
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  url: PropTypes.string.isRequired,
});
