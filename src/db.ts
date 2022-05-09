import { DataSource } from 'typeorm'
import { Tecnico } from "./entities/Tecnico";
import { Servicio } from './entities/Servicio';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://hrqzvbnwznucrm:cd336c91b02aef3b658774483033368c43d2631a421f561c20e9849b19d60edc@ec2-3-230-122-20.compute-1.amazonaws.com:5432/d8ai2tbk170ua5',
  entities: [Tecnico, Servicio],
  logging: true,
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
}
})

