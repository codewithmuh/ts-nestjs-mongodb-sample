import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User')
    private readonly _userModel: Model<User>
  ) { }

  async create(username: string): Promise<User> {
    const existingUser = await this._userModel.findOne({ username });
    if (existingUser) {
      throw new Error(`User with username "${username}" already exists.`);
    }

    const createdAt = new Date();

    return await this._userModel.create({
      username,
      createdAt
    });
  }
}