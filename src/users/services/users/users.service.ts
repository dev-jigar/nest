import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/typeorm/entities/users';
import { CreateUserParams, UpdateUserBody } from 'src/utils/types';

import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(user) private usersRepository: Repository<user>,
  ) {}
  listUsers() {
    return this.usersRepository.find();
  }
  getUserProfileData(number) {
    try {
      return this.usersRepository.find({
        where: {
          id: number,
        },
      });
    } catch (error) {
      // console.log(
      // '🚀 ~ file: users.service.ts:20 ~ UsersService ~ getUserProfileData ~ error:',
      // error,
      // );
    }
  }

  createUser(userDetails: CreateUserParams) {
    try {
      const newUser = this.usersRepository.create({
        ...userDetails,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return this.usersRepository.save(newUser);
    } catch (error) {
      // console.log(
      // '🚀 ~ file: users.service.ts:24 ~ UsersService ~ createUser ~ error:',
      // error,
      // );
    }
  }
  async UptUser(number, updateUserData: UpdateUserBody) {
    try {
      const find = await this.usersRepository.findOne({
        where: { id: number },
      });

      if (find) {
        const uptData = await this.usersRepository.save({
          id: number,
          ...updateUserData,
        });
      }
    } catch (error) {
      // console.log(
      // '🚀 ~ file: users.service.ts:50 ~ UsersService ~ UptUser ~ error:',
      // error,
      // );
    }
  }
}
