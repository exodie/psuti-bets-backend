import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { MatchesModule } from './matches/matches.module';

config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_URI), UsersModule, MatchesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
