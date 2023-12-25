import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { UserSchema } from '@/core/models';
import { NameModels } from '@/core/interfaces';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: NameModels.User, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
