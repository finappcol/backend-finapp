import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('financialEntity')
export class FinancialEntity {
    @PrimaryGeneratedColumn()
    financialEntityId: number;

    @Column({ type: 'varchar' })
    name: string;
}