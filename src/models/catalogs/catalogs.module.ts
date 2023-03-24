import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialEntity } from '../financialEntity/entities/financialEntity.entity';
import { CatalogsController } from './controllers/catalogs/catalogs.controller';
import { CatalogsService } from './services/catalogs/catalogs.service';

@Module({
    imports: [TypeOrmModule.forFeature([FinancialEntity])],
    controllers: [CatalogsController],
    providers: [CatalogsService],    
})
export class CatalogsModule {}
