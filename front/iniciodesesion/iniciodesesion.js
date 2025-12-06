const nombreniño = document.getElementById ("nombrenene");
const apellidoniño = document.getElementById ("apellidonene");
const botonEnviar = document.getElementById ("send");


let cabello = 0;
const cabellos = document.querySelectorAll ('#cabellos .pelo')
let valorpelo = 0;

document.getElementById ('cabellos').addEventListener ("click", () => {
        cabellos[cabello].classList.remove ('visible');
        cabello = (cabello + 1) % cabellos.length;
        cabellos[cabello].classList.add ('visible');
})

let lentes = 0;
const anteojos = document.querySelectorAll ('#anteojosysol .lentes')
let valoranteojos = 0;

document.getElementById ('anteojosysol').addEventListener ("click", () => {
        anteojos[lentes].classList.remove ('visible');
        lentes = (lentes + 1) % anteojos.length;
        anteojos[lentes].classList.add ('visible');
})

let piel = 0;
const pieles = document.querySelectorAll ('#colorcitos .piel')
let valorpiel = 0;

document.getElementById ('colorcitos').addEventListener ("click", () => {
        pieles[piel].classList.remove ('visible');
        piel = (piel + 1) % pieles.length;
        pieles[piel].classList.add ('visible');
})

const nombredelnene = localStorage.getItem ("nombreniño");
const apellidodelnene = localStorage.getItem ("apellidoniño");
valoranteojos = parseInt(localStorage.getItem ("valoranteojos"));
valorpelo = parseInt(localStorage.getItem ("valorpelo"));
valorpiel = parseInt(localStorage.getItem ("valorpiel"));

function verificardatos () {
        const pielvisible = document.querySelector ("#colorcitos .visible");
        const cabellovisible = document.querySelector ("#cabellos .visible");
        const anteojovisible = document.querySelector ("#anteojosysol .visible");

        const valorpielactual = parseInt(pielvisible.dataset.valor);
        const valorpelonactual = parseInt(cabellovisible.dataset.valor);
        const valoranteojosactual = parseInt(anteojovisible.dataset.valor);

    if (nombreniño.value === nombredelnene && apellidoniño.value === apellidodelnene  && valorpelonactual === valorpelo && valorpielactual === valorpiel && valoranteojosactual === valoranteojos) {
        console.log ("Inicio de sesion exitoso.")
    }
    else {
        alert ("Usted no tiene una cuenta. Intentelo de nuevo.")
    }
}

botonEnviar.addEventListener ("click", verificardatos);
