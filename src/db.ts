import { DataSource } from "typeorm";
import {User} from "../src/entity/user";
import { Empleado } from "./entity/empleado";
import { Vale } from "./entity/vale";
//import { Edificio } from "./entity/edificio";
//import { Area } from "./entity/area";

/*
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'administrador',
    password: 'administrador',
    port: 5432,
    database: 'db_sice',
    entities: [User,Empleado,Vale,Edificio,Area],
    logging: true, 
    synchronize: true 
})
*/
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'monorail.proxy.rlwy.net',
    username: 'postgres',
    password: 'LBplmHDEKHMABmPWVCAbvusKyrfanMHu',
    port: 16680,
    database: 'railway',
    entities: [User,Empleado,Vale],
    logging: true, 
    synchronize: true 
})

