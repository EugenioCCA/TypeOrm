import { BaseEntity, Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Empleado } from "./empleado";

@Entity()
export class Vale extends BaseEntity {

    
    
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => Empleado)
    @JoinColumn()
    idEmpleado : Empleado

    @Column()
    num_serie : number

    @Column()
    unidad : number

    @Column()
    modelo : string

    @Column()
    marca : string

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizado: Date


}