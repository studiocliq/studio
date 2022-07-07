import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import useCoords from './useCoords';

type Props = {
  children: JSX.Element | string;
  target: JSX.Element | string;
  position?: 'top' | 'left' | 'right' | 'bottom';
  mode?: 'pointer' | 'component';
};

type TooltipProps = {
  mode: 'pointer' | 'component';
  position: 'top' | 'left' | 'right' | 'bottom';
  positionX?: number;
  positionY?: number;
}

const Wrap = styled.div`
  position: relative;
`;

const Target = styled.div`
`;

const Container = styled.div<TooltipProps>`
  position: fixed;
  border: 3px solid green;

  ${({ mode, positionY, positionX }) => (mode === 'pointer') && css`
    background-color: pink;

    top: calc(${positionY}px);
    left: calc(${positionX}px + 30px);
  `};
`;

function Tooltip({ children, target, position, mode }: Props) {
  const [coords, handleMouseMove]  = useCoords();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <Wrap>
      <Target
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
      >
        { target }
      </Target>
      {
        isHovered && (
          <Container
            mode={mode || 'pointer'}
            position={position || 'right'}
            positionX={coords.x}
            positionY={coords.y}
          >
            { children }
          </Container>
        )
      }
    </Wrap>
  );
}

Tooltip.defaultProps = {
  position: 'right',
  mode: 'pointer',
}

export default Tooltip;
