import { Module } from '@nestjs/common';
import { AnnouncementController } from './announcement.controller';
import { AnnouncementService } from './announcement.service';
import { PropertyAgentModule } from 'src/property-agent/property-agent.module';
import { PropertyModule } from 'src/property/property.module';
import { FamilyModule } from 'src/family/family.module';

@Module({
  imports: [PropertyAgentModule, PropertyModule, FamilyModule],
  controllers: [AnnouncementController],
  providers: [AnnouncementService]
})
export class AnnouncementModule {}
