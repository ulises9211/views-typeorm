import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Category} from "./Category";
import { Clasificcion } from "./Clasificacion";
import { Comments } from "./Comments";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "categoryId" })
    category: Category;

    @ManyToOne(() => Clasificcion)
    @JoinColumn({ name: "clasificacionId" })
    clasificacion: Clasificcion;

    @ManyToOne(() => Clasificcion)
    @JoinColumn({ name: "commentId" })
    comment: Comments;

}