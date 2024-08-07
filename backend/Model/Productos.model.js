import { Schema, model } from "mongoose";

const Productos_y_Productos_faltantes_esquema = new Schema({
    nombre : {type : String},
    costo : {type : Number}
})

export const Producto_modelo = new model(
    'Productos', Productos_y_Productos_faltantes_esquema
)

export const ProductoFaltante_modelo = new model(
    'Productos Faltanes', Productos_y_Productos_faltantes_esquema
)