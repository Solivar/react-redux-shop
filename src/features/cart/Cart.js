import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';

// import { FullWidthButton } from '../../components/Button';
import Card from '../../containers/Card';
import { clearItems } from './cartSlice';
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

const ClearButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h3 {
    margin: 0;
  }
`;

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.products);
  const products = useSelector(state => state.products.all);
  let total = 0;

  cart.forEach(cartProduct => {
    const product = products.find(p => p.id === cartProduct.id);

    total += product.price * cartProduct.quantity;
  });

  return (
    <Card>
      <Header>
        <h3>Cart</h3>
        {cart.length > 0 && (
          <ClearButton onClick={() => dispatch(clearItems())}>Clear all</ClearButton>
        )}
      </Header>
      <HorizontalLine />

      {cart.length === 0 && <p>Your cart is empty</p>}
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
          {/* <FullWidthButton>Checkout</FullWidthButton> */}
        </>
      )}
    </Card>
  );
}
