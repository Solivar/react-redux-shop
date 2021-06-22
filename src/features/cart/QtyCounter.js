import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { updateQty } from './cartSlice';

const NumberInput = styled.input`
  border: 1px solid #eee;
  height: 44px;
  box-sizing: border-box;
  padding: 0.5em;
  width: calc(100% - 88px);
  max-width: 50px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  vertical-align: middle;

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ControlButton = styled.button`
  background: #eee;
  border: none;
  font-size: 1rem;
  vertical-align: middle;
  height: 44px;
  width: 44px;
  cursor: pointer;
  font-family: ;
`;

export default function QtyCounter({ id, quantity }) {
  const [value, setValue] = useState(quantity);
  const dispatch = useDispatch();

  const onChangeValue = event => {
    let number = parseInt(event.target.value);

    if (!number && number !== 0) {
      setValue(event.target.value);
      return;
    }

    setValue(number);
  };

  const increase = () => {
    if (value === 99) {
      return;
    }

    dispatch(updateQty({ id, quantity: value + 1 }));

    setValue(oldValue => {
      return oldValue + 1;
    });
  };

  const decrease = () => {
    if (value === 1) {
      return;
    }

    dispatch(updateQty({ id, quantity: value - 1 }));

    setValue(oldValue => {
      return oldValue - 1;
    });
  };

  const validateValue = event => {
    let number = parseInt(event.target.value);

    if (!number && number !== 0) {
      return;
    }

    if (number > 99) {
      number = 99;
    } else if (1 > number) {
      number = 1;
    }

    setValue(number);
    dispatch(updateQty({ id, quantity: number }));
  };

  return (
    <>
      <ControlButton onClick={decrease}> - </ControlButton>
      <NumberInput
        type="number"
        min="1"
        max="99"
        value={value}
        onChange={onChangeValue}
        onBlur={validateValue}
      />
      <ControlButton onClick={increase}> + </ControlButton>
    </>
  );
}
