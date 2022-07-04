import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Icon } from 'components/Icon';
import { Sector } from 'src/utils/types';


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
      <Icon iconType={sector} />
      <div>
        { sector }
      </div>
    </Wrap>
  )
}

export default Scrim;
