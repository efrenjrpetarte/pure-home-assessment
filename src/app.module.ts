import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyAgentModule } from './property-agent/property-agent.module';

@Module({
  imports: [PropertyAgentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
