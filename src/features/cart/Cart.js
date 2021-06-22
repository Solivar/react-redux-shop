import { useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';

import { FullWidthButton } from '../../components/Button';
import Card from '../../containers/Card';
import HorizontalLine from '../../components/HorizontalLine';
import List from '../../components/List';
import Product from './Product';

const ListItem = styled.li`
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5em;
  margin-bottom: 1.5em;

  &:last-child {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const Total = styled.p`
  text-align: right;
  margin: 1em 0 1em;
  padding-top: 1em;
  border-top: 1px solid #eee;

  span {
    font-weight: 600;
  }
`;

export default function Cart() {
  const cart = useSelector(state => state.cart.products);
  const products = useSelector(state => state.products.all);
  let total = 0;

  cart.forEach(product => {
    const p = products.find(product_ => product_.id === product.id);

    total += p.price * product.quantity;
  });

  return (
    <Card>
      <h3>Cart</h3>
      <HorizontalLine />

      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.length > 0 && (
        <>
          <List>
            {cart.map(product => {
              return (
                <ListItem key={product.id}>
                  <Product {...product} />
                </ListItem>
              );
            })}
          </List>
          <Total>
            Total: <span>${total.toFixed(2)}</span>
          </Total>
          <FullWidthButton>Checkout</FullWidthButton>
        </>
      )}
    </Card>
  );
}
