import React, { useEffect, useRef, useState } from 'react';
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

  transition: .1s;

  ${(props) => css`
    width: ${props.width}%;
    height: ${props.height}%;
    left: ${props.x}%;
    top: ${props.y}%;

    &:hover {
      width: ${props.width + 4}%;
      height: ${props.height+ 4}%;
      left: ${props.x - 2}%;
      top: ${props.y - 2}%;

      z-index: 1;
    }
  `};

  border: 1px solid #dddddd;

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

const Content = styled.div<{ area: number; }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  color: #fff;

  ${({ area }) => css`
    font-size: ${area/2000}px;
  `}
`;

const Name = styled.span`
`;

const Change = styled.span`
  font-weight: 500;
`;

function StockCard({ name, price, close, geometry }: Props) {
  const [area, setArea] = useState<number>();

  const change = (100 * (price - close) / (price)).toFixed(2);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = ref.current?.offsetWidth;
    const height = ref.current?.offsetHeight;

    if (width && height) {
      setArea(width * height);
    } else {
      setArea(0);
    }
  }, [ref.current]);

  return (
    <Wrap change={price - close} {...geometry} ref={ref}>
      {
        area && area > 1000
          && (
            <Content area={area}>
              <Name>{ name }</Name>
              <Change>{ `${change}%` }</Change>
            </Content>
          )
      }
    </Wrap>
  )
}

export default StockCard;
