import { Module } from '@nestjs/common';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';
import { PropertyModule } from 'src/property/property.module';

@Module({
  imports: [PropertyModule],
  controllers: [FamilyController],
  providers: [FamilyService]
})
export class FamilyModule {}
