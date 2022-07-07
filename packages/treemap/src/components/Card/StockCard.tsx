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

const Wrap = styled.div<Geometry>`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: 1px solid #dddddd;

  perspective: 1000px;
  transition: .1s;

  ${(props) => css`
    width: ${props.width}%;
    height: ${props.height}%;
    left: ${props.x}%;
    top: ${props.y}%;

    &:hover {
      width: ${props.width + 2}%;
      height: ${props.height+ 2}%;
      left: ${props.x - 1}%;
      top: ${props.y - 1}%;

      z-index: 1;
    }
  `};
`;

const Inner = styled.div<{ backward: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  transform-style: preserve-3d;
  transition: .8s;

  ${({ backward }) => backward && css`
    transform: rotateY(180deg);
  `}
`;

const Side = styled.div<{ change: number }>`
  position: absolute;
  width: 100%;
  height: 100%;

  backface-visibility: hidden;

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

const Front = styled(Side)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

const Back = styled(Side)`
  transform: rotateY(180deg);
`;

const Name = styled.span`
`;

const Change = styled.span`
  font-weight: 500;
`;

function StockCard({ name, price, close, geometry }: Props) {
  const [area, setArea] = useState<number>();
  const [backward, setBackward] = useState<boolean>(false);

  const change = (100 * (price - close) / (price)).toFixed(2);
  const ref = useRef<HTMLDivElement>(null);

  function handleClick() {
    setBackward(!backward);
  }

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
    <Wrap {...geometry} ref={ref} onClick={handleClick}>
      <Inner backward={backward}>
        <Front change={price - close}>
          {
            (area && area > 1000)
              && (
                <>
                  <Name>{ name }</Name>
                  <Change>{ `${change}%` }</Change>
                </>
              )
          }
        </Front>
        <Back change={price - close}>
          BackWard Page
        </Back>
      </Inner>
    </Wrap>
  )
}

export default StockCard;
