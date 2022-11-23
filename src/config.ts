import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      ssl: {
        rejectUnauthorized: false,
      },
      type: 'potgres',
    },
    railway: {
      user: process.env.RAILWAY_USER,
      host: process.env.RAILWAY_HOST,
      database: process.env.RAILWAY_DB,
      password: process.env.RAILWAY_PASSWORD,
      port: parseInt(process.env.RAILWAY_PORT, 10),
      ssl: {
        rejectUnauthorized: false,
      },
      type: 'potgres',
    },
    mysql: {
      user: process.env.MYSQL_USER,
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DB,
      password: process.env.MYSQL_PASSWORD,
      port: parseInt(process.env.MYSQL_PORT, 10),
      ssl: {
        rejectUnauthorized: false,
      },
      type: 'mysql',
    },
    apiKey: process.env.API_KEY,
  };
});
