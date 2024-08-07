import { Promos_model } from "../Model/Promos_y_Caducidad.controller.js";

export const test_promos = () => {
    console.log("el test promos jala")
}

Promos_model.create({
    nombre : "2x1 en mazapan",
    inicio : "6 de agosto del 2024",
    caduca : "6 de septiembre del 2024"
})