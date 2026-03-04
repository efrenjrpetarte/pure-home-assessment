import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyAgentModule } from './property-agent/property-agent.module';
import { PropertyModule } from './property/property.module';
import { FamilyModule } from './family/family.module';
import { TenantModule } from './tenant/tenant.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyMiddleware } from './common/midddleware/api-key.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PropertyAgentModule, PropertyModule, FamilyModule, TenantModule, AnnouncementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*');
  }
}
