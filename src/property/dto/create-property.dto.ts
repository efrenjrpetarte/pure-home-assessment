import { IsString } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  agentId: string;

  @IsString()
  name: string;

  @IsString()
  address: string;
}