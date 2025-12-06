connect2Server();

let nombre = localStorage.getItem("nombreniño");
let apellido = localStorage.getItem("apellidoniño");
let ratio = 0;
let TROFEOS = 0;
let trofeo1 = document.getElementById ("T1");
let T2 = document.getElementById ("T2");
let T3 = document.getElementById ("T3");
let T4 = document.getElementById ("T4");
let T5 = document.getElementById ("T5");
let T6 = document.getElementById ("T6");
let valorpiel = 0;
let valorpelo = 0;
let valoranteojos = 0;
let t1= null
 let t2 = null
 let t3 =null
 let t4 = null
  let t5 =null
  let t6 =null





  valorpiel = localStorage.getItem("valorpiel");
  valorpelo = localStorage.getItem("valorpelo");
  valoranteojos = localStorage.getItem("valoranteojos");
  ratio = localStorage.getItem ("ratio");
  RATIOALMUERZO = localStorage.getItem ("ratioalmuerzo");
  RATIOMERIENDA = local.getItem ("ratiomerienda");
  RATIOCENA = localStorage.getItem ("ratiocena");

  document.querySelector(`#colorcitos img[data-valor="${valorpiel}"]`).classList.add("visible");
  document.querySelector(`#cabellos img[data-valor="${valorpelo}"]`).classList.add("visible");
  document.querySelector(`#anteojosysol img[data-valor="${valoranteojos}"]`).classList.add("visible");

  actualizarDatosUsuario();
  actualizarAvatar();



function actualizarDatosUsuario () {
    document.getElementById("nombreyapellido").textContent = "~" + " " + " " + nombre + " " + apellido;
    document.getElementById("ratio").textContent = "~  RATIO DE INSULINA:" + " " + ratio;

}

function actualizarAvatar () {
  document.querySelectorAll ("#colorcitos img").forEach(img => {
    if (parseInt (img.dataset.valor) === parseInt (valorpiel)) {
      img.classList.add ("visible");
    } else {
      img.classList.remove ("visible");
    }
});

document.querySelectorAll ("#anteojosysol img").forEach(img => {
    if (parseInt (img.dataset.valor) === parseInt (valoranteojos)) {
      img.classList.add ("visible");
    } else {
      img.classList.remove ("visible");
    }
});
document.querySelectorAll ("#cabellos img").forEach(img => {
    if (parseInt (img.dataset.valor) === parseInt (valorpelo)) {
      img.classList.add ("visible");
    } else {
      img.classList.remove ("visible");
    }
});
}
 
function datosUsuario() {
    postEvent ("UsuarioRegistrado", {
        NOMBREniño:nombre,
        APELLIDOniño:apellido
    },
    function (data) {
      console.log("Respuesta del servidor:", data);
      if (!data) return;
        nombre=data.NOMBREniño,
        apellido=data.APELLIDOniño,
        ratio=data.RATIO

        actualizarDatosUsuario();
        actualizarAvatar();
    }
)
  postEvent ("mostrartrofeos", {
    NOMBREniño: nombre,
    APELLIDOniño: apellido
  },
  function (data) {

t1 = data[0]; 
  t2 = data[1];
  t3 = data[2];
  t4 = data[3]; 
  t5 = data[4];
  t6 = data[5];
console.log(data)
console.log("T1:", trofeo1, "t1:", t1);
vertrofeos()
}
)
}
function vertrofeos(){
if (t1 === false) {
  trofeo1.classList.add("display");
} else {
  trofeo1.classList.remove("display");
  TROFEOS++
}

if (t2 === false) {
  T2.classList.add("display");
} else {
  T2.classList.remove("display");
    TROFEOS++
}

if (t3 === false) {
  T3.classList.add("display");
} else {
  T3.classList.remove("display");
    TROFEOS++
}

if (t4 === false) {
  T4.classList.add("display");
} else {
  T4.classList.remove("display");
    TROFEOS++
}

if (t5 === false) {
  T5.classList.add("display");
} else {
  T5.classList.remove("display");
    TROFEOS++
}

if (t6 === false) {
  T6.classList.add("display");
} else {
  T6.classList.remove("display");
    TROFEOS++
}
    document.getElementById("trofeos").textContent = "~  TROFEOS:" + " " + TROFEOS;
}
datosUsuario();



