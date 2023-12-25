import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

import type { Role } from '@/core/interfaces';

export class CreateUserDto {
  @IsNumber()
  @ApiProperty()
  idPlatform: number;

  @IsString()
  @ApiProperty()
  platform: string;

  @IsString()
  @ApiProperty()
  login: string;

  @IsString()
  @ApiProperty()
  password?: string;

  @IsString()
  @ApiProperty()
  role: Role;

  @IsBoolean()
  @ApiProperty()
  isIssueCoins: boolean;

  @IsNumber()
  @ApiProperty()
  coins: number;

  @ApiProperty()
  bets: boolean; // TODO: Change it to normal types

  @ApiProperty()
  purchases: boolean; // TODO: Change it to normal types
}
