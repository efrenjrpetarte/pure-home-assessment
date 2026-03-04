import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyAgentModule } from './property-agent/property-agent.module';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [PropertyAgentModule, PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
