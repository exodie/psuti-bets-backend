import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

import type { Role, User as IUser } from '../interfaces';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {
  @Prop()
  idPlatform: number;

  @Prop()
  platform: string; // 'vk' | 'tg'

  @Prop()
  login: string;

  @Prop()
  password?: string; // ? admin

  @Prop({ type: String })
  role: Role; // 'user' | 'admin' | 'dev'

  @Prop()
  isIssueCoins: boolean;

  @Prop()
  coins: number;

  @Prop()
  bets: boolean;

  @Prop()
  purchases: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
