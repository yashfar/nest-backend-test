import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  password: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  name?: string | undefined;

  @IsOptional()
  @IsEmail()
  email?: string;
}
