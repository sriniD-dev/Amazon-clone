import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct(id, image, title, price, rating) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //   remove the item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: {},
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="checkoutProduct__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <button conClick={removeFromBasket}>Remove from Basket</button>
    </div>
  );
}

export default CheckoutProduct;