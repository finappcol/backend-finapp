//export type User = EntityTarget<unknown>;

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

import { User } from '../entities/user.entity';
import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dtos/user.dto';
import { Like } from "typeorm";
import dataSource from 'src/database/dataSource';
import { string } from 'joi';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private dataSource: DataSource,
  ) {}

  findAll(params?: FilterUserDto) {
    console.log(params);
    if (Boolean(params.email) || Boolean(params.name)) {
      const  email  = params.email;
      const  name  = params.name;
      console.log(email);
      console.log(name);
      return this.userRepo.find({
        where : [
          { email: email},
          { firstName: Like("%"+name+"%")},
          { secondName: Like("%"+name+"%")}
        ]
      });
    }
    console.log("todos");
    return this.userRepo.find();
  }

  findOne(id: number) {
    const user = this.userRepo.findOne({
      where: {
        userId: id,
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
    const user = await this.userRepo.findOne({ where: { userId: id } });
    this.userRepo.merge(user, changes);
    return this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }

  async findByProfile(profile: string) {
    const basic = [
      'user.userId',
      'user.firstName',
      'user.lastName',
      'user.email',
      'user.cellPhone',
      'user.photo',
    ];

    const user = await this.dataSource
      .getRepository(User)
      .createQueryBuilder('user')
      .select(profile == 'basic' ? basic : ['user'])
      .getOne();

    if (!user) {
      throw new NotFoundException(`User #${profile} not found`);
    }
    return user;
  }
}
