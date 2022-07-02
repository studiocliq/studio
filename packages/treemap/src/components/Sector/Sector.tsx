import React from 'react';
import styled, { css } from 'styled-components';

import useSector, { Sector as ISector } from 'src/react-hooks/useSector';
import { StockCard } from 'components/Card';

type Props = {
  label: string;
  sector: ISector;
  width: number;
  height: number;
  x: number;
  y: number;
}

type Position = {
  width: number;
  height: number;
  x: number;
  y: number;
}

const Wrap = styled.div<Position>`
  display: flex;
  flex-wrap: wrap;

  position: absolute;

  width: 100%;
  background-color: #aaaaaa;
  border: 2px solid orange;

  ${(props) => css`
    width: ${props.width}%;
    height: ${props.height}%;
    left: ${props.x}%;
    top: ${props.y}%;
  `};
`;

const StockWrap = styled.div`
  display: flex;  
`;

const Label = styled.div`
  display: inline-block;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
`;

function Sector({ label, sector, width, height, x, y }: Props) {
  const stocks = useSector({ sector });

  return (
    <Wrap width={width} height={height} x={x} y={y}>
      <Label>{label}</Label>
      {
        stocks?.map((stock) => (
          <StockCard
            key={stock.code}
            name={stock.name}
            price={stock.price}
            close={stock.close}
            marketCap={stock.marketCap}
          />
        ))
      }
    </Wrap>
  );
}

Sector.defaultProps = {
  height: undefined,
}

export default Sector;
