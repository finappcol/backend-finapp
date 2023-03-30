import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { array } from 'joi';
import { execArgv } from 'process';
import { DataSource, LessThan, MoreThan, Repository, QueryBuilder, createQueryBuilder } from 'typeorm';
import { resourceLimits } from 'worker_threads';
import { CreateRateDto } from '../../dtos/rate.dto';
import { RateEntity } from '../../entities/rates/rate.entity';

@Injectable()
export class RatesService {
    constructor(
        @InjectRepository(RateEntity)
        private rateRepo: Repository<RateEntity>,
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
            }],
        });

           

        
        
        const query = this.dataSource
            .getRepository(RateEntity)
            .createQueryBuilder('rates')
            .where("rates.ageEnd > :ageEnd", { ageEnd: edad })
            .andWhere("rates.ageStart < :ageStart", { ageStart: edad })
            .andWhere("rates.agreementId = :agreementId", { agreementId: agreementId })
            .andWhere("rates.term = :term", { term: term })
            .andWhere("rates.mode = :mode", { mode: mode })
                   
        if(financialEntityId){
            query.andWhere("rates.financialEntityId = :financialEntityId", { financialEntityId: financialEntityId })
        }

        const rates = await query.getMany();

        function Result(agreementId, rate, modeId, financialEntityId, quote) {
            this.agreementId = agreementId;
            this.rate = rate;
            this.modeId = modeId;
            this.financialEntityId = financialEntityId;
            this.quote = quote
         }

        const arreglo = [];

        rates.map((value: RateEntity, index: number, array: RateEntity[]) =>{
            let factor = Number(value.factor);
            let rate = Number(value.rate);
                
            console.log("info",info);
            console.log('41',((rate / (1 - Math.pow((1 + rate), (term * -1))))));
            console.log('42',factor);
            console.log('43',((1 - Math.pow((1 + rate), (term * -1)))));
            console.log('44',(Math.pow((1 + rate), (term * -1))));
            console.log('45',((rate / (1 - Math.pow((1 + rate), (term * -1)))) + factor));    
        

            //const xx = `${amount}`;
            //{{}}

            const periodo_gracia = this.calcularPeriodoGracia(factor, amount, rate);
            console.log(periodo_gracia);
            //cuota = (monto * 1 + calc_periodo_gracia) * ((interes / (1 - Math.pow((1 + interes), (tiempo * -1)))) + factor_seguro);
            const cuota = (amount * 1 + periodo_gracia) * ((rate / (1 - Math.pow((1 + rate), (term * -1)))) + factor);
            //const cuota1 = (amount * 1 + periodo_gracia) * ((rate / (1 - Math.pow((1 + rate), (term * -1)))) + factor);

            var result = new Result(value.agreementId, rate, value.mode, value.financialEntityId, Math.round(cuota));
            arreglo.push(result);

            console.log('46',(amount * 1 + periodo_gracia));
            console.log(cuota);
        });
        
        console.log(arreglo);
        
        return arreglo;
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

    /*const resultado = array;

        if(financialEntityId){}
            info.map((value: RateEntity, index: number, array: RateEntity[]) =>{
                if(value.financialEntityId == financialEntityId){

                    }
            });
        }*/

        
        /*
        
        
        const results = await info1.getRawAndEntities();
        console.log("Linea 49",results.entities);
        return results.entities;
        results.entities.map<unknown>((value: RateEntity, index: number, array: RateEntity[]) => {
            console.log("index"+index, value.factor);
        });
        
        const query = somehow
  .createQueryBuilder('users')
  .where(`user.deletedAt IS NOT NULL`)

if (params.hasImage) {
  query.andWhere(`user.image IS NOT NULL`)
}

if (params.q != '') {
  query.andWhere(`user.name LIKE :q`, { q: params.q })
}

const users = await sql.getMany()

Otra opcion

    findAllByDto (dto: ArticleSearchDto) {
        return createQueryBuilder()
            .select("article")
            .from(Article, "article")
            .andWhere(this.eqTitle(dto.title)) // or title? `article.title = :${title}` : null;
            .orderBy("article.id desc")
            .getMany();
    }

    private eqTitle(title: string): string {
        if(!title) {
            return null;
        }

        return `article.title = :${title}`;
    }


*/
}
