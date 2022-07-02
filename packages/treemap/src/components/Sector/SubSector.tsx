import React from 'react';
import styled from 'styled-components';
import { StockCard } from 'components/Card';

type Props = {
  label: string;
}

const Wrap = styled.div`
  width: 100%;
  
  &:hover {
    border: 2px solid orange;
  }
`;

const Label = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

function SubSector({ label }: Props) {
  return (
    <Wrap>
      <Label>{ label }</Label>
    </Wrap>
  );
}

export default SubSector;
