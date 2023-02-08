import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateAmortizationDto } from '../dtos/amortization.dto';
import { Amortization } from '../entities/amortizations/amortization.entity';

@Injectable()
export class AmortizationsService {
  constructor(
    @InjectRepository(Amortization)
    private userRepo: Repository<Amortization>,
    private dataSource: DataSource,
  ) {}

  calculate(data: CreateAmortizationDto) {
    const interesEA = data.eAInterest;
    const tiempo = data.months;

    const base = 1 + interesEA / 100;
    const exp = 1 / 12;
    const interes = Math.pow(base, exp) - 1;
    console.log('interes', interes);

    //const fechas = [];

    //const mes_actual: number = new Date().getMonth() + 1;

    let cuota = 0;
    const monto = 1;
    cuota =
      (monto * (Math.pow(1 + interes / 100, tiempo) * (interes / 100))) /
      (Math.pow(1 + interes / 100, tiempo) - 1);
    cuota =
      (monto * (Math.pow(1 + interes / 100, tiempo) * (interes / 100))) /
      (Math.pow(1 + interes / 100, tiempo) - 1);
    cuota =
      monto *
      ((interes * Math.pow(1 + interes, tiempo)) /
        (Math.pow(1 + interes, tiempo) - 1));
    console.log(interes);

    const response = {
      interes: interes,
      monto: monto,
      cuota: cuota,
    };

    return response;
  }
}
