import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_NAME,
      password: process.env.POSTGRES_PASSWORD,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    mysql: {
      user: process.env.MYSQL_USER,
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_NAME,
      password: process.env.MYSQL_PASSWORD,
      port: parseInt(process.env.MYSQL_PORT, 10),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    apiKey: process.env.API_KEY,
  };
});
