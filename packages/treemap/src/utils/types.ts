export type Sector = '정보기술' | '산업재' | '경기소비재' | '에너지/화학' | '금융' | '커뮤니케이션서비스' | '헬스케어' | '생활소비재' | '중공업' | '철강/소재' | '건설';
export type Stock = {
  code: string;
  name: string;
  sector: string;
  price: number;
  close: number;
  marketCap: number;
}