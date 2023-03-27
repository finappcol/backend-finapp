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
        const amount = data.amount;
        

        const edad = this.calcularEdad(dateBirth);

        console.log(edad);
        console.log(amount);

        const info = await this.rateRepo.find({
            where : [{ 
                ageEnd: MoreThan(edad),
                ageStart: LessThan(edad),
                financialEntityId: financialEntityId,
                agreementId: agreementId,
                term: term,                    
                mode: mode
            }]
        });  

        let factor = Number(info[0].factor);
            
        console.log(info);
        console.log('41',((info[0].rate / (1 - Math.pow((1 + info[0].rate), (term * -1))))));
        console.log('42',factor);
        console.log('43',((1 - Math.pow((1 + info[0].rate), (term * -1)))));
        console.log('44',(Math.pow((1 + info[0].rate), (term * -1))));
        console.log('45',((info[0].rate / (1 - Math.pow((1 + info[0].rate), (term * -1)))) + factor));
        
        



        const periodo_gracia = this.calcularPeriodoGracia(info[0].factor, amount, info[0].rate);
        console.log(periodo_gracia);
        //cuota = (monto * 1 + calc_periodo_gracia) * ((interes / (1 - Math.pow((1 + interes), (tiempo * -1)))) + factor_seguro);
        const cuota = (amount * 1 + periodo_gracia) * ((info[0].rate / (1 - Math.pow((1 + info[0].rate), (term * -1)))) + factor);
        console.log('46',(amount * 1 + periodo_gracia));
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

    calcularPeriodoGracia(factor, amount, rate){
        let periodo_gracia = 0;
        //let factor_seguro = 0.000652;
        let calc_periodo_gracia1 = amount * rate * (periodo_gracia + 1);
        let calc_periodo_gracia2 = amount * factor * (periodo_gracia + 1);
        let calc_periodo_gracia = calc_periodo_gracia1 + calc_periodo_gracia2;
        return calc_periodo_gracia;
    }
}
