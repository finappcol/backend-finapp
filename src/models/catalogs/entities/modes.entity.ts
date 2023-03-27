import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('modes')
export class ModeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    mode: string;
}