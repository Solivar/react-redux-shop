import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import ProductList from '../features/products/List';
import Cart from '../features/cart/Cart';
import { setFilter } from '../features/products/productsSlice';

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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Select = styled.select`
  height: 40px;
  background: #eee;
  border: none;
  padding: 0.5em;
`;

export default function ProductPage() {
  const filter = useSelector(state => state.products.filter);
  const categories = useSelector(state => state.products.categories);
  const dispatch = useDispatch();

  return (
    <>
      <Grid>
        <div>
          <Header>
            <h1>Product List</h1>
            {categories.length > 0 && (
              <Select value={filter} onChange={event => dispatch(setFilter(event.target.value))}>
                <option value="default">all products</option>
                {categories.map(category => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}
              </Select>
            )}
          </Header>
          <ProductList />
        </div>
        <div style={{ position: 'sticky', top: 'calc(1.34em + 61.4px)' }}>
          <Cart />
        </div>
      </Grid>
    </>
  );
}
