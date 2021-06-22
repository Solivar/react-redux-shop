import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const bubbleOne = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}`;

const bubbleTwo = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(24px, 0);
  }
`;

const bubbleThree = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;

const Bubble = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #000;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: ${bubbleOne} 0.6s infinite;
  }

  &:nth-child(2) {
    left: 8px;
    animation: ${bubbleTwo} 0.6s infinite;
  }

  &:nth-child(3) {
    left: 32px;
    animation: ${bubbleTwo} 0.6s infinite;
  }

  &:nth-child(4) {
    left: 56px;
    animation: ${bubbleThree} 0.6s infinite;
  }
`;

export default function Loader() {
  return (
    <Wrapper>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
    </Wrapper>
  );
}
