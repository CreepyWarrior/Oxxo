import {Empleados_modelo} from "../Model/Empleado_y_Gerente.model.js"

export const test_empleados = () => {
    console.log('El test empleados sirve')
}

Empleados_modelo.create({
    nombre : "Diego",
    sueldo : 1200
})