import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'src/styles';

type Props = {
  name: string;
  price: number;
  close: number;
  geometry: Geometry
};

type Geometry = {
  x: number;
  y: number;
  width: number;
  height: number;
}

type WrapProps = {
  change: number;
} & Geometry;

const Wrap = styled.div<WrapProps>`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => css`
    width: ${props.width}%;
    height: ${props.height}%;
    left: ${props.x}%;
    top: ${props.y}%;
  `};

  border: 1px solid pink;

  ${({ change }) => {
    if (change > 0) {
      return css`
        background-color: ${ colors.upPalette[30] };
      `
    }

    if (change === 0) {
      return css`
        background-color: orange;
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

function StockCard({ name, price, close, geometry }: Props) {
  const change = (100 * (price - close) / (price)).toFixed(2);
  return (
    <Wrap change={price - close} {...geometry}>
      <Name>{ name }</Name>
      <Change>{ `${change}%` }</Change>
    </Wrap>
  )
}

export default StockCard;
