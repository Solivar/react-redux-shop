import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 1em;
  border-radius: 8px;
`;

export default function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
