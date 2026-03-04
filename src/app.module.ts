import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyAgentModule } from './property-agent/property-agent.module';
import { PropertyModule } from './property/property.module';
import { FamilyModule } from './family/family.module';

@Module({
  imports: [PropertyAgentModule, PropertyModule, FamilyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
