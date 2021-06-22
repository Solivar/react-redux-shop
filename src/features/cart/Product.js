import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Image from '../../components/Image';
import QtyCounter from './QtyCounter';

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  p {
    margin: 0 1em 0 0;
    font-weight: 500;
  }
`;

const ImageWrapper = styled.div`
  height: 100px;
  flex: 0 0 100px;
  align-self: self-start;
`;

const Title = styled.p`
  margin: 1em 0 2em 1em;
  font-size: 0.8em;
  font-weight: 500;
  line-height: 120%;
  flex: 1 1 auto;
`;

export default function Item({ id, quantity }) {
  const product = useSelector(state => state.products.all.find(product => product.id === id));

  return (
    <>
      <Details>
        <ImageWrapper>
          <Image src={product.image} alt="remove item from cart" />
        </ImageWrapper>
        <div>
          <Title>{product.title}</Title>
          <Price>
            <p>${(product.price * quantity).toFixed(2)}</p>
            <QtyCounter id={id} quantity={quantity} />
          </Price>
        </div>
      </Details>
    </>
  );
}
