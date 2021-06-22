import React from 'react';
import QtyCount from './QtyCount';

export default function Item({ title, price, quantity, image }) {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <QtyCount quantity={quantity} />
      <img src="https://via.placeholder.com/25" alt="remove item from cart" />
    </div>
  );
}
