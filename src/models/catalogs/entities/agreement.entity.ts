import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('agreement')
export class AgreementEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    agreement: string;

    @Column({ type: 'boolean' })
    active: boolean;

    @Column({ type: 'boolean' })
    pensioner: boolean;
}