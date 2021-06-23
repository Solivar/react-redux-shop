import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { removeItem } from './cartSlice';
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
  margin-top: 1em;

  p {
    margin: 0 1em 0 1em;
    font-weight: 500;
  }
`;

const ImageWrapper = styled.div`
  height: 100px;
  flex: 0 0 100px;
  align-self: self-start;
`;

const Title = styled.p`
  margin: 0 1em 0;
  font-size: 0.8em;
  font-weight: 500;
  line-height: 120%;
  flex: 1 1 auto;
`;

const RemoveButton = styled.button`
  background: #eee;
  border: none;
  padding: 0.25em;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 50%;
  height: 2em;
  flex: 0 0 2em;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5em;
`;

const Content = styled.div`
  flex: 1 1 auto;
`;

export default function Item({ id, quantity }) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.all.find(product => product.id === id));

  return (
    <>
      <Details>
        <ImageWrapper>
          <Image src={product.image} alt="remove item from cart" />
        </ImageWrapper>
        <Content>
          <TitleWrapper>
            <Title>{product.title}</Title>
            <RemoveButton onClick={() => dispatch(removeItem(id))}>x</RemoveButton>
          </TitleWrapper>
        </Content>
      </Details>
      <Price>
        <p>${(product.price * quantity).toFixed(2)}</p>
        <QtyCounter id={id} quantity={quantity} />
      </Price>
    </>
  );
}
