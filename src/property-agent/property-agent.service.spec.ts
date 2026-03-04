import { Test, TestingModule } from '@nestjs/testing';
import { PropertyAgentService } from './property-agent.service';

describe('PropertyAgentService', () => {
  let service: PropertyAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyAgentService],
    }).compile();

    service = module.get<PropertyAgentService>(PropertyAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
