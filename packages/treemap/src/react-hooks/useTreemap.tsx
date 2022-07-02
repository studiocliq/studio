import { useEffect, useState } from 'react';
import { getTreemap } from 'treemap-squarify';

type Result = {
  x: number;
  y: number;
  width: number;
  height:  number;
  data: {
    value: number;
  }
}

function useTreemap<T>({ data }: {
  data: { value: number; label: T }[]
}): (Result & { label: T; })[] | undefined {
  const [treemap, setTreemap] = useState<(Result & { label: T })[]>();

  useEffect(() => {
    const results: Result[] = getTreemap({
      data,
      width: 100,
      height: 100,
    });

    const calc = results.map((result, index) => ({
      ...result,
      label: data[index].label,
    }));

    setTreemap(calc);
  }, []);

  return treemap;
}

export default useTreemap;
