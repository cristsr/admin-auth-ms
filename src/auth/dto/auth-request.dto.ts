import { IsEmail, IsEnum, IsString } from 'class-validator';
import { PickType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { RegisterType } from 'auth/types';

export class AuthReq {}

export class RegisterReq extends AuthReq {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsEnum(RegisterType)
  type: RegisterType;
}

export class LoginReq extends PickType(RegisterReq, [
  'email',
  'password',
  'type',
]) {}

export class RecoveryReq extends PickType(RegisterReq, ['email']) {}
