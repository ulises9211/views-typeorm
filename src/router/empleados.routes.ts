import { crearEmpleado, mostrarEmpleados } from '../controller/empleado.controllers'
const Router = require('express');

const routerEmpleado = Router();

routerEmpleado.get('/', mostrarEmpleados);
routerEmpleado.post('/', crearEmpleado);

export default routerEmpleado;