import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsOptional,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the email of user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly name: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class FilterUserDto {
  @IsOptional()
  email: string;

  @IsOptional()
  name: string;
}
