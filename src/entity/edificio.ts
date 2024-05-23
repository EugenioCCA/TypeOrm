
/*//id,nombre,planta,descripcion,fechaCreado,fechaActualizado
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Area } from "./area";

@Entity()
export class Edificio extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    planta: string

    @Column()
    descripcion : string

    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizado: Date

    @OneToMany(() => Area, (Area) => Area.id)
    areaId : Area[]
}*/