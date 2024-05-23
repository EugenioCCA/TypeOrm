import { BaseEntity, Entity, Column, CreateDateColumn,PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./user";
import { Vale } from "./vale";
import { join } from "path";

@Entity()
export class Empleado extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User)
    @JoinColumn()
    usuarioId: User

    @Column()
    nombre : string

    @Column()
    ap_paterno: string

    @Column()
    ap_materno: string

    @Column()
    telefono: string

    @OneToMany(() => Vale, (Vale) => Vale.id)
    idVale : Vale[]

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizado: Date
}