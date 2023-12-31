import { Module } from '@nestjs/common';

import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NameModels } from '@/core/interfaces';
import { MatchesSchema } from '@/core/models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NameModels.Matches, schema: MatchesSchema },
    ]),
  ],
  controllers: [MatchesController],
  providers: [MatchesService],
})
export class MatchesModule {}
