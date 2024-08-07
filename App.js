import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { test_empleados } from "./backend/Controllers/Empleado.controller.js";
import { test_gerente } from "./backend/Controllers/Gerente.controller.js";
import { test_producto } from "./backend/Controllers/Producto.controller.js";
import { test_productoFaltante } from "./backend/Controllers/ProductoFaltante.controller.js";
import { test_promos } from "./backend/Controllers/Promos.controller.js";
import { test_caducidad } from "./backend/Controllers/Caducidad.controller.js";
dotenv.config()

mongoose.connect(process.env.db)

.then(() => {
    console.log("la conexion jala")
})
.catch((err) => {
    console.log("la conexion no jala")
})

const App = express()
App.use(cors())

App.listen(4001,() =>{
    console.log("Funciona el server")
})

test_empleados()
test_gerente()
test_producto()
test_productoFaltante()
test_promos()
test_caducidad()