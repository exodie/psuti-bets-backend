import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, type HydratedDocument } from 'mongoose';

import { NameModels, type Bets as IBets, TotalsBets } from '../interfaces';
import { Matches } from './matches.model';

export type BetsDocument = HydratedDocument<Bets>;

@Schema()
export class Bets implements IBets {
  @Prop({ type: Types.ObjectId, ref: NameModels.Bets })
  idMatches: Matches;

  @Prop()
  nameOfCommand: string;

  @Prop({ default: 2 })
  xCoefficient: number;

  @Prop()
  drawnCoefficient: number;

  @Prop({ default: 2 })
  yCoefficient: number;

  @Prop({ default: 1.5 })
  fixedCoefficient: number;

  @Prop({ type: Object })
  totals: TotalsBets;
}

export const BetsSchema = SchemaFactory.createForClass(Bets);
