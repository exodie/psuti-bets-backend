import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  idPlatform: number;

  @Prop()
  platform: string; // 'vk' | 'tg'

  @Prop()
  login: string;

  @Prop()
  password?: string;

  @Prop()
  role: string; // 'user' | 'admin' | 'dev'

  @Prop()
  isIssueCoins: boolean;

  @Prop()
  coins: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
