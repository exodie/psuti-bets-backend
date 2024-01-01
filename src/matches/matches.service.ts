import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Matches, NameModels } from '@/core/interfaces';
import { CreateMatchesDto } from '@/core/dtos/matches/create.dto';

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

  async remove(name: string) {
    const findMatch = await this.matchesModel.findOne({ name: name });

    if (!findMatch) return '[info::remove] Match is undefined!';

    const deleted = await this.matchesModel.findByIdAndDelete(findMatch._id);

    return deleted;
  }
}
