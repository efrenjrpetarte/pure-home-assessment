import { IsEmail, IsString } from "class-validator";

export class UpdatePropertyAgentDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  mobileNumber: string;
}