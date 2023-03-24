import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinancialEntity } from 'src/models/financialEntity/entities/financialEntity.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CatalogsService {
    constructor(
        @InjectRepository(FinancialEntity)
        private banksRepo: Repository<FinancialEntity>,
        private dataSource: DataSource,
    ) {}

    getBanks(){
        return this.banksRepo.find();
    }
}
