import { Bets } from './bets.interface';

export interface User {
  idPlatform: number;
  platform: string;
  login: string;
  role: string;
  isIssueCoins: boolean;
  coins: number;
  bets: Bets[];
  purchases: PurchasesUser[];
}

export type PurchasesUser = {
  idItem: number;
  itemLabel: string;
  itemImage: string;
};

export type Role = 'user' | 'admin' | 'dev';
