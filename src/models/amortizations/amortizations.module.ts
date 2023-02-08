import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmortizationsController } from './controllers/amortizations.controller';
import { Amortization } from './entities/amortizations/amortization.entity';
import { AmortizationsService } from './services/amortizations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Amortization])],
  controllers: [AmortizationsController],
  providers: [AmortizationsService],
})
export class AmortizationsModule {}
