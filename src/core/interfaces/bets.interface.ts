import { Matches } from './matches.interface';

export interface Bets {
  idMatches: Matches;
  nameOfCommand: string;
  xCoefficient: number;
  drawnCoefficient: number;
  yCoefficient: number;
  fixedCoefficient: number; // ? admin fixed coefficient
  totals: TotalsBets;
}

export type TotalsBets = {
  x: {
    sum: number;
    count: number;
  };

  // TODO: Duplicate, mb use [x: string]: {}
  y: {
    sum: number;
    count: number;
  };
};
