import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { NameModels, User } from '@/core/interfaces';
import { CreateUserDto } from '@/core/dtos/users/create.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(NameModels.User) private usersModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.findUser(createUserDto.idPlatform);

    if (findUser) return;

    const user = await new this.usersModel(createUserDto).save();

    return user;
  }

  async remove(idPlatform: number) {
    const findUser = await this.findUser(idPlatform);

    if (!findUser) return '[info::remove] User is undefined!';

    const deleted = await this.usersModel.findByIdAndDelete(findUser._id);

    return deleted;
  }

  private async findUser(idPlatform: number) {
    return await this.usersModel.findOne({ idPlatform: idPlatform });
  }
}
