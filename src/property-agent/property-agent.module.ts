import { Module } from '@nestjs/common';
import { PropertyAgentController } from './property-agent.controller';
import { PropertyAgentService } from './property-agent.service';

@Module({
  controllers: [PropertyAgentController],
  providers: [PropertyAgentService],
  exports: [PropertyAgentService]
})
export class PropertyAgentModule {}
