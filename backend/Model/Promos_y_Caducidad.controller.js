import { Schema, model } from "mongoose";

const Promos_y_Caducidad_esquema = new Schema({
    nombre : {type : String},
    inicio : {type : String},
    caduca : {type : String}
})

export const Promos_model = new model(
    'Promos', Promos_y_Caducidad_esquema
)

export const Caducidad_model = new model(
    'Caducidad del Producto', Promos_y_Caducidad_esquema
)