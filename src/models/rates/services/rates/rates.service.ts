import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, LessThan, MoreThan, Repository } from 'typeorm';
import { CreateRateDto } from '../../dtos/rate.dto';
import { Rate } from '../../entities/rates/rate.entity';

@Injectable()
export class RatesService {
    constructor(
        @InjectRepository(Rate)
        private rateRepo: Repository<Rate>,
        private dataSource: DataSource,
    ) {}
    
    async calculate(data: CreateRateDto) {
        const agreementId = data.agreementId;
        const financialEntityId = data.financialEntityId;
        const dateBirth = data.dateBirth;
        const term = data.term;
        const mode = data.mode;
        const income = data.income;
        

        const edad = this.calcularEdad(dateBirth);

        console.log(edad);

        const info = await this.rateRepo.find({
            where : [
                { ageEnd: MoreThan(edad),
                 ageStart: LessThan(edad),
                financialEntityId: financialEntityId,
                agreementId: agreementId,
                term: term,
                mode: mode}
              ]
            });  
            
        console.log(info);


        const periodo_gracia = this.calcularPeriodoGracia(info[0].factor, income, info[0].rate);
        console.log(periodo_gracia);
        //cuota = (monto * 1 + calc_periodo_gracia) * ((interes / (1 - Math.pow((1 + interes), (tiempo * -1)))) + factor_seguro);
        const cuota = (income * 1 + periodo_gracia) * ((info[0].rate / (1 - Math.pow((1 + info[0].rate), (term * -1)))) + info[0].factor);
        console.log(cuota);
        
        return cuota;
    }

    calcularEdad(fecha) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }

    calcularPeriodoGracia(factor, monto, interes){
        let periodo_gracia = 0;
        //let factor_seguro = 0.000652;
        let calc_periodo_gracia1 = monto * interes * (periodo_gracia + 1);
        let calc_periodo_gracia2 = monto * factor * (periodo_gracia + 1);
        let calc_periodo_gracia = calc_periodo_gracia1 + calc_periodo_gracia2;
        return calc_periodo_gracia;
    }
}
