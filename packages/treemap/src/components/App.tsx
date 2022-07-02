import React from 'react';
import styled, { css } from 'styled-components';

import { StockSector } from 'components/Sector';

import { Sector as ISector } from 'src/react-hooks/useSector';
import useTreemap from 'src/react-hooks/useTreemap';

import GlobalStyles from 'src/GlobalStyles';

type TreemapInputSector = {
  value: number;
  label: ISector;
};

const data: TreemapInputSector[] = [
  { value: 32.5, label: '정보기술' },
  { value: 11, label: '산업재' },
  { value: 9.2, label: '경기소비재' },
  { value: 9, label: '에너지/화학' },
  { value: 9, label: '금융' },
  { value: 8, label: '커뮤니케이션서비스' },
  { value: 7.5, label: '헬스케어' },
  { value: 5.6, label: '생활소비재' },
  { value: 3.4, label: '중공업' },
  { value: 2.5, label: '철강/소재' },
  { value: 2.1, label: '건설' },
];

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-y: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;

  width: 90%;
  height: 90%;
`;

function App() {
  const treemap = useTreemap({ data });

  return (
    <>
      <GlobalStyles />
      <Wrap>
        <Container>
          {
            treemap?.map((sector) => (
              <StockSector
                label={sector.label}
                sector={sector.label}
                width={sector.width}
                height={sector.height}
                x={sector.x}
                y={sector.y}
              />
            ))
          }
        </Container>
      </Wrap>
    </>
  );
}

export default App;
