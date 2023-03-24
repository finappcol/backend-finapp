import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatalogsService } from '../../services/catalogs/catalogs.service';

@ApiTags('rates')
@Controller('catalogs')
export class CatalogsController {
    constructor(private catalogsService: CatalogsService) {}

    @Get('/banks')
    getBanks() {
        return this.catalogsService.getBanks();
    }
}