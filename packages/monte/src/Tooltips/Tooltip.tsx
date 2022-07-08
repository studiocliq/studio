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
  view: boolean;
  positionX?: number;
  positionY?: number;
}

const Wrap = styled.div`
  position: relative;
`;

const Target = styled.div`
`;

const Container = styled('div')<TooltipProps>`
  position: fixed;
  border: 3px solid green;
  visibility: hidden;

  ${({ positionX, positionY }) => (
    css`
      top: ${positionY}px;
      left: ${positionX}px;
    `
  )};

  ${({ view }) => (
    view && css`
      visibility: visible;
    `
  )};
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

  console.log(isHovered);

  return (
    <Wrap
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <Target>
        { target }
      </Target>
      <Container
        mode={mode || 'pointer'}
        position={position || 'right'}
        positionX={coords.x}
        positionY={coords.y}
        view={isHovered}
      >
        { children }
      </Container>
    </Wrap>
  );
}

Tooltip.defaultProps = {
  position: 'right',
  mode: 'pointer',
}

export default Tooltip;
