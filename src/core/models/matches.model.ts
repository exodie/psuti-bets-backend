import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, type HydratedDocument } from 'mongoose';

import {
  NameModels,
  type Matches as IMatches,
  type MatchCategory,
  type Command,
} from '../interfaces';
import { Bets } from './bets.model';

export type MatchesDocument = HydratedDocument<Matches>;

@Schema()
export class Matches implements IMatches {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: NameModels.Tournaments, default: '' })
  idTournaments?: string;

  @Prop({ type: String })
  category: MatchCategory;

  @Prop({ type: Object })
  xCommand: Command;

  @Prop({ type: Object })
  yCommand: Command;

  @Prop({ type: Types.ObjectId, ref: NameModels.Bets })
  bets: [Bets];
}

export const MatchesSchema = SchemaFactory.createForClass(Matches);
