connect2Server();
const nombreniño = document.getElementById ("nombrenene");
const apellidoniño = document.getElementById ("apellidonene");
const botonEnviar = document.getElementById ("aceptar");
      let apellido=localStorage.getItem ("apellidoniño");
        let nombre=localStorage.getItem ("nombreniño");
document.getElementById("nombrenene").placeholder= localStorage.getItem("nombreniño") ;
 document.getElementById("apellidonene").placeholder = localStorage.getItem("apellidoniño") ;
let cabello = 0;
const cabellos = document.querySelectorAll ('#cabellos .pelo')

document.getElementById ('cabellos').addEventListener ("click", () => {
        cabellos[cabello].classList.remove ('visible');
        cabello = (cabello + 1) % cabellos.length;
        cabellos[cabello].classList.add ('visible');
})

let lentes = 0;
const anteojos = document.querySelectorAll ('#anteojosysol .lentes')

document.getElementById ('anteojosysol').addEventListener ("click", () => {
        anteojos[lentes].classList.remove ('visible');
        lentes = (lentes + 1) % anteojos.length;
        anteojos[lentes].classList.add ('visible');
})

let piel = 0;
const pieles = document.querySelectorAll ('#colorcitos .piel')

document.getElementById ('colorcitos').addEventListener ("click", () => {
        pieles[piel].classList.remove ('visible');
        piel = (piel + 1) % pieles.length;
        pieles[piel].classList.add ('visible');
})

let valorpiel = 0;
let valoranteojos = 0;
let valorpelo = 0;
let ratio = 0;

function AVATAR () {
    const pielvisible = document.querySelector('#colorcitos .visible');
    const cabellovisible = document.querySelector('#cabellos .visible');
    const anteojovisible = document.querySelector('#anteojosysol .visible');

    valorpiel = parseInt(pielvisible.dataset.valor);
    valoranteojos = parseInt(anteojovisible.dataset.valor);
    valorpelo = parseInt(cabellovisible.dataset.valor);

    const valorfinal = valorpiel + valoranteojos + valorpelo;
    return valorfinal
}

function enviardatos() {
    const avatarvalor = AVATAR();


    localStorage.setItem ("contraseña", avatarvalor)
    localStorage.setItem ("valorpiel", valorpiel);
    localStorage.setItem ("valoranteojos", valoranteojos);
    localStorage.setItem ("valorpelo", valorpelo);
    localStorage.setItem ("RATIO", ratio);
    postEvent("UsuarioRegistrado", {
        NOMBREniño: nombreniño.value,
        APELLIDOniño: apellidoniño.value,
        CONTRASENAniño: avatarvalor
    },
    function (data) {
        const respuesta = data;
  

              connect2Server()
              postEvent("trofeos",{
              T1: true,
              NOMBREniño:nombre,
        APELLIDOniño:apellido
               },function(data){
              console.log(data)
            }
            )
    })
 if(nombre=== nombreniño.value && apellido ===apellidoniño.value){
    postEvent ("InicioNiños", {
        NOMBREniño: nombreniño.value,
        APELLIDOniño: apellidoniño.value,
        CONTRASENAniño: avatarvalor
    },
    function (data) {
        const respuesta = data;
 window.location.href='../eleccion etaria/padreoniño.html'
    }) 
   }

else{
alert("escribi bien tus datos")
}
}
         botonEnviar.addEventListener ("click", enviardatos);