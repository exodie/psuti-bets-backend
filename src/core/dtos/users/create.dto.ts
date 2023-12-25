import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

import type { Bets, PurchasesUser, Role, User } from '@/core/interfaces';

export class CreateUserDto implements User {
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
  bets: Bets[]; // TODO: Change it to normal types

  @ApiProperty()
  purchases: PurchasesUser[]; // TODO: Change it to normal types
}
