import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      user: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT, 10),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    apiKey: process.env.API_KEY,
  };
});
