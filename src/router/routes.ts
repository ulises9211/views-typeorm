import * as express from "express";
const app = express();
import routerEmpleado from '../router/empleados.routes';

//Rutas empleado
app.use('/', routerEmpleado);

export default routerEmpleado;