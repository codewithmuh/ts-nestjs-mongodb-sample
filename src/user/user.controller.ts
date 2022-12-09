import { BadRequestException, Body, Controller, Inject, Post } from '@nestjs/common';
import { User } from './user';
import { UserRepository } from './user.repository';

class CreateUserPayload {
  username: string;
}

@Controller()
export class UserController {
  constructor(
    private readonly _userRepository: UserRepository
  ) { }

  @Post()
  async create(@Body() payload: CreateUserPayload): Promise<User> {
    if (!payload.username) {
      throw new BadRequestException('No username was provided.');
    }

    return await this._userRepository.create(payload.username);
  }
}