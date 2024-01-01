import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, type HydratedDocument } from 'mongoose';

import {
  type Role,
  type User as IUser,
  NameModels,
  PurchasesUser,
} from '../interfaces';
import { Bets } from './bets.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {
  @Prop()
  idPlatform: number;

  @Prop()
  platform: string; // 'vk' | 'tg'

  @Prop()
  login: string;

  @Prop({ type: String, default: 'user' })
  role: Role; // 'user' | 'admin' | 'dev'

  @Prop({ default: true })
  isIssueCoins: boolean;

  @Prop({ default: 5000 })
  coins: number;

  @Prop({ type: Types.ObjectId, ref: NameModels.Bets, default: [] })
  bets: Bets[];

  @Prop({ type: [Object], default: [] })
  purchases: PurchasesUser[];
}

export const UserSchema = SchemaFactory.createForClass(User);
