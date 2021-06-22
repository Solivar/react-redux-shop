import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addAll } from './productsSlice';
import List from '../../components/List';
import Loader from '../loader/Loader';
import Product from './Product';

export default function ProductList() {
  const products = useSelector(state => state.products.all);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(false);
          dispatch(addAll(result));
        },
        error => {
          console.log(error);
          setIsLoading(false);
          setError(error);
        },
      );
  }, [dispatch]);

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
