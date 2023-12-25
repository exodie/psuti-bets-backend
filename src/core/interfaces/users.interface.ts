import { Bets } from './bets.interface';

export interface User {
  idPlatform: number;
  platform: string;
  login: string;
  password?: string;
  role: string;
  isIssueCoins: boolean;
  coins: number;
  bets: Bets[]; // TODO: Change to type Bets when created.
  purchases: PurchasesUser[];
}

export type PurchasesUser = {
  idItem: number;
  itemLabel: string;
  itemImage: string;
};

export type Role = 'user' | 'admin' | 'dev';
