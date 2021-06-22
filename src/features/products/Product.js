import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { addItem } from '../cart/cartSlice';
import { setFilter } from './productsSlice';
import Card from '../../containers/Card';
import Button from '../../components/Button';
import Image from '../../components/Image';

const Category = styled.button`
  background-color: #eee;
  color: #646464;
  font-size: 0.8rem;
  padding: 0.4em 0.8em;
  margin: 0 0 1em;
  display: inline-block;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

const Price = styled.p`
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  return (
    <Card>
      <Category onClick={() => dispatch(setFilter(category))}>{category}</Category>
      <h2 style={{ marginBottom: '1.25em' }}>{title}</h2>
      <Grid>
        <div>
          <p style={{ margin: 0 }}>{description}</p>
          <Price>${price.toFixed(2)}</Price>
          <Button onClick={() => dispatch(addItem(id))}>Add to Cart</Button>
        </div>
        <div style={{ maxHeight: '200px', padding: '0 2em' }}>
          <Image src={image} alt={`Product - ${title}`} />
        </div>
      </Grid>
    </Card>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
