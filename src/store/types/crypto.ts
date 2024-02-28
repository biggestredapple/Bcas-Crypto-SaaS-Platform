export interface IPlatform {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  token_address: string;
}

export interface ICryptoInfo {
  id: number;
  rank: number;
  name: string;
  symbol: string;
  slug: string;
  price: number;
  logo: string;
}

export interface IPriceLog {
  date: string;
  price: number;
}

export interface ILinkData {
  description: string;
  facebook: string;
  twitter: string;
  reddit: string;
  website: string;
  tech_doc: string;
}

export interface ISearchInfo {
  name: string;
  price: number;
}

export type PopToken = "BNB" | "BTC" | "ETH" | "SOLANA";
