import { forwardRef, Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { FamilyModule } from 'src/family/family.module';
import { PropertyAgentModule } from 'src/property-agent/property-agent.module';

@Module({
  imports: [forwardRef(() => PropertyAgentModule), forwardRef(() => FamilyModule)],
  controllers: [PropertyController],
  providers: [PropertyService],
  exports: [PropertyService]
})
export class PropertyModule {}
