import { IsDate, IsString } from 'class-validator';

export class CreateAnnouncementDto {
  @IsString()
  agentId: string;

  @IsString()
  propertyId: string;

  @IsString()
  familyId: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDate()
  date: Date;
}