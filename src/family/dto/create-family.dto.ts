import { IsString } from 'class-validator';

export class CreateFamilyDto {
  @IsString()
  propertyId: string;

  @IsString()
  name: string;
}