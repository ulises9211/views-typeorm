import { crearEmpleado, mostrarEmpleados, mostrarEmpleado } from '../controller/empleado.controllers'
const Router = require('express');

const routerEmpleado = Router();

routerEmpleado.get('/', mostrarEmpleados);
routerEmpleado.get('/:id', mostrarEmpleado);
routerEmpleado.post('/', crearEmpleado);

export default routerEmpleado;