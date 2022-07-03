import React from 'react';
import styled, { css } from 'styled-components';

// Components
import { StockCard } from 'components/Card';

// Utils
import { Sector as ISector, Stock } from 'src/utils/types';

// React Hooks
import useSector from 'src/react-hooks/useSector';

type Props = {
  stocks: Stock[];
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

const Label = styled.div`
  display: inline-block;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
`;

const Scrim = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, .3);

  font-size: 20px;
  font-weight: 700;
  color: #fff;

  &:hover {
    opacity: 0;
  }
`;

function Sector({ stocks, label, sector, width, height, x, y }: Props) {
  const stocksInSector = useSector({
      data: stocks?.map((stock) => ({
        value: stock.marketCap,
        ...stock,
      })),
    }
  );

  console.log(stocks, stocksInSector);
  
  return (
    <Wrap width={width} height={height} x={x} y={y}>
      <Label>{label}</Label>
      {
        stocksInSector?.map((stock) => (
          <StockCard
            key={stock.code}
            name={stock.name}
            price={stock.price}
            close={stock.close}
            geometry={{
              width: stock.width,
              height: stock.height,
              x: stock.x,
              y: stock.y,
            }}
          />
        ))
      }
      <Scrim>
        { sector }
      </Scrim>
    </Wrap>
  );
}

Sector.defaultProps = {
  height: undefined,
}

export default Sector;
