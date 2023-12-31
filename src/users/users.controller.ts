import { Body, Controller, Delete, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from '@/core/dtos/users/create.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Delete('')
  async remove(@Query('id') id: number) {
    return await this.usersService.remove(id);
  }
}
