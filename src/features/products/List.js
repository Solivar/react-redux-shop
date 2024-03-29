import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from '../../components/List';
import Loader from '../loader/Loader';
import Product from './Product';
import productData from '../../test-data/products.json';
import { addAll } from './productsSlice';

export default function ProductList() {
  const filter = useSelector(state => state.products.filter);
  const products = useSelector(state =>
    state.products.all.filter(product => {
      if (filter === 'default' || filter === product.category) {
        return true;
      }

      return false;
    }),
  );

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

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
          // setError(error);
          console.log('Using fallback dummy data');
          dispatch(addAll(productData));
        },
      );
  }, [dispatch]);

  return (
    <>
      {/* {error && <p>Error</p>} */}
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
