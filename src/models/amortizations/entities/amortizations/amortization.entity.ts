import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('amortizations')
export class Amortization {
  @PrimaryGeneratedColumn()
  amortId: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  amount: number;

  @Column({ type: 'int' })
  months: number; // Meses

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  eAInterest: number; // Interes Efectivo Anual

  @Column({ type: 'date' })
  dateBegin: string; // Fecha de Ingreso

  // Column with JSON data type
  @Column('simple-json', { nullable: true })
  results: {
    id: number;
    amount: Float32Array;
    months: number;
    eAInterest: Float32Array;
    dateBegin: string;
  };

  @CreateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
