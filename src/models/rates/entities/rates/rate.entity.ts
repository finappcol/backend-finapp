import {
    PrimaryGeneratedColumn,
    Column,
    Entity
  } from 'typeorm';
  
  @Entity('rates')
  export class RateEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    agreementId: number;
  
    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    rate: number;
  
    @Column({ type: 'int' })
    ageStart: number; // Edad Inicial

    @Column({ type: 'int' })
    ageEnd: number; // Edad Final

    @Column({ type: 'int' })
    term: number; // Plazo
  
    @Column({ type: 'decimal', precision: 5, scale: 4, default: 0 })
    factor: number; // Interes Efectivo Anual

    @Column({ type: 'decimal', precision: 5, scale: 1, default: 0 })
    extraPrima: number; // Interes Efectivo Anual

    @Column({ type: 'decimal', precision: 5, scale: 1, default: 0 })
    income: number; // Interes Efectivo Anual

    @Column({ type: 'int' })
    financialEntityId: number;

    @Column({ type: 'int' })
    thirdEntityId: number;

    @Column({ type: 'int' })
    mode: number;
  
  }
  