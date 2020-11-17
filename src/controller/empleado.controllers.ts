import { getRepository } from "typeorm";
import { Category } from "../entity/Category";
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

    const crearEmpleado = async( req, res) => {
        const { categoryName, clasificacionName, commentName} = req.body;

        const empleado = new Post();

        empleado.name = 'love';
        const categoriaFind = await getRepository(Category).findOne(req.params.categoryName);
        empleado.category = categoriaFind;
        //empleado.clasificacion = clasificacionName;
        //empleado.comment = commentName;

        const newUsuario = await getRepository(Post).create(empleado);
        console.log(newUsuario);
        const saveUsuario = await getRepository(Post).save(newUsuario);
    }
   
export {mostrarEmpleados, crearEmpleado}
