import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('jobUser')
export class JobUser {
  @PrimaryGeneratedColumn()
  jobId: number;

  @Column({ type: 'varchar' })
  activity: string; // Actividad principal (Pensionado, Empleado, hogar, estudiante, desempleado)

  @Column({ type: 'varchar' })
  description: number; // Describa la actividad de la cuál deriva más del 50% de sus ingresos

  @Column({ type: 'int' })
  companyId: number;

  @Column({ type: 'date' })
  dateBegin: string; // Fecha de Ingreso

  @Column({ type: 'varchar' })
  agreementType: string; // Tipo de contrato (Indefinido, labor/hora, Carrera Administrativa)

  @Column({ type: 'float' })
  income: number; // Ingresos

  @Column({ type: 'float' })
  expenses: number; // Egresos

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
