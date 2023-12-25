import { Module } from '@nestjs/common';
import { config } from 'dotenv';

import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URI), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
