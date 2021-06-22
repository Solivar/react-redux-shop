import { useSelector } from 'react-redux';
import React from 'react';

import Card from '../../containers/Card';
import HorizontalLine from '../../components/HorizontalLine';
import List from '../../components/List';
import Product from './Product';

export default function Cart() {
  const products = useSelector(state => state.cart.products);

  return (
    <Card>
      <h3>Cart</h3>
      <HorizontalLine />

      {products.length === 0 && <p>Cart is empty</p>}
      {products.length > 0 && (
        <List>
          {products.map(product => {
            return (
              <li key={product.id}>
                <Product {...product} />
              </li>
            );
          })}
        </List>
      )}
    </Card>
  );
}
