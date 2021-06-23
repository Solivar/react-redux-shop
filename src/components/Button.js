import styled from 'styled-components';

const Button = styled.button`
  background: black;
  color: white;
  border: 0;
  padding: 0.5em 2em;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #626262;
  }

  &:disabled {
    background: #999;
    cursor: not-allowed;
  }
`;

export const FullWidthButton = styled(Button)`
  width: 100%;
`;

export default Button;
