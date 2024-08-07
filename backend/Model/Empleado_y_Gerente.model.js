import { Schema, model } from "mongoose"

const Empleados_y_Gerentes_Esquema = new Schema({
    nombre : {type : String},
    sueldo : {type : Number}
})

export const Empleados_modelo = new model(
    'Empleados', Empleados_y_Gerentes_Esquema
)

export const Gerente_model = new model(
    'Gerentes', Empleados_y_Gerentes_Esquema
)