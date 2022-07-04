import React from 'react';
import styled, { css } from 'styled-components';

// Components
import { StockCard } from 'components/Card';

// Utils
import { Sector as ISector, Stock } from 'src/utils/types';

// React Hooks
import useSector from 'src/react-hooks/useSector';
import Scrim from './Scrim';

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

function Sector({ stocks, label, sector, width, height, x, y }: Props) {
  const stocksInSector = useSector({
      data: stocks?.map((stock) => ({
        value: stock.marketCap,
        ...stock,
      })),
    }
  );

  return (
    <Wrap width={width} height={height} x={x} y={y}>
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
      <Scrim sector={sector} />
    </Wrap>
  );
}

Sector.defaultProps = {
  height: undefined,
}

export default Sector;
