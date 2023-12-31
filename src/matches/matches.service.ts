import { CreateMatchesDto } from '@/core/dtos/matches/create.dto';
import { Matches, NameModels } from '@/core/interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MatchesService {
  constructor(
    @InjectModel(NameModels.Matches)
    private matchesModel: Model<Readonly<Matches>>,
  ) {}

  async create(createMatchesDto: CreateMatchesDto) {
    const findMatchesWithName = await this.matchesModel.findOne({
      name: createMatchesDto.name,
    });

    if (findMatchesWithName) return;

    const match = await new this.matchesModel(createMatchesDto).save();

    return match;
  }
}
