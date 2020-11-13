import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import { View } from "typeorm/schema-builder/view/View";
import { PostCategory } from "./entity/PostCategory";


 createConnection().then(async connection => {

    // const user = await getRepository(User)
    // .createQueryBuilder('user')
    // .innerJoinAndSelect('user.photos', 'photo')
    // .getMany();

    // const user = await getRepository(User)
    // .createQueryBuilder('user')
    // //.innerJoinAndSelect('user.photos', 'photo')
    // .innerJoinAndSelect('user.puesto', 'puesto')
    // .getRawMany();

    // console.log(user);
     const vistaPost = await getRepository(PostCategory).find();
     console.log(vistaPost);

 }).catch(error => console.log(error));
