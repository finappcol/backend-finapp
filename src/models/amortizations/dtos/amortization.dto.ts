import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { isFloat32Array } from 'util/types';

export class CreateAmortizationDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'Amortization Id' })
  readonly amortId: number;

  @IsNumber()
  @ApiProperty({ description: 'Amount' })
  readonly amount: number;

  @IsNumber()
  @ApiProperty({ description: 'Months' })
  readonly months: number;

  @IsNumber()
  @ApiProperty({ description: 'Effective Annual Interest' })
  readonly eAInterest: number;

  @ApiProperty({ description: 'Fecha de ingreso' })
  readonly dateBegin: Date;
}

export class UpdateUserDto extends PartialType(CreateAmortizationDto) {}
