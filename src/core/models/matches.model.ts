import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, type HydratedDocument } from 'mongoose';

import {
  NameModels,
  Matches as IMatches,
  MatchCategory,
  Command,
} from '../interfaces';

export type MatchesDocument = HydratedDocument<Matches>;

@Schema()
export class Matches implements IMatches {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: NameModels.Tournaments })
  idTournaments?: string;

  @Prop({ type: String })
  category: MatchCategory;

  @Prop({ type: Object })
  xCommand: Command;

  @Prop({ type: Object })
  yCommand: Command;

  @Prop({ type: Types.ObjectId, ref: NameModels.Bets })
  bets: string;
}

export const MatchesSchema = SchemaFactory.createForClass(Matches);
