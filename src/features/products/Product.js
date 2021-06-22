import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../../containers/Card';
import Button from '../../components/Button';

const Image = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 200px;
  background-image: url(${props => (props.image ? props.image : '')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin: 0 auto;
`;

const Category = styled.p`
  background-color: #eee;
  color: #646464;
  font-size: 0.8rem;
  padding: 0.4em 0.8em;
  margin: 0 0 1em;
  display: inline-block;
  border-radius: 12px;
`;

const Price = styled.p`
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function Product({ title, price, description, category, image }) {
  return (
    <Card>
      <Category>{category}</Category>
      <h2 style={{ marginBottom: '1.25em' }}>{title}</h2>
      <Grid>
        <div>
          <p style={{ margin: 0 }}>{description}</p>
          <Price>${price}</Price>
          <Button text="Add to Cart" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image image={image} alt={`Product - ${title}`} />
        </div>
      </Grid>
    </Card>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
