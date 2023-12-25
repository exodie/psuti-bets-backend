export interface User {
  idPlatform: number;
  platform: string;
  login: string;
  password?: string;
  role: string;
  isIssueCoins: boolean;
  coins: number;
  bets: boolean; // TODO: Change to type Bets when created.
  purchases: boolean; // TODO: Change to type Purchases when created.
}

export type Role = 'user' | 'admin' | 'dev';
