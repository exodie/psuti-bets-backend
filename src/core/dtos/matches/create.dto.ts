import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';

import type { Bets, Command, MatchCategory, Matches } from '@/core/interfaces';

export class CreateMatchesDto implements Matches {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  idTournaments?: string;

  @IsObject()
  @ApiProperty()
  category: MatchCategory;

  @IsObject()
  @ApiProperty()
  xCommand: Command;

  @IsObject()
  @ApiProperty()
  yCommand: Command;

  @IsString()
  @ApiProperty()
  bets: Bets[];
}
