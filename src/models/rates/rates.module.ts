import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesController } from './controllers/rates/rates.controller';
import { RateEntity } from './entities/rates/rate.entity';
import { RatesService } from './services/rates/rates.service';

@Module({
    imports: [TypeOrmModule.forFeature([RateEntity])],
    controllers: [RatesController],
    providers: [RatesService],    
})
export class RatesModule {}
