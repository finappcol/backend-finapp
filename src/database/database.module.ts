import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../config';

//import { User } from '../users/entities/user.entity';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, database, password, port } = configService.mysql;
        return {
          type: 'mysql',
          host,
          port,
          username: user,
          password,
          database: database,
          //synchronize: true,
          autoLoadEntities: true,
          /*ssl: {
            rejectUnauthorized: false,
          },
          entities: [User],*/
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useFactory: (/*configService: ConfigType<typeof config>*/) => {
        //const { user, host, database, password, port } = configService.postgres;
        const client = new Client({
          user: 'lcnnyuwvcwhliu',
          host: 'ec2-3-222-49-168.compute-1.amazonaws.com',
          database: 'd99fc9premo42e',
          password:
            'f3323821788cb9d0192560213df835759ecc88c53503bf195a6148df6c532722',
          port: 5432,
          ssl: {
            rejectUnauthorized: false,
          },
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'PG'],
})
export class DatabaseModule {}
