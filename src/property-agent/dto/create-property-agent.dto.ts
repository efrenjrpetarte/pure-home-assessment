import { IsString, IsEmail } from 'class-validator';

export class CreatePropertyAgentDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  mobileNumber: string;
}