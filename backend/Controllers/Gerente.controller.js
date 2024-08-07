import { Gerente_model } from "../Model/Empleado_y_Gerente.model.js";

export const test_gerente = () => {
    console.log("el test gerente jala")
}

Gerente_model.create({
    nombre : "Ingrid",
    sueldo : 12000 
})