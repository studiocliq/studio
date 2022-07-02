import { useEffect, useState } from 'react';
import { mockup } from '../mockup';

export type Sector = '정보기술' | '산업재' | '경기소비재' | '에너지/화학' | '금융' | '커뮤니케이션서비스' | '헬스케어' | '생활소비재' | '중공업' | '철강/소재' | '건설';

type Stock = {
  code: string;
  name: string;
  price: number;
  close: number;
  marketCap: number;
}
type Props = {
  sector: Sector;
}

const spreadsheetId = '1dBkhK-EEmKWg1geBTk3ioF8m7jKjDnx9UIIrAqVz3bc';
const range = 'A1:C200';
const key = 'AIzaSyCk2V4bh4vMmKpUaKwfjO-Q3mkXQqYeVy8';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${key}`;

function useSector({ sector }: Props) {
  const [stocks, setStocks] = useState<Stock[]>();

  useEffect(() => {
    async function fetchStockInformation() {
      // const fetchedStocks = await fetch(url)
      // .then((res) => res.json())
      // .then((res) => res.values)
      // .then((res) => res.map((stock: Array<string>) => ({
      //   code: stock[0],
      //   name: stock[1],
      //   price: Number(stock[2])
      // })));

      const fetchedStocks = mockup.values
        .filter((stock) => stock[5] === sector)
        .map((stock) => ({
          code: stock[0],
          name: stock[1],
          price: Number(stock[2]),
          close: Number(stock[3]),
          marketCap: Math.floor(Number(stock[4]) / 1000000000000),
        }));

      setStocks(fetchedStocks);
    }

    fetchStockInformation();
  }, []);

  return stocks;
}

export default useSector;
