import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import * as express from "express";
import * as cors from "cors";
import router from './router/routes';
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api/empleados', router);

//Conexion a la BD
createConnection();

 //conexion con el servidor
 app.listen(process.env.PORT, function () {
    console.log('Pueto:', process.env.PORT);
});
