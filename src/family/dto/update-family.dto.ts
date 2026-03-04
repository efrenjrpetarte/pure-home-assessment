import { IsString } from 'class-validator';

export class UpdateFamilyDto {
  @IsString()
  propertyId: string;

  @IsString()
  name: string;
}