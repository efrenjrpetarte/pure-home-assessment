import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { PropertyAgentModule } from 'src/property-agent/property-agent.module';

@Module({
  imports: [PropertyAgentModule],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule {}
