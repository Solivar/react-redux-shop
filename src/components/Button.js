import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: black;
  color: white;
  border: 0;
  padding: 0.5em 1.25em;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #626262;
  }
`;

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}
