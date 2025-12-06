

      connect2Server()
            let apellido=localStorage.getItem ("apellidoniño");
let nombre=localStorage.getItem ("nombreniño");
      const botonorden1 = document.getElementById("boton1");
const botonorden2 = document.getElementById("boton2");
const botonorden3 = document.getElementById("boton3");
const botonorden4 = document.getElementById("boton4");
const botonorden5 = document.getElementById("boton5");
const botonorden6 = document.getElementById("boton6");
const botonorden7 = document.getElementById("boton7");
let resultadoDiv = document.getElementById("resultadodiv");
let correcttos = 0;
let videoexplicacion =document.getElementById("explicacion")
let confeti =document.getElementById("confeti")
const img1 = document.getElementById("imagen1");
const img2 = document.getElementById("imagen2");
const img3 = document.getElementById("imagen3");
const img4 = document.getElementById("imagen4");
const img5 = document.getElementById("imagen5");
const img6 = document.getElementById("imagen6");
const img7 = document.getElementById("imagen7");
const contenedor = document.querySelector(".containerdeimg");

let imagenSeleccionada = null;
let imagenes =null
img1.addEventListener("click", () => {
  imagenSeleccionada = img1.getAttribute("src");
  img1.classList.add("borde")
  img2.classList.remove("borde")
  img3.classList.remove("borde")
  img4.classList.remove("borde")
  img5.classList.remove("borde")
  img6.classList.remove("borde")
  img7.classList.remove("borde")
  imagenes=img1
});

img2.addEventListener("click", () => {
  imagenSeleccionada = img2.getAttribute("src");
  img2.classList.add("borde")
  img1.classList.remove("borde")
  img3.classList.remove("borde")
  img4.classList.remove("borde")
  img5.classList.remove("borde")
  img6.classList.remove("borde")
  img7.classList.remove("borde")
  imagenes=img2
});

img3.addEventListener("click", () => {
  imagenSeleccionada = img3.getAttribute("src");
  img3.classList.add("borde")
  img1.classList.remove("borde")
  img2.classList.remove("borde")
  img4.classList.remove("borde")
  img5.classList.remove("borde")
  img6.classList.remove("borde")
  img7.classList.remove("borde")
  imagenes=img3
});

img4.addEventListener("click", () => {
  imagenSeleccionada = img4.getAttribute("src");
  img4.classList.add("borde")
  img1.classList.remove("borde")
  img2.classList.remove("borde")
  img3.classList.remove("borde")
  img5.classList.remove("borde")
  img6.classList.remove("borde")
  img7.classList.remove("borde")
  imagenes=img4
});

img5.addEventListener("click", () => {
  imagenSeleccionada = img5.getAttribute("src");
  img5.classList.add("borde")
  img1.classList.remove("borde")
  img2.classList.remove("borde")
  img3.classList.remove("borde")
  img4.classList.remove("borde")
  img6.classList.remove("borde")
  img7.classList.remove("borde")
  imagenes=img5
});

img6.addEventListener("click", () => {
  imagenSeleccionada = img6.getAttribute("src");
  img6.classList.add("borde")
  img1.classList.remove("borde")
  img2.classList.remove("borde")
  img3.classList.remove("borde")
  img4.classList.remove("borde")
  img5.classList.remove("borde")
  img7.classList.remove("borde")
  imagenes=img6
});

img7.addEventListener("click", () => {
  imagenSeleccionada = img7.getAttribute("src");
  img7.classList.add("borde")
  img1.classList.remove("borde")
  img2.classList.remove("borde")
  img3.classList.remove("borde")
  img4.classList.remove("borde")
  img5.classList.remove("borde")
  img6.classList.remove("borde")
  imagenes=img7
});

function aplicarFondo(boton) {
  if (imagenSeleccionada) {
    boton.style.backgroundImage = `url("${imagenSeleccionada}")`;
    boton.style.backgroundSize = "cover";
    boton.style.backgroundPosition = "center";
imagenes.classList.add("antizidex")
boton.innerHTML=""
imagenSeleccionada=null
    verificarFondos();
  }
}
botonorden1.addEventListener("click", () => aplicarFondo(botonorden1));
botonorden2.addEventListener("click", () => aplicarFondo(botonorden2));
botonorden3.addEventListener("click", () => aplicarFondo(botonorden3));
botonorden4.addEventListener("click", () => aplicarFondo(botonorden4));
botonorden5.addEventListener("click", () => aplicarFondo(botonorden5));
botonorden6.addEventListener("click", () => aplicarFondo(botonorden6));
botonorden7.addEventListener("click", () => aplicarFondo(botonorden7));
function verificarFondos() {
  let fondo1 = window.getComputedStyle(botonorden1).backgroundImage;
  let fondo2 = window.getComputedStyle(botonorden2).backgroundImage;
  let fondo3 = window.getComputedStyle(botonorden3).backgroundImage;
  let fondo4 = window.getComputedStyle(botonorden4).backgroundImage;
  let fondo5 = window.getComputedStyle(botonorden5).backgroundImage;
  let fondo6 = window.getComputedStyle(botonorden6).backgroundImage;
  let fondo7 = window.getComputedStyle(botonorden7).backgroundImage;

  if (
    fondo1 !== "none" &&
    fondo2 !== "none" &&
    fondo3 !== "none" &&
    fondo4 !== "none" &&
    fondo5 !== "none" &&
    fondo6 !== "none" &&
    fondo7 !== "none"
  ) {
    resultadoDiv.classList.add("zindex");
    correcttos = 0;

    const f1 = fondo1.toLowerCase();
    const f2 = fondo2.toLowerCase();
    const f3 = fondo3.toLowerCase();
    const f4 = fondo4.toLowerCase();
    const f5 = fondo5.toLowerCase();
    const f6 = fondo6.toLowerCase();
    const f7 = fondo7.toLowerCase();

    if (f1.includes("paso-1.png")) correcttos++;
    if (f2.includes("paso-2.jpg")) correcttos++;
    if (f3.includes("paso-3.png")) correcttos++;
    if (f4.includes("paso-4.png")) correcttos++;
    if (f5.includes("paso-5.png")) correcttos++;
    if (f6.includes("paso-6.png")) correcttos++;
    if (f7.includes("paso-7.png")) correcttos++;

    const numeroHtml = `<span class="numero">${correcttos}</span>`;
    const num7 = `<span class="numero">7</span>`;

    if (correcttos == 7) {
      confeti.classList.add("zindex")
      confeti.play();
      confeti.classList.add("display")
      resultadoDiv.classList.add("verde");


    
      resultadoDiv.innerHTML = `
      <div class="textosresultado">
        <p class="txtresultado">hiciste ${numeroHtml} de ${num7} bien</p>
        <p class="felicidades">¡FELICIDADES!</p>
      </div>
<img src="../imagenes/cruz.png" alt="cruz" class="cruz" id="cruz">
 <button id="botonresultado" class="boton botonresultado">volver a jugar</button>
    `;
    } else if (correcttos >= 4 && correcttos < 7) {
      resultadoDiv.classList.add("verde");
      resultadoDiv.innerHTML = `
      <div class="textosresultado">
        <p class="txtresultado">hiciste ${numeroHtml} de ${num7} bien</p>
        <p class="felicidades">¡SIGUE ASÍ!</p>
      </div>
   <img src="../imagenes/cruz.png" alt="cruz" class="cruz" id="cruz">
 <button id="botonresultado" class="boton botonresultado">volver a jugar</button>
    `;
    } else if (correcttos >= 2 && correcttos < 4) {
      resultadoDiv.classList.add("amarillo");
      resultadoDiv.innerHTML = `
      <div class="textosresultado">
        <p class="txtresultado">hiciste ${numeroHtml} de ${num7} bien</p>
        <p class="felicidades">¡SIGUE ASI!</p>
      </div>
<img src="../imagenes/cruz.png" alt="cruz" class="cruz" id="cruz">
 <button id="botonresultado" class="boton botonresultado">volver a jugar</button>
    `;
    } else {
      resultadoDiv.classList.add("rojo");
      resultadoDiv.innerHTML = `
      <div class="textosresultado">
        <p class="txtresultado">hiciste ${numeroHtml} de ${num7} bien</p>
        <p class="felicidades">¡TU PUEDES!</p>
      </div>
     <img src="../imagenes/cruz.png" alt="cruz" class="cruz" id="cruz">
      <button id="botonresultado" class="boton botonresultado">volver a jugar</button>
    `;
    }
    actualizarVisibilidad(true);
  }
}

function actualizarVisibilidad(mostrar) {
  if (mostrar) {
    resultadoDiv.style.display = "flex";
    resultadoDiv.style.alignItems = "center";
    resultadoDiv.style.justifyContent = "center";
  } else {
    resultadoDiv.style.display = "none";
  }
}

function reiniciarJuego() {
  botonorden1.style.backgroundImage = "none";
  botonorden2.style.backgroundImage = "none";
  botonorden3.style.backgroundImage = "none";
  botonorden4.style.backgroundImage = "none";
  botonorden5.style.backgroundImage = "none";
  botonorden6.style.backgroundImage = "none";
  botonorden7.style.backgroundImage = "none";
botonorden1.innerHTML = 1;
botonorden2.innerHTML = 2;
botonorden3.innerHTML = 3;
botonorden4.innerHTML = 4;
botonorden5.innerHTML = 5;
botonorden6.innerHTML = 6;
botonorden7.innerHTML = 7;


  imagenSeleccionada = null;
  correcttos = 0;
  resultadoDiv.classList.remove("verde", "amarillo", "rojo", "zindex");
  actualizarVisibilidad(false);
  resultadoDiv.innerHTML = "";
  confeti.classList.remove("zindex")
  confeti.pause();
   confeti.classList.remove("display")
   img1.classList.remove("antizidex");
img2.classList.remove("antizidex");
img3.classList.remove("antizidex");
img4.classList.remove("antizidex");
img5.classList.remove("antizidex");
img6.classList.remove("antizidex");
img7.classList.remove("antizidex");
   img1.classList.remove("borde");
img2.classList.remove("borde");
img3.classList.remove("borde");
img4.classList.remove("borde");
img5.classList.remove("borde");
   img6.classList.remove("borde");
img7.classList.remove("borde");

}

resultadoDiv.addEventListener("click", function (event) {
  if (
    event.target &&
    event.target.classList &&
    event.target.classList.contains("cruz")
  ) {
    actualizarVisibilidad(false);
    resultadoDiv.classList.remove("verde", "amarillo", "rojo", "zindex");
    correcttos = 0;
    resultadoDiv.innerHTML =
      '<img src="../front/imagenes/cruz.png" alt="cruz" class="cruz" id="cruz">';
      confeti.classList.remove("zindex")
      confeti.pause();
      confeti.classList.remove("display")
  postEvent("trofeos",{
      T4: true,
      NOMBREniño:nombre,
APELLIDOniño:apellido
       },function(data){
      console.log(data)
    }
    )
  } else if (
    event.target &&
    event.target.classList &&
    event.target.classList.contains("botonresultado")
  ) {
    reiniciarJuego();
  }
});
let btnatras = document.getElementById("btnatras");
btnatras.addEventListener("click", function () {
  window.location.href = "../pagina gral/paginageneraln.html";
});
        videoexplicacion.play();
        let cerrarPOPUP = document.getElementById ("cerrarPOPUP");
             cerrarPOPUP.addEventListener ("click", () => {
        pop.classList.add ("displaya");
        pop.classList.add("antizidex")
        videoexplicacion.pause()})
