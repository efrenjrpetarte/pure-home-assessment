import { IsString, IsEmail, IsNumberString, Length, IsNotEmpty } from 'class-validator';

export class CreatePropertyAgentDto {
  @IsString({ message: 'Firstname must be a string' })
  @IsNotEmpty({ message: 'Firstname is required' })
  firstName: string;

  @IsString({ message: 'Lastname must be a string' })
  @IsNotEmpty({ message: 'Lastname is required' })
  lastName: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNumberString({}, { message: 'Mobile number must contain only numbers' })
  @Length(11, 11, { message: 'Mobile number must be exactly 11 digits' })
  mobileNumber: string;
}