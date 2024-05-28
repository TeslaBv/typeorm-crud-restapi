import { DataSource } from "typeorm";
import {User} from '../src/entity/User';
import { Empleado } from "./entity/empleado";
import { Area } from "./entity/Area";
import { Edificio } from "./entity/Edificio";
import { Vale } from "./entity/vale";


/*  export const AppDataSourse = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'administrador',
    password: 'administrador',
    port: 5432,
    database: 'db_sice',
    entities: [User,Empleado, Edificio, Area, Vale],
    logging: true,
    synchronize: true
})*/

export const AppDataSourse = new DataSource({
    type: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    username: 'postgres',
    password: 'uCqnLdMyOcBdWmjuKgFNGmKbzfRNriMj',
    port: 36149,
    database: 'railway',
    entities: [User,Empleado, Edificio, Area, Vale],
    logging: true,
    synchronize: true
})