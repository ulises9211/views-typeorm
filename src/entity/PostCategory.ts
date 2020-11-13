import {ViewEntity, ViewColumn, Connection} from "typeorm";
import { Category } from "./Category";
import { Clasificcion } from "./Clasificacion";
import { Post } from "./Post";

@ViewEntity({ 
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("post.id", "id")
        .addSelect("post.name", "name")
        .addSelect("category.name", "categoryName")
        .addSelect("clasificacion.name", "clasificacionName")
        .from(Post, "post")
        .leftJoin(Category, "category", "category.id = post.categoryId")
        .leftJoin(Clasificcion, "clasificacion", "clasificacion.id = post.clasificacionId")
})
export class PostCategory {

    @ViewColumn()
    id: number;

    @ViewColumn()
    name: string;

    @ViewColumn()
    categoryName: string;

    @ViewColumn()
    clasificacionName: string;

}