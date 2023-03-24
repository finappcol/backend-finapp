import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsOptional,
    IsNumber,
  } from 'class-validator';
  import { PartialType, ApiProperty } from '@nestjs/swagger';
  import { isFloat32Array } from 'util/types';
  
  export class CreateRateDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Agreement Id' })
    readonly agreementId: number;
  
    @IsNumber()
    @ApiProperty({ description: 'financialEntityId' })
    readonly financialEntityId: number;
  
    @ApiProperty({ description: 'Fecha de nacimiento' })
    readonly dateBirth: Date;

    @ApiProperty({ description: 'Plazo' })
    @IsNumber()
    readonly term: number;

    @ApiProperty({ description: 'Monto' })
    @IsNumber()
    readonly income: number;

    @ApiProperty({ description: 'Tipo' })
    @IsString()
    readonly mode: string;


  }
  
  export class UpdateUserDto extends PartialType(CreateRateDto) {}
  