import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesController } from './controllers/rates/rates.controller';
import { Rate } from './entities/rates/rate.entity';
import { RatesService } from './services/rates/rates.service';

@Module({
    imports: [TypeOrmModule.forFeature([Rate])],
    controllers: [RatesController],
    providers: [RatesService],    
})
export class RatesModule {}
