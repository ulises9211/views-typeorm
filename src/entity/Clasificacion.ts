import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Clasificcion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}