import { IsOptional } from 'class-validator';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('public.user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  name: string;
}

export class FilterUserDto {
  @IsOptional()
  email: string;

  @IsOptional()
  name: string;
}
