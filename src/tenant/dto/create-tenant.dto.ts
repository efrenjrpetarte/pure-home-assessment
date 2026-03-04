import { IsString } from 'class-validator';

export class CreateTenantDto {
  @IsString()
  familyId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  contactNumber: string;
}