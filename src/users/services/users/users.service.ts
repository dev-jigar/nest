import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from 'src/typeorm/entities/users';
import { CreateUserParams } from 'src/utils/types';

import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(user) private usersRepository: Repository<user>,
  ) {}
  listUsers() {}

  createUser(userDetails: CreateUserParams) {
    const newUser = this.usersRepository.create({
      ...userDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.usersRepository.save(newUser);
  }
}
