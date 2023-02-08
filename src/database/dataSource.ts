import { JobUser } from 'src/users/entities/jobUser.entity';
import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';

export default new DataSource({
  type: 'postgres',
  host: 'containers-us-west-113.railway.app',
  port: 7608,
  username: 'postgres',
  password: 'dL6Lk2VsSC827EuTN1dS',
  database: 'railway',
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});

/*
"typeorm": "ts-node ./node_modules/typeorm/cli",
    "typeorm:run-migrations": "npm run typeorm migration:run -- -d ./src/typeOrm.config.ts",
    "typeorm:generate-migration": "npm run typeorm -- -d ./src/typeOrm.config.ts migration:generate ./migrations/$npm_config_name",
    "typeorm:create-migration": "npm run typeorm -- migration:create ./migrations/$npm_config_name",
    "typeorm:revert-migration": "npm run typeorm -- -d ./src/typeOrm.config.ts migration:revert"*/

/*
typeOrm.config.ts
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
//import { ConfigService } from '@nestjs/config';
//import config from './config';

//config();

//const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: 'containers-us-west-113.railway.app',
  port: 7608,
  username: 'postgres',
  password: 'uAA9mCtQ0hQm8BwupKUT',
  database: 'railway',
  entities: [User],
});
*/
//entities: ['./src/**/*.entity.ts'],
