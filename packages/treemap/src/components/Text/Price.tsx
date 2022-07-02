import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-weight: 500;
  font-size: 19px;
`;

type Props = {
  price: number;
}

function getCommaPrice(price: number) {
  const priceLength = price.toString().length;
  const numComma = Math.floor((priceLength - 1)  / 3);
  const chars = price.toString().split('');
}

function Price({ price }: Props) {

  return (
    <Text>{price}</Text>
  )
}