import React from 'react';
import styled from 'styled-components';

import ProductList from '../features/products/List';
import Cart from '../features/cart/Cart';

const Grid = styled.div`
  max-width: 1200px;
  display: grid;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    column-gap: 2em;
    align-items: flex-start;
  }
`;

export default function ProductPage() {
  return (
    <>
      <Grid>
        <div>
          <h1>Product List</h1>
          <ProductList />
        </div>
        <div style={{ position: 'sticky', top: 'calc(1.34em + 61.4px)' }}>
          <Cart
            items={[
              {
                title: 'test product',
                price: 20,
                quantity: 2,
                image: 'https://via.placeholder.com/150',
              },
              {
                title: '2nd product',
                price: 15,
                quantity: 1,
                image: 'https://via.placeholder.com/150',
              },
            ]}
          />
        </div>
      </Grid>
    </>
  );
}
