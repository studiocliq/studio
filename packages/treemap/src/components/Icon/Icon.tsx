import React from 'react';
import styled from 'styled-components';

import { Sector } from 'src/utils/types';

const icons: {
  [key in Sector]: {
    src: string;
    alt: string;
  }
} = {
  정보기술: {
    src: '/assets/icons/IT.svg',
    alt: 'IT Icon'
  },
  산업재: {
    src: '/assets/icons/industrial_goods.svg',
    alt: 'Industrial Goods Icon'
  },
  경기소비재: {
    src: '/assets/icons/consumer_discretionary.svg',
    alt: 'Consumer Discretionary Icon'
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
    alt: 'Steel and Material'
  },
  중공업: {
    src: '/assets/icons/heavy_industry.svg',
    alt: 'Heavy Industry Icon',
  },
  건설: {
    src: '/assets/icons/construction.svg',
    alt: 'Construction Icon',
  }
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ffffff;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
`;

function Icon({ iconType }: { iconType: Sector }) {
  return (
    <Wrap>
      <Image
        src={icons[iconType].src}
        alt={icons[iconType].alt}
      />
    </Wrap>
  );
}

export default Icon;
