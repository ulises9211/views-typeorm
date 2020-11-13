import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Category} from "./Category";
import { Clasificcion } from "./Clasificacion";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    categoryId: number;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "categoryId" })
    category: Category;

    @ManyToOne(() => Clasificcion)
    @JoinColumn({ name: "clasificacionId" })
    clasificacion: Clasificcion;

}