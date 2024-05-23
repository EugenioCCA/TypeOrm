/*

//id,nombre,descripcion,edificioId

import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Edificio } from './edificio';

@Entity()
export class Area extends BaseEntity {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nombre : string

    @Column()
    descripcion : string


    @ManyToOne((Edificio) => Edificio.id)
    @JoinColumn()
    edificioId : Edificio
}
*/