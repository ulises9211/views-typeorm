import { getRepository } from "typeorm";
import { Category } from "../entity/Category";
import { Clasificcion } from "../entity/Clasificacion";
import { Comments } from "../entity/Comments";
import { Post } from "../entity/Post";
import { PostCategory } from "../entity/PostCategory";

    const mostrarEmpleados = async( req, res) => {
        const vista = await getRepository(PostCategory).find();
        console.log(vista)
        res.json({
            ok:true,
            vista
        });
    }

    const mostrarEmpleado = async( req, res) => {
        const empleado = await getRepository(PostCategory).findOne({id: req.params.id});
        console.log(empleado);
        return res.send(empleado);
    }

    const crearEmpleado = async( req, res) => {
        const { categoryName, clasificacionName, commentName} = req.body;

        const empleado = new Post();
 
        empleado.name = 'love';
        const categoriaFind = await getRepository(Category).findOne(req.params.categoryName);
        empleado.category = categoriaFind;
        const clasificacionFind = await getRepository(Clasificcion).findOne(req.params.clasificacionName);
        empleado.clasificacion = clasificacionFind;
        const commentFind = await getRepository(Comments).findOne(req.params.scommentName);
        empleado.comment = commentFind;

        const newUsuario = await getRepository(Post).create(empleado);
        console.log(newUsuario);
        const saveUsuario = await getRepository(Post).save(newUsuario);
    }
   
export {mostrarEmpleados, crearEmpleado, mostrarEmpleado}
