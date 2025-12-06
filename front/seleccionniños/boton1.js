const boton1 = document.getElementById ("boton1");

const primer1 = document.getElementById("1primer");
const primer2 = document.getElementById("2primer");
const primer3 = document.getElementById("3primer");
const primer4 = document.getElementById("4primer");
const primer5 = document.getElementById("5primer");
const primer6 = document.getElementById("6primer");
const primer7 = document.getElementById("7primer");
const primer8 = document.getElementById("8primer");
const primer9 = document.getElementById("9primer");
const primer10 = document.getElementById("10primer");


let atras1 = document.getElementById ("atras");
let seguir1 = document.getElementById ("seguir");

let indice1 = 0;

const imagenesprimero = document.querySelectorAll (".imagenesprimero img");


function paginasmostrar () {
    imagenesprimero.forEach((pagina, i) => {
        pagina.style.display = (i === indice1) ? `block` : `none`;
    });

    if (indice1 === 0) {
        atras1.style.display= "none"
    }
    else {
        atras1.style.display= "block"
    }

    if (indice1 === imagenesprimero.length - 1){
        seguir1.style.display = "none"
    }
    else {
        seguir1.style.display = "block"
    }
}

    atras1.addEventListener ("click", () => {
    indice1--;
    if (indice1<0) indice1 = 0;
    paginasmostrar ();
})

    seguir1.addEventListener ("click", () => {
    indice1 ++;
    if (indice1 > imagenesprimero.length) indice1 = imagenesprimero.length - 1;
    paginasmostrar ();
})

paginasmostrar ();




