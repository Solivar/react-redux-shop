import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Loader from '../loader/Loader';
import Product from './Product';

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 2em;
  }
`;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(false);
          setProducts(result);
        },
        error => {
          console.log(error);
          setIsLoading(false);
          setError(error);
        },
      );
  }, []);

  return (
    <>
      {error && <p>Error</p>}
      {isLoading && <Loader />}
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
    </>
  );
}
