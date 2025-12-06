// Importamos la librería express
import express from "express";
import { Iniciar } from "../back/funcionesexpress.js";
import { InicioNiños } from "../back/funcionesexpress.js";
import { LogueoAdultos } from "../back/funcionesexpress.js";
import { LogueoNiños } from "../back/funcionesexpress.js";
import { Calculadora } from "../back/funcionesexpress.js";
import { darmensajesalforo } from "../back/funcionesexpress.js";
import { AñadirTrofeo } from "../back/funcionesexpress.js";
import { Guardarmensajesdelforo } from "../back/funcionesexpress.js";
import { recargarratio } from "../back/funcionesexpress.js";
import { recargardosis } from "../back/funcionesexpress.js";
import { Fecha } from "../back/funcionesexpress.js";
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
//registro
app.post("/registrop", (req, res) => {
    let logueado = Iniciar(req.body);
    res.send(logueado);
});
app.post("/registernenes", (req, res) => {
    let funciono =InicioNiños(req.body);
    res.send(funciono);
});
//login
app.post("/loginadultos", (req, res) => {
    let logueado = LogueoAdultos(req.body);
    res.send(logueado);
});
app.post("/loginnenes", (req, res) => {
    let funciono =LogueoNiños(req.body);
    res.send(funciono);
});
//calculadora
app.post("/calculadora", (req, res) => {
    let funciono =Calculadora(req.body);
    res.send(funciono);
});
//foro
app.get("/darmensajesalforo", (req, res) => {
    let funciono =darmensajesalforo();
    res.send(funciono);
});
app.post("/Guardarmensajesdelforo", (req, res) => {
    let funciono =Guardarmensajesdelforo(req.body);
    res.send(funciono);
});
//trofeos
app.post("/trofeos", (req, res) => {
    let funciono =AñadirTrofeo(req.body);
    res.send(funciono);
});
//ratio
app.post("/ActualizarRatio", (req, res) => {
    let funciono =recargarratio(req.body);
    res.send(funciono);
});
//dosis
app.post("/ActualizarDosis", (req, res) => {
    let funciono =recargardosis(req.body);
    res.send(funciono);
});
//fecha
app.get("/fecha", (req, res) => {
    let fechaactual = Fecha();
    res.send({ fecha: fechaactual });
});