import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('public.user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  photo: string;
}
