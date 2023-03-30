import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateAmortizationDto } from '../dtos/amortization.dto';
import { Amortization } from '../entities/amortizations/amortization.entity';
import { CapacityDto } from '../dtos/capacity.dto';

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

  repaymentCapacity(data: CapacityDto){

    const income = Number(data.income);
    const otherIncome = Number(data.otherIncome);
    const expenses = Number(data.expenses);
    const discounts = Number(data.discounts);
    const legalDiscounts =  -(income * 0.08) ; // TODO: create var to porcentaje    

    const totalIncome = income + otherIncome + legalDiscounts;
    const protectionValue = totalIncome * 0.08 ; // TODO: create var to porcentaje

    const totalExpenses = protectionValue + expenses + discounts;

    const totalCapacity = +totalIncome - totalExpenses;
    console.log(66, data);
    console.log(67, legalDiscounts, totalIncome, protectionValue, totalExpenses, totalCapacity);

    return Math.round(totalCapacity);
  }
}
