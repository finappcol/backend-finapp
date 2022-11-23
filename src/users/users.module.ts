import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';
import { JobUser } from './entities/jobUser.entity';

//import { ProductsModule } from '../products/products.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, JobUser])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
