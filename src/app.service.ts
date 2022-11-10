import { Injectable, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';
//import { Client } from 'pg';
import { ClientRequest } from 'http';

/*const client = new Client({
    user: 'lcnnyuwvcwhliu',
    host: 'ec2-3-222-49-168.compute-1.amazonaws.com',
    database: 'd99fc9premo42e',
    password: 'f3323821788cb9d0192560213df835759ecc88c53503bf195a6148df6c532722',
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    }, //ssl: false,
});

client.connect();
client.query('SELECT * FROM User', (err, res) => {
  console.error(err);
  console.log(res.rows);
});*/

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey;
    const name = this.configService.postgres.database;
    return `Hello World! ${apiKey} ${name}`;
  }
}
