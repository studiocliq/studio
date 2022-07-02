import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'src/styles';

type Props = {
  name: string;
  price: number;
  close: number;
  marketCap: number;
}

type WrapProps = {
  change: number;
}

const Wrap = styled.div<WrapProps>`
  border-radius: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid pink;

  ${({ change }) => {
    if (change > 0) {
      return css`
        background-color: ${ colors.upPalette[30] };
      `
    }

    if (change === 0) {
      return css`
        background-color: rgba(0, 0, 0, .3);
      `;
    }

    if (change < 0) {
      return css`
        background-color: ${ colors.downPalette[30] };
     `;
    }
  }}
`;

const Name = styled.span`
  font-weight: 700;
  font-size: 16px;

  color: #fff;
`;

const Change = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`;

function StockCard({ name, price, close }: Props) {
  const change = (100 * (price - close) / (price)).toFixed(2);
  return (
    <Wrap change={price - close}>
      <Name>{ name }</Name>
      <Change>{ `${change}%` }</Change>
    </Wrap>
  )
}

export default StockCard;
