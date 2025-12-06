connect2Server()
let pop1 = document.getElementById ("pop1");
pop1.classList.add ("display");
let pop2 = document.getElementById ("pop2");
pop2.classList.add ("display");
let pop3 = document.getElementById ("pop3");
pop3.classList.add ("display");
let videoexplicacion =document.getElementById("explicacion")
let img1 = document.getElementById ("img1");
let img2 = document.getElementById ("img2");
let img3 = document.getElementById ("img3");
let img4 = document.getElementById ("img4");
let img5 = document.getElementById ("img5");
let img6 = document.getElementById ("img6");
let img7 = document.getElementById ("img7");
let img8 = document.getElementById ("img8");
let carbos1 = document.getElementById ("carbos1");
let carbos2 = document.getElementById ("carbos2");
let carbos3 = document.getElementById ("carbos3");
let carbos4 = document.getElementById ("carbos4");
let carbos5 = document.getElementById ("carbos5");
let carbos6 = document.getElementById ("carbos6");
let carbos7 = document.getElementById ("carbos7");
let carbos8 = document.getElementById ("carbos8");
let video = document.getElementById ("video");
let numero = 0;
let imgactiva1 = null;
let imgactiva2 = null;
let imgactiva3 = null;
const uno = "posicion1";
const dos = "posicion2";
const tres = "posicion3";
function ocultarimagenes () {
    img1.classList.add ("display", uno, dos, tres);
    img2.classList.add ("display", uno, dos, tres);
    img3.classList.add ("display", uno, dos, tres);
    img4.classList.add ("display", uno, dos, tres);
    img5.classList.add ("display", uno, dos, tres);
    img6.classList.add ("display", uno, dos, tres);
    img7.classList.add ("display", uno, dos, tres);
    img8.classList.add ("display", uno, dos, tres);


    carbos1.classList.add ("display");
    carbos2.classList.add ("display");
    carbos3.classList.add ("display");
    carbos4.classList.add ("display");
    carbos5.classList.add ("display");
    carbos6.classList.add ("display");
    carbos7.classList.add ("display");
    carbos8.classList.add ("display");


    video.classList.add ("display");
}


ocultarimagenes ();


function cambiarnm (posicion, usada1, usada2){
numero= Math.random ();
let seleccion;
if (numero <=0.125) seleccion = "img1";
    else if (numero >0.125 && numero <=0.25) seleccion = "img2";
    else if (numero >0.25 && numero <=0.375) seleccion ="img3";
    else if (numero >0.375 && numero <=0.5) seleccion = "img4";
    else if (numero >0.5 && numero <=0.625) seleccion = "img5";
    else if (numero >0.625 && numero <=0.75) seleccion = "img6";
    else if (numero >0.75 && numero <=0.875) seleccion = "img7";
    else seleccion = "img8";


if (seleccion === usada1 || seleccion === usada2) {
    if (seleccion === "img1") seleccion = "img2";
    else if (seleccion === "img2") seleccion = "img3";
    else if (seleccion === "img3") seleccion = "img4";
    else if (seleccion === "img4") seleccion = "img5";
    else if (seleccion === "img5") seleccion = "img6";
    else if (seleccion === "img6") seleccion = "img7";
    else if (seleccion === "img7") seleccion = "img8";
    else if (seleccion === "img8") seleccion = "img1";
}


if (seleccion === usada1 || seleccion === usada2) {
    if (seleccion === "img1") seleccion = "img2";
    else if (seleccion === "img2") seleccion = "img3";
    else if (seleccion === "img3") seleccion = "img4";
    else if (seleccion === "img4") seleccion = "img5";
    else if (seleccion === "img5") seleccion = "img6";
    else if (seleccion === "img6") seleccion = "img7";
    else if (seleccion === "img7") seleccion = "img8";
    else if (seleccion === "img8") seleccion = "img1";
}


if (seleccion === usada1 || seleccion === usada2) {
    if (seleccion === "img1") seleccion = "img2";
    else if (seleccion === "img2") seleccion = "img3";
    else if (seleccion === "img3") seleccion = "img4";
    else if (seleccion === "img4") seleccion = "img5";
    else if (seleccion === "img5") seleccion = "img6";
    else if (seleccion === "img6") seleccion = "img7";
    else if (seleccion === "img7") seleccion = "img8";
    else if (seleccion === "img8") seleccion = "img1";
}


const img = document.getElementById (seleccion);
img.classList.remove ("display");
img.classList.add (posicion);


let comidaCarbohidratos;
if (seleccion === "img1") comidaCarbohidratos = carbos1;
if (seleccion === "img2") comidaCarbohidratos = carbos2;
if (seleccion === "img3") comidaCarbohidratos = carbos3;
if (seleccion === "img4") comidaCarbohidratos = carbos4;
if (seleccion === "img5") comidaCarbohidratos = carbos5;
if (seleccion === "img6") comidaCarbohidratos = carbos6;
if (seleccion === "img7") comidaCarbohidratos = carbos7;
if (seleccion === "img8") comidaCarbohidratos = carbos8;


comidaCarbohidratos.classList.remove ("display");
comidaCarbohidratos.classList.add (posicion);


return seleccion;
}
imgactiva1 = cambiarnm (uno, null, null);
imgactiva2 = cambiarnm (dos, imgactiva1, null);
imgactiva3 = cambiarnm (tres, imgactiva1, imgactiva2);

const correctas = {
    img1 : "carbos1",
    img2 : "carbos2",
    img3 : "carbos3",
    img4 : "carbos4",
    img5 : "carbos5",
    img6 : "carbos6",
    img7 : "carbos7",
    img8 : "carbos8",
}

const iguales = {
  carbos2: "carbos6",
  carbos6: "carbos2",
  carbos5: "carbos7",
  carbos7: "carbos5",
};

let comidaseleccionada = null;
let conexiones = [];
const svg = document.getElementById ("flechas");


function obtenerCentro(centro) {
    const tamaño = centro.getBoundingClientRect();
    return {
      x: tamaño.left + tamaño.width / 2 + window.scrollX,
      y: tamaño.top + tamaño.height / 2 + window.scrollY
    };
}


function clickimagenes () {
    [imgactiva1, imgactiva2, imgactiva3].forEach(escuchar => {
        const img = document.getElementById (escuchar);
        img.addEventListener("click", () => {
            comidaseleccionada = img;
        })
    })
}
clickimagenes ();


const carboseleccionado = [
    "carbos" + imgactiva1.slice(-1),
    "carbos" + imgactiva2.slice(-1),
    "carbos" + imgactiva3.slice(-1),
]


carboseleccionado.forEach(escuchar => {
    const carbohidratos = document.getElementById (escuchar)
    carbohidratos.addEventListener ("click", () => {
        if (!comidaseleccionada) return;


        const principio = obtenerCentro(comidaseleccionada);
        const final = obtenerCentro(carbohidratos);


        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linea.setAttribute("x1", principio.x);
        linea.setAttribute("y1", principio.y);
        linea.setAttribute("x2", final.x);
        linea.setAttribute("y2", final.y);
        linea.setAttribute("stroke", "black");
        linea.setAttribute("stroke-width", "8");
        svg.appendChild(linea);


        conexiones.push ({
            comida: comidaseleccionada.id,
            carbos: carbohidratos.id
        });
        comidaseleccionada = null;


        if (conexiones.length === 3) {
            setTimeout (verificar, 50);
        }
    });
});        videoexplicacion.pause()
        videoexplicacion.play();
        let cerrarPOPUP = document.getElementById ("cerrarPOPUP");
             cerrarPOPUP.addEventListener ("click", () => {
        pop.classList.add ("display");
        videoexplicacion.pause()
    })
function verificar () {
    let bien = 0;

    let cerrarPOPUP1 = document.getElementById ("cerrarPOPUP1");
    let cerrarPOPUP2 = document.getElementById ("cerrarPOPUP2");
    let cerrarPOPUP3 = document.getElementById ("cerrarPOPUP3");
    conexiones.forEach(c => {
        if (correctas[c.comida] === c.carbos || iguales [correctas[c.comida]] === c.carbos)
            bien++;
    });

    if (bien === 1) {
        pop1.classList.remove ("display");
        cerrarPOPUP1.addEventListener ("click", () => {
        pop1.classList.add ("display");
    })
    }

    if (bien === 2) {
        pop2.classList.remove ("display");
        cerrarPOPUP2.addEventListener ("click", () => {
        pop2.classList.add ("display");
    })
    }

    if (bien === 3) {
        pop3.classList.remove ("display");
        video.classList.remove ("display");
        video.play();

        cerrarPOPUP3.addEventListener ("click", () => {
        video.pause();
        video.classList.add ("display");
        pop3.classList.add ("display");
                let apellido=localStorage.getItem ("apellidoniño");
        let nombre=localStorage.getItem ("nombreniño");
        postEvent("trofeos",{
            T2: true,
            NOMBREniño:nombre,
            APELLIDOniño:apellido
            },function(data){
            console.log(data)
        }
            )
})
}
}
 
let volverajugar1 = document.getElementById ("volverajugar1")
volverajugar1.addEventListener ("click", function() {
    window.location.reload ();
})

let volverajugar2 = document.getElementById ("volverajugar2")
volverajugar2.addEventListener ("click", function() {
    window.location.reload ();
})

let volverajugar3 = document.getElementById ("volverajugar3")
volverajugar3.addEventListener ("click", function() {
    window.location.reload ();
})

let btnatras = document.getElementById("btnatras");
btnatras.addEventListener("click", function () {
  window.location.href = "../pagina gral/paginageneraln.html";
});