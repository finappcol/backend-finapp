import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Type Id' })
  readonly typeId: number;

  @IsNumber()
  @ApiProperty({ description: 'Identificacion user' })
  readonly identificacion: number;

  @IsString()
  @ApiProperty({ description: 'First Name of User' })
  readonly firstName: string;

  @IsString()
  @ApiProperty({ description: 'Second Name or User' })
  readonly secondName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Last Name of User' })
  readonly lastName: string;

  @IsString()
  @ApiProperty({ description: 'Last Name 2 if exits' })
  readonly lastName2: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email of User' })
  readonly email: string;

  @IsString()
  @ApiProperty({ description: 'Phone if exits' })
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'CellPhone User' })
  readonly cellPhone: string;

  @IsString()
  @ApiProperty({ description: 'Address of User' })
  readonly address: string;

  @IsString()
  @ApiProperty({ description: 'Path of photo' })
  readonly photo: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ description: 'Job of user' })
  readonly jobId: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class FilterUserDto {
  @IsOptional()
  email: string;

  @IsOptional()
  name: string;
}
