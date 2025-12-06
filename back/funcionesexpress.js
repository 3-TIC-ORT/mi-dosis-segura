import fs from "fs";

let registro= JSON.parse(fs.readFileSync("back/Usuarios.json", "utf-8"))
let mensajes = JSON.parse(fs.readFileSync("back/Mensajes.json", "utf-8"))
let comidas = JSON.parse(fs.readFileSync("back/Comidas.json", "utf-8"))
let logueado = false
let contra = false
let UsuarioR = []
let encontrado = false
let cuentacreada = false
let Mensajenuevo= ""
let CONTRASENAniño = ""
let cuentaparcial = []
let niñocreado = false
let ratio = 0

function Iniciar(data)
{
    for (var i =0; i<registro.length;i++)
    {
        if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA === registro[i].CONTRASENA)
        {
            console.log ("Este usuario ya existe")
            cuentacreada = false
        } else if (isNaN(data.RATIO) /*Contiene letras*/)
        {
            console.log ("El radio debe ser un número")
            cuentacreada = false
        } else if (/\d/.test(data.NOMBREniño) /*Contiene números*/)
        {
            console.log ("El nombre del niño no puede contener números")
            cuentacreada = false
        } else if (/\d/.test(data.NOMBRE) /*Contiene números*/)
        {
            console.log ("El nombre no puede contener números")
            cuentacreada = false
        }
        else if (/\d/.test(data.APELLIDO) /*Contiene números*/)
        {
                console.log ("El apellido no puede contener números")
                cuentacreada = false
        }else if (isNaN(data.DOSIS))
        {
            cuentacreada = false
            console.log ("La dosis debe ser un número")
        } else if (data.APELLIDO === null || data.NOMBRE === null || data.CONTRASENA === null || data.NOMBREniño === null || data.APELLIDOniño === null || data.DOSIS === null || data.RATIO === null)
        {
            cuentacreada = false
            console.log ("Rellena todos los campos")
        }
        else {
            cuentacreada = true
        }
        //poner que el nombre, el apellido y la contraseña tengan que tener minimo un caracter
    }
        if (cuentacreada === true)
            {
          registro.push ({
                "NOMBRE": data.NOMBRE ,
                "APELLIDO": data.APELLIDO ,
                "CONTRASENA": data.CONTRASENA ,
                "T1": false,
                "T2": false,
                "T3": false,
                "T4": false,
                "T5": false,
                "T6": false,
                "DOSIS": data.DOSIS,
                "RATIO": data.RATIO,
                "NOMBREniño": data.NOMBREniño,
                "APELLIDOniño": data.APELLIDOniño,
                "CONTRASENAniño": null
          }
        )
            console.log("Adulto registrado con éxito")
        
        fs.writeFileSync("back/Usuarios.json",JSON.stringify(registro, null, 2))
          
        }
        return cuentacreada
       
}
export {Iniciar};
//conectar a las funciones mediante un json externo que guarde el usuario a registrar y lo tome luego la función de inicio niños, le sube la contraseña del niño y borra lo del json y lo sube al json de usuarios, creándolo
function InicioNiños(data)
   /*   {
        console.log("El nombre y apellido del niño no pueden contener números")
        niñocreado = false
    }else if (data.NOMBREniño === "" || data.APELLIDOniño === "" || data.CONTRASENAniño === "")
    {
        console.log("Por favor llená todas las cajitas")
        niñocreado = false
    }else if (data.NOMBREniño === cuentaparcial.NOMBREniño && data.APELLIDOniño === cuentaparcial.APELLIDOniño)
    {
        cuentaparcial.CONTRASENAniño = data.CONTRASENAniño
        registro.push(cuentaparcial[0])
        fs.writeFileSync("Usuarios.json",JSON.stringify(registro, null, 2))
        cuentaparcial=[]
        niñocreado = true
    }*/
{for (var i =0; i<registro.length;i++){
    if (registro[i].CONTRASENAniño === null){
   
            registro[i].CONTRASENAniño = data.CONTRASENAniño
            fs.writeFileSync("back/Usuarios.json",JSON.stringify(registro, null, 2))
            niñocreado = true
            break
        } else {
            niñocreado = false
        }
   }
return niñocreado
}
export{InicioNiños}
function LogueoAdultos(data)
{

  for (var i =0; i<registro.length;i++)
    {
        if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA === registro[i].CONTRASENA && data.NOMBREniño === registro[i].NOMBREniño && data.APELLIDOniño === registro[i].APELLIDOniño)
        {
            console.log ("Has iniciado sesión correctamente")
            encontrado = true
            logueado = true
            contra=true     
             if (logueado === true) {
                for (let j = 0; j < registro.length; j++) {
             if (data.NOMBRE === registro[j].NOMBRE && data.APELLIDO === registro[j].APELLIDO && data.CONTRASENA === registro[j].CONTRASENA) {
                 ratio = parseInt(registro[j].RATIO);
                   console.log("Ratio encontrado: " + ratio);
                     break;
      }
    }
  }        
            break
        } else if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA != registro[i].CONTRASENA && data.NOMBREniño === registro[i].NOMBREniño && data.APELLIDOniño === registro[i].APELLIDOniño)
        {
            console.log ("La contraseña es incorrecta")
            encontrado = true
            logueado = false
            contra=false
            break
        } else if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO && data.CONTRASENA === registro[i].CONTRASENA && (data.NOMBREniño !== registro[i].NOMBREniño || data.APELLIDOniño !== registro[i].APELLIDOniño))
        {
            console.log ("Has ingresado mal el nombre o apellido del niño")
            encontrado = true
            logueado = false
            contra = false
            break
        }else if (data.NOMBRE !== registro[i].NOMBRE || data.APELLIDO !== registro[i].APELLIDO)
        {
            console.log ("No se ha encontrado una cuenta con ese nombre y apellido")
            encontrado = false
            logueado = false
            contra = false
        }
    if (encontrado === false)
    {
        console.log ("No se ha encontrado una cuenta con ese nombre y apellido")
        logueado = false
        contra = false
    }

    
 
  console.log("Ratio devuelto: " + ratio);
}
  return [logueado, encontrado, contra, ratio];
}
export {LogueoAdultos};
function AñadirTrofeo(data)
{
     let APELLIDOniño=data.APELLIDOniño
    let NOMBREniño=data.NOMBREniño
    if (data.T1 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (NOMBREniño === registro[i].NOMBREniño && (APELLIDOniño === registro[i].APELLIDOniño))
            {
                registro[i].T1 = true
            }
        }
    }

    if (data.T2 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (NOMBREniño === registro[i].NOMBREniño && (APELLIDOniño === registro[i].APELLIDOniño))
            {
                registro[i].T2 = true
            }
        }
    }
    if (data.T3 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (NOMBREniño  === registro[i].NOMBREniño && (APELLIDOniño === registro[i].APELLIDOniño))
            {
                registro[i].T3 = true
            }
        }
    }
    if (data.T4 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (NOMBREniño === registro[i].NOMBREniño && (APELLIDOniño === registro[i].APELLIDOniño))
            {
                registro[i].T4 = true
            }
        }
    }
    if (data.T5 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (NOMBREniño === registro[i].NOMBREniño && (APELLIDOniño === registro[i].APELLIDOniño))
            {
                registro[i].T5 = true
            }
        }
    }
    if (data.T6 === true)
    {
        for (var i = 0; i < registro.length; i++)
        {
            if (NOMBREniño === registro[i].NOMBREniño && (APELLIDOniño === registro[i].APELLIDOniño))
            {
                registro[i].T6 = true
            }
        }
    }

    fs.writeFileSync("back/Usuarios.json",JSON.stringify(registro, null, 2))

return "Trofeo actualizado"
    
}

export {AñadirTrofeo};



function UsuarioRegistrado(data){
    let usuarion = data.NOMBRE;
    let usuarioa = data.APELLIDO;

    let resultado = 0;

    for (let i = 0; i < registro.length; i++) {
        if (usuarion === registro[i].NOMBRE && usuarioa === registro[i].APELLIDO) {
            resultado = {
                NOMBRE: registro[i].NOMBRE,
                APELLIDO: registro[i].APELLIDO,
                CONTRASENA: registro[i].CONTRASENA,
                DOSIS: parseInt(registro[i].DOSIS),
                RATIO: parseInt(registro[i].RATIO),
                NOMBREniño: registro[i].NOMBREniño,
                APELLIDOniño: registro[i].APELLIDOniño
            };
            break;
        }
    }

    return resultado;
}
    let T1=null
    let T2 =null
    let T3 =null
    let T4 =null
    let T5 =null
    let T6 =null
export {UsuarioRegistrado}
function mostrartrofeos(data){
    let usuarioh = data.NOMBREniño;
    let usuarioha= data.APELLIDOniño;
    for (let i = 0; i < registro.length; i++) {
        if (usuarioh === registro[i].NOMBREniño && usuarioha === registro[i].APELLIDOniño) {
     T1=registro[i].T1
     T2 =registro[i].T2
     T3 =registro[i].T3
     T4 =registro[i].T4
     T5 =registro[i].T5
     T6 =registro[i].T6
            break;
        }
    }
    return [T1,T2,T3,T4,T5,T6];
}
export {mostrartrofeos}
function recargardosis(data) {
    let usuarion = data.NOMBRE;
    let usuarioa = data.APELLIDO;
    let dosisnew = data.DOSIS;
    let resultado = 0;
    for (let i = 0; i < registro.length; i++) {
        if (usuarion === registro[i].NOMBRE && usuarioa === registro[i].APELLIDO) {
            registro[i].DOSIS = dosisnew;
            resultado = registro[i]
            break;
        }
    }
            fs.writeFileSync("back/Usuarios.json", JSON.stringify(registro, null, 2));
    return resultado;
}
export {recargardosis}
function recargarratio(data) {
    let usuarion = data.NOMBRE;
    let usuarioa = data.APELLIDO;
    let ratinew = data.RATIO;
    let resultado = 0;
    for (let i = 0; i < registro.length; i++) {
        if (usuarion === registro[i].NOMBRE && usuarioa === registro[i].APELLIDO) {
            registro[i].RATIO = ratinew
            resultado = registro[i]
            break;
           }   }
            fs.writeFileSync("back/Usuarios.json", JSON.stringify(registro, null, 2));
    
    return resultado;
}
export {recargarratio}
// Suponiendo que tu JSON se llama "comidas" y ya está cargado en memoria

function Calculadora(data) {
    // Extraemos los datos que vienen del front
    let eleccion = data.comida;       // Ej: "PAPA"
    let cantidad = parseInt(data.CANTIDAD);  // Ej: "12" -> 12
        console.log(data.NOMBRE)
        console.log(data.APELLIDO)
for (let i = 0; i < registro.length; i++) {
    if (data.NOMBRE === registro[i].NOMBRE && data.APELLIDO === registro[i].APELLIDO) {
        ratio = parseInt(registro[i].RATIO);}}
        console.log("El ratio es: " + ratio)
        console.log("La cantidad es" + cantidad)
        console.log("La comida es " + eleccion)
        let encontrado = false;
    let resultado = 0;
       

    if (!eleccion ||  cantidad <= 0) {
        return [0, false]; // datos inválidos
    }

   if (cantidad > 0) {
    for (let i = 0; i < comidas.length; i++) {
        if (eleccion.trim().toUpperCase() === comidas[i].Alimento.trim().toUpperCase()) {
            let valor = comidas[i].CpU;
            if (typeof valor === "string") {
                valor = parseFloat(valor.replace(",", "."));
            }

            // Calculamos el resultado
            resultado = valor * cantidad / ratio;
            encontrado = true;
            console.log(encontrado)
            console.log("Resultado calculado: " + resultado);
           
            return resultado
            
            
        }
    }}

    // Si no se encontró el alimento, devolvemos 0
    if (!encontrado) {
        console.log("Comida no encontrada: " + eleccion);
        return [0, false];
    }}
    // Devolvemos resultado y true indicando éxito



export {Calculadora}

function LogueoNiños(data) {
  for (var i = 0; i < registro.length; i++) {
  
    if (data.NOMBREniño === registro[i].NOMBREniño && data.CONTRASENAniño === registro[i].CONTRASENAniño && data.APELLIDOniño === registro[i].APELLIDOniño) {
        console.log("Has iniciado sesión correctamente")
        var logueado = true
        var encontrado = true
        var contra = true
        UsuarioR.push(
            {
                "NOMBRE": registro[i].NOMBRE,
                "APELLIDO": registro[i].APELLIDO,
                "CONTRASENA": registro[i].CONTRASENA,
                "DOSIS": registro[i].DOSIS,
                "RATIO": registro[i].RATIO,
                "NOMBREniño": registro[i].NOMBREniño,
                "APELLIDOniño": registro[i].APELLIDOniño,
                "CONTRASENAniño": registro[i].CONTRASENAniño,
                "T1": registro[i].T1,
                "T2": registro[i].T2,
                "T3": registro[i].T3,
                "T4": registro[i].T4,
                "T5": registro[i].T5,
                "T6": registro[i].T6
            }
        )
    }
    else if (data.NOMBREniño === registro[i].NOMBREniño && data.CONTRASENAniño !== registro[i].CONTRASENAniño) {
        console.log("La contraseña es incorrecta")
        var logueado = false
        var encontrado = true
        var contra = false
    } else if (data.NOMBREniño !== registro[i].NOMBREniño) {
        console.log("No se ha encontrado una cuenta con ese nombre")
        var logueado = false
        var encontrado = false
        var contra = false
    }
}
return [logueado, encontrado, contra, UsuarioR];
}
export{LogueoNiños};

function NiñoRegistrado(){
return [UsuarioR.CONTRASENAniño, UsuarioR.NOMBREniño, UsuarioR.APELLIDOniño]
}
export {NiñoRegistrado}

function Guardarmensajesdelforo (data){
        Mensajenuevo: data.Mensajenuevo,
    mensajes.push(
        {
        
            "Mensaje": data.Mensajenuevo,
            "Autor": data.NOMBRE + data.APELLIDO
        }
    )
    fs.writeFileSync ("back/Mensajes.json", JSON.stringify(mensajes, null, 2))
 return "Mensaje guardado"
}
export {Guardarmensajesdelforo}
function darmensajesalforo() {
    return mensajes;
}
export { darmensajesalforo };

function Fecha(){
const date = new Date();
console.log(date)
return `${date.getHours()}/${date.getMinutes()}`}
Fecha()
export{Fecha}

