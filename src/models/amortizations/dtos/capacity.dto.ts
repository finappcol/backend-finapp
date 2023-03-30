import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsOptional,
    IsNumber,
  } from 'class-validator';
  import { PartialType, ApiProperty } from '@nestjs/swagger';
  import { isFloat32Array } from 'util/types';
  
  export class CapacityDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Income / Ingresos' })
    readonly income: number;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Other incomes / Otros Ingresos' })
    readonly otherIncome: number;
  
    @IsNumber()
    @ApiProperty({ description: 'Expenses / Gastos Financieros' })
    readonly expenses: number;
  
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Paysheet Discounts / Descuentos por nómina' })
    readonly discounts: number;
  }
  
  export class UpdateUserDto extends PartialType(CapacityDto) {}
  