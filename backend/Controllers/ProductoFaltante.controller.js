import { ProductoFaltante_modelo } from "../Model/Productos.model.js";

export const test_productoFaltante = () => {
    console.log("el test producto faltante jala")
}

ProductoFaltante_modelo.create({
    nombre : "Coca cola",
    costo : 25
})