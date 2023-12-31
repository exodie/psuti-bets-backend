import { Bets } from './bets.interface';

export interface Matches {
  name: string;
  idTournaments?: string;
  category: MatchCategory;
  xCommand: Command;
  yCommand: Command;
  bets: Bets[];
}

export type Command = {
  name: string;
  players: {
    role: 'player' | 'capitan';
    nickname: string;
  };
};

export type MatchCategory = 'dota2' | 'cs2';
