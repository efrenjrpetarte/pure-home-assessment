import { Test, TestingModule } from '@nestjs/testing';
import { PropertyAgentController } from './property-agent.controller';

describe('PropertyAgentController', () => {
  let controller: PropertyAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyAgentController],
    }).compile();

    controller = module.get<PropertyAgentController>(PropertyAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
