import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  Matches,
  IsIn,
} from 'class-validator';

export class RegisterDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password!: string;

  @IsOptional()
  @IsString()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number' })
  phone?: string;

  @IsOptional()
  @IsIn(['candidate', 'recruiter'], { message: 'Role must be candidate or recruiter' })
  role?: string;
}