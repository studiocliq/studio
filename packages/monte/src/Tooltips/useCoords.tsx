import React, { useState, useEffect } from 'react';

type Coordinate = {
  x: number;
  y: number;
};

function useCoords(): [Coordinate, (e: React.MouseEvent<HTMLElement>) => void] {
  const [localCoords, setLocalCoords] = useState<Coordinate>({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    setLocalCoords({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return [localCoords, handleMouseMove];
};

export default useCoords;
