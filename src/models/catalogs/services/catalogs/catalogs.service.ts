import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialEntity } from 'src/models/financialEntity/entities/financialEntity.entity';
import { DataSource, Repository } from 'typeorm';
import { AgreementEntity } from '../../entities/agreement.entity';

@Injectable()
export class CatalogsService {
    constructor(
        @InjectRepository(FinancialEntity)
        private banksRepo: Repository<FinancialEntity>,

        @InjectRepository(AgreementEntity)
        private agreementsRepo: Repository<AgreementEntity>,

        private dataSource: DataSource,
    ) {}

    getBanks(){
        return this.banksRepo.find();
    }

    getAgreements(){
        return this.agreementsRepo.find();
    }

    getTypes(){
        return [
            {"id":1, "type":"Ampliación"},
            {"id":2, "type":"Compra de Cartera"},
            {"id":3, "type":"Nuevo"},
            {"id":4, "type":"Retanqueo"},
            {"id":5, "type":"Retanqueo Libre Inversión"},
        ]
    }
}
