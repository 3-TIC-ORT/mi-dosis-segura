const boton3 = document.getElementById ("boton3");

const tercer1 = document.getElementById("1tercer");
const tercer2 = document.getElementById("2tercer");
const tercer3 = document.getElementById("3tercer");
const tercer4 = document.getElementById("4tercer");
const tercer5 = document.getElementById("5tercer");
const tercer6 = document.getElementById("6tercer");
const tercer7 = document.getElementById("7tercer");
const tercer8 = document.getElementById("8tercer");
const tercer9 = document.getElementById("9tercer");

let atras3 = document.getElementById ("atras");
let seguir3 = document.getElementById ("seguir");

let indice3 = 0;

const imagenestercero = document.querySelectorAll (".imagenestercero img");

function paginasmostrar () {
    imagenestercero.forEach((pagina, i) => {
        pagina.style.display = (i === indice3) ? `block` : `none`;
    });

    if (indice3 === 0) {
        atras3.style.display= "none"
    }
    else {
        atras3.style.display= "block"
    }

    if (indice3 === imagenestercero.length - 1){
        seguir3.style.display = "none"
    }
    else {
        seguir3.style.display = "block"
    }
}

    atras3.addEventListener ("click", () => {
    indice3--;
    if (indice3<0) indice3 = 0;
    paginasmostrar ();
})

    seguir3.addEventListener ("click", () => {
    indice3 ++;
    if (indice3 > imagenestercero.length) indice3 = imagenestercero.length - 1;
    paginasmostrar ();
})

paginasmostrar ();