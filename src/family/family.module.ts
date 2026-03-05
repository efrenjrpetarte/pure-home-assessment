import { forwardRef, Module } from '@nestjs/common';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';
import { PropertyModule } from 'src/property/property.module';

@Module({
  imports: [forwardRef(() => PropertyModule)],
  controllers: [FamilyController],
  providers: [FamilyService],
  exports: [FamilyService]
})
export class FamilyModule {}
