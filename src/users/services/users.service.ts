import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterQuery, Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { FilterUserDto, User } from '../entities/user.entity';
//import { Order } from '../entities/order.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

import { Client } from 'pg';
import { isNotEmpty } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  findAll(params?: FilterUserDto) {
    if (params) {
      const { email, name } = params;
      return this.userRepo.find({
        where: [{ email: email }, { name: name }],
      });
    }
    return this.userRepo.find();
  }

  findOne(id: number) {
    const user = this.userRepo.findOne({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    return this.userRepo.save(newUser);
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id: id } });
    this.userRepo.merge(user, changes);
    return this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
