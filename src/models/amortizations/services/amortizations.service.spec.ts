import { Test, TestingModule } from '@nestjs/testing';
import { AmortizationsService } from './amortizations.service';

describe('AmortizationsService', () => {
  let service: AmortizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmortizationsService],
    }).compile();

    service = module.get<AmortizationsService>(AmortizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
