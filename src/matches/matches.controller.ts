import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MatchesService } from './matches.service';
import { CreateMatchesDto } from '@/core/dtos/matches/create.dto';

@ApiTags('Matches')
@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post('')
  async create(createMatchesDto: CreateMatchesDto) {
    return await this.matchesService.create(createMatchesDto);
  }
}
