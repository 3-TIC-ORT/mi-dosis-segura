let uno = document.getElementById ("uno");
let dos = document.getElementById ("dos");
let tres = document.getElementById ("tres");
let cuatro = document.getElementById ("cuatro");
let cinco = document.getElementById ("cinco");
let seis = document.getElementById ("seis");
let siete = document.getElementById ("siete");
let ocho = document.getElementById ("ocho");
let nueve = document.getElementById ("nueve");
let diez = document.getElementById ("diez");
let once = document.getElementById ("once");
let doce = document.getElementById ("doce");
let trece = document.getElementById ("trece");
let catorce = document.getElementById ("catorce");

let atras = document.getElementById ("atras");
let seguir = document.getElementById ("seguir");

const total = 14;
let indice = 0;

const paginas = document.querySelectorAll (`[class^="pagina"]`);

function paginasmostrar () {
    paginas.forEach((pagina, i) => {
        pagina.style.display = (i === indice) ? `block` : `none`;
    });

    if (indice === 0) {
        atras.style.display= "none"
    }
    else {
        atras.style.display= "block"
    }

    if (indice === paginas.length - 1){
        seguir.style.display = "none"
    }
    else {
        seguir.style.display = "block"
    }
}

paginasmostrar ();

atras.addEventListener ("click", () => {
    indice--;
    if (indice<0) indice = paginas.length - 1;
    paginasmostrar ();
})

seguir.addEventListener ("click", () => {
    indice ++;
    if (indice > paginas.length) indice = 0;
    paginasmostrar ();
})

