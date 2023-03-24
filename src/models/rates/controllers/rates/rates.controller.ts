import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRateDto } from '../../dtos/rate.dto';
import { RatesService } from '../../services/rates/rates.service';

@ApiTags('rates')
@Controller('rates')
export class RatesController {
    constructor(private ratesService: RatesService) {}

    @Post('/calculate')
    calculate(@Body() payload: CreateRateDto) {
        return this.ratesService.calculate(payload);
    }
}