import { Body, Controller, Delete, Logger, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MatchesService } from './matches.service';
import { CreateMatchesDto } from '@/core/dtos/matches/create.dto';

@ApiTags('Matches')
@Controller('matches')
export class MatchesController {
  private logger = new Logger('Matches');
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  async create(@Body() createMatchesDto: CreateMatchesDto) {
    this.logger.log('Create matches:', createMatchesDto);
    return await this.matchesService.create(createMatchesDto);
  }

  @Delete()
  async remove(@Query('name') name: string) {
    return await this.matchesService.remove(name);
  }
}
