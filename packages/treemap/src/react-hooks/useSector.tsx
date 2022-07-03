import { useEffect, useState } from 'react';
import { getTreemap } from 'treemap-squarify';

type Result = {
  code: string;
  name: string;
  price: number;
  close: number;

  x: number;
  y: number;
  width: number;
  height:  number;
  data: {
    value: number;
  }
};

type Props = {
  data: {
    value: number;
    code: string;
    name: string;
    price: number;
    close: number;
  }[];
};

function useSector({ data }: Props) {
  const [stocks, setStocks] = useState<Result[]>();

  useEffect(() => {
    const results: Result[] = getTreemap({
      data,
      width: 100,
      height: 100,
    });

    const calc = results.map((result, index) => ({
      ...result,
      ...data[index],
    }))

    setStocks(calc);
  }, []);

  return stocks;
}

export default useSector;
