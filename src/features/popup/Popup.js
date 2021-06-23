import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Card';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 400px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PopupCard = styled(Card)`
  width: 100%;
  flex: 1 1 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Popup({ children }) {
  return (
    <Background>
      <Wrapper>
        <PopupCard>{children}</PopupCard>
      </Wrapper>
    </Background>
  );
}
