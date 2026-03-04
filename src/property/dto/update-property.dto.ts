import { IsString } from 'class-validator';

export class UpdatePropertyDto {
  @IsString()
  agentId: string;

  @IsString()
  name: string;

  @IsString()
  address: string;
}