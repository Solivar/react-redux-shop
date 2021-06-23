import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { clearItems } from './cartSlice';
import { FullWidthButton } from '../../components/Button';
import Card from '../../components/Card';
import HorizontalLine from '../../components/HorizontalLine';
import List from '../../components/List';
import Product from './Product';
import Popup from '../popup/Popup';
import Loader from '../loader/Loader';

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

const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Cart() {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.products);
  const products = useSelector(state => state.products.all);
  let total = 0;

  cart.forEach(cartProduct => {
    const product = products.find(p => p.id === cartProduct.id);

    total += product.price * cartProduct.quantity;
  });

  const checkout = () => {
    setPopupIsOpen(true);

    setTimeout(() => {
      setIsLoading(false);
      dispatch(clearItems());
    }, 1500);
  };

  const closePopup = () => {
    setPopupIsOpen(false);
  };

  return (
    <>
      {popupIsOpen && (
        <Popup>
          {isLoading ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            <>
              <div>
                <h2>Thank You</h2>
                <p>Your order has been placed.</p>
                <p>We will contact you shortly.</p>
              </div>
              <FullWidthButton onClick={closePopup}>Close</FullWidthButton>
            </>
          )}
        </Popup>
      )}
      <div style={{ position: 'sticky', top: 'calc(1.34em + 61.4px)' }}>
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
              <FullWidthButton onClick={checkout}>Checkout</FullWidthButton>
            </>
          )}
        </Card>
      </div>
    </>
  );
}
