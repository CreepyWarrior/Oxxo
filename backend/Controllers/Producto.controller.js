import { Producto_modelo } from "../Model/Productos.model.js";

export const test_producto = () => {
    console.log("el test producto jala")
}

Producto_modelo.create({
    nombre: "Mazapan",
    costo : 20
})