import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Image from '../../components/Image';
import QtyCounter from './QtyCounter';

const ImageWrapper = styled.div`
  height: 75px;
  width: 75px;
`;

export default function Item({ id, quantity }) {
  const product = useSelector(state => state.products.all.find(product => product.id === id));

  return (
    <div>
      <ImageWrapper>
        {/* <QtyCount quantity={quantity} /> */}
        <Image src={product.image} alt="remove item from cart" />
      </ImageWrapper>
      <p>{product.title}</p>
      <p>{quantity}</p>
    </div>
  );
}
