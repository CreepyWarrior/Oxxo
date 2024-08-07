import { Caducidad_model } from "../Model/Promos_y_Caducidad.controller.js";

export const test_caducidad = () => {
    console.log("el test caducidad jala")
}

Caducidad_model.create({
    nombre : "Mazapan",
    inicio : "6 de junio del 2024",
    caduca : "6 de agosto del 2024"
})