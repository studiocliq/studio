import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Icon } from '@studio/monte';
import { Sector } from 'src/utils/types';

const sectorIcon: {
  [key in Sector]: {
    src: string;
    alt: string;
  };
} = {
  정보기술: {
    src: '/assets/icons/IT.svg',
    alt: 'IT Icon',
  },
  산업재: {
    src: '/assets/icons/industrial_goods.svg',
    alt: 'Industrial Goods Icon',
  },
  경기소비재: {
    src: '/assets/icons/consumer_discretionary.svg',
    alt: 'Consumer Discretionary Icon',
  },
  금융: {
    src: '/assets/icons/finance.svg',
    alt: 'Finance Icon',
  },
  헬스케어: {
    src: '/assets/icons/health_care.svg',
    alt: 'Health Care Icon',
  },
  '에너지/화학': {
    src: '/assets/icons/energy_chemistry.svg',
    alt: 'Energy Chemistry Icon',
  },
  커뮤니케이션서비스: {
    src: '/assets/icons/communication_service.svg',
    alt: 'Communication Service Icon',
  },
  생활소비재: {
    src: '/assets/icons/consumer_goods.svg',
    alt: 'Consumer Goods Icon',
  },
  '철강/소재': {
    src: '/assets/icons/steel_material.svg',
    alt: 'Steel and Material Icon',
  },
  중공업: {
    src: '/assets/icons/heavy_industry.svg',
    alt: 'Heavy Industry Icon',
  },
  건설: {
    src: '/assets/icons/construction.svg',
    alt: 'Construction Icon',
  },
};


const Wrap = styled.div<{ view: boolean; }>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: rgba(0, 0, 0, .7);

  font-size: 20px;
  font-weight: 700;
  color: #fff;

  transition: height .3s, top .3s ease-in-out .2s;

  &:hover {
    background-color: rgba(0, 0, 0, .5);
  }

  ${({ view }) => (
    !view && css`
      height: 0;
      top: 20px;

      img, div {
        height: 0;
      }
   `
  )}
`;

function Scrim({ sector }: { sector: Sector }) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <Wrap onClick={handleClick} view={!isClicked}>
      <Icon src={sectorIcon[sector].src} alt={sectorIcon[sector].alt} />
      <div>
        { sector }
      </div>
    </Wrap>
  )
}

export default Scrim;
