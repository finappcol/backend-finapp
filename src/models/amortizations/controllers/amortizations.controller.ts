import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAmortizationDto } from '../dtos/amortization.dto';
import { AmortizationsService } from '../services/amortizations.service';

@ApiTags('amortizations')
@Controller('amortizations')
export class AmortizationsController {
  constructor(private amortizationsService: AmortizationsService) {}

  @Post('/calculate')
  calculate(@Body() payload: CreateAmortizationDto) {
    return this.amortizationsService.calculate(payload);
  }
}
