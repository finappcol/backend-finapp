import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAmortizationDto } from '../dtos/amortization.dto';
import { AmortizationsService } from '../services/amortizations.service';
import { CapacityDto } from '../dtos/capacity.dto';

@ApiTags('amortizations')
@Controller('amortizations')
export class AmortizationsController {
  constructor(private amortizationsService: AmortizationsService) {}

  @Post('/calculate')
  calculate(@Body() payload: CreateAmortizationDto) {
    return this.amortizationsService.calculate(payload);
  }

  @Post('/capacity')
  capacity(@Body() payload: CapacityDto) {
    return this.amortizationsService.repaymentCapacity(payload);
  }
  //Repayment capacity
}
