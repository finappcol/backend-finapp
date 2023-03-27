import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialEntity } from 'src/models/financialEntity/entities/financialEntity.entity';
import { DataSource, Repository } from 'typeorm';
import { AgreementEntity } from '../../entities/agreement.entity';
import { ModeEntity } from '../../entities/modes.entity';

@Injectable()
export class CatalogsService {
    constructor(
        @InjectRepository(FinancialEntity)
        private banksRepo: Repository<FinancialEntity>,

        @InjectRepository(AgreementEntity)
        private agreementsRepo: Repository<AgreementEntity>,

        @InjectRepository(ModeEntity)
        private modesRepo: Repository<ModeEntity>,

        private dataSource: DataSource,
    ) {}

    getBanks(){
        return this.banksRepo.find();
    }

    getAgreements(){
        return this.agreementsRepo.find();
    }

    getModes(){
        return this.modesRepo.find();
    }
}
