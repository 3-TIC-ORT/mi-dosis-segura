import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic"; 
import fs from "fs";
import {AñadirTrofeo} from "./Funciones.js";
import { InicioNiños } from "./Funciones.js";
import{Iniciar} from "./Funciones.js";
import {LogueoAdultos} from "./Funciones.js";
import {UsuarioRegistrado} from "./Funciones.js";
import {Calculadora} from "./Funciones.js";
import {LogueoNiños} from "./Funciones.js"
import {NiñoRegistrado} from "./Funciones.js"
import { Guardarmensajesdelforo } from "./Funciones.js";
import { darmensajesalforo } from "./Funciones.js";
import {recargarratio} from "./Funciones.js";
import {recargardosis} from "./Funciones.js";
import {mostrartrofeos} from "./Funciones.js";
import {Fecha} from "./Funciones.js"

subscribePOSTEvent ("iniciarsesion", LogueoAdultos);
subscribePOSTEvent ("registro", Iniciar);
subscribePOSTEvent ("trofeos", AñadirTrofeo);
subscribePOSTEvent ("UsuarioRegistrado", UsuarioRegistrado)
subscribePOSTEvent ("Calculadora", Calculadora)
subscribePOSTEvent ("LogueoNiños", LogueoNiños)
subscribePOSTEvent ("NiñoRegistrado", NiñoRegistrado)
subscribePOSTEvent ("GuardarMensaje", Guardarmensajesdelforo)
subscribeGETEvent ("darmensajesalforo", darmensajesalforo);
subscribePOSTEvent ("ActualizarDosis", recargardosis);
subscribePOSTEvent ("ActualizarRatio", recargarratio);
subscribePOSTEvent("InicioNiños", InicioNiños);
subscribePOSTEvent ("mostrartrofeos", mostrartrofeos);
subscribeGETEvent ("Fecha", Fecha)
startServer(3000)
