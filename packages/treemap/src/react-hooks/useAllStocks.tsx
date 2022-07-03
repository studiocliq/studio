import { useEffect, useState } from 'react';
import { mockup } from '../mockup';
import { Stock } from 'src/utils/types';

const spreadsheetId = '1dBkhK-EEmKWg1geBTk3ioF8m7jKjDnx9UIIrAqVz3bc';
const range = 'A1:C200';
const key = 'AIzaSyCk2V4bh4vMmKpUaKwfjO-Q3mkXQqYeVy8';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${key}`;

function useAllStocks() {
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
        .map((stock) => ({
          code: stock[0],
          name: stock[1],
          sector: stock[5],
          price: Number(stock[2]),
          close: Number(stock[3]),
          marketCap: Math.floor(Number(stock[4]) / 1000000000),
        }));

      setStocks(fetchedStocks);
    }

    fetchStockInformation();
  }, []);

  return stocks;
}

export default useAllStocks;
