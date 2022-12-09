import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { userSchema } from './user';

@Module({
  controllers: [UserController],
  exports: [],
  imports: [
    MongooseModule.forFeature([{
      name: 'User', schema: userSchema
    }])
  ],
  providers: [UserRepository]
})
export class UserModule { }