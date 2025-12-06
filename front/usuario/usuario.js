let pusuario = document.getElementById("pusuario");
let pclave = document.getElementById("pclave");
let iclave = document.getElementById("cclave");
let ptrofeos = document.getElementById("ptrofeos");
let pdosis= document.getElementById("pdosis");
let pratio= document.getElementById("pratio");
let inpuratio= document.getElementById("inpuratio");
let inputdosis= document.getElementById("inputdosis");
connect2Server();
postEvent("UsuarioRegistrado",{
NOMBRE: localStorage.getItem("nombreusuario"),
APELLIDO: localStorage.getItem("apellidousuario")
},definicion)
function definicion(data){
    console.log("Datos recibidos:", data);
    pusuario.textContent = data.NOMBRE + " " + data.APELLIDO;
 document.getElementById("inputdosis").placeholder= data.DOSIS ;
 document.getElementById("inpuratio").placeholder = data.RATIO ;
  pclave.textContent =data.CONTRASENA;
  ptrofeos.textContent = data.NOMBREniño + " " + data.APELLIDOniño;
}
inputdosis.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
    postEvent("ActualizarDosis", {

      NOMBRE: localStorage.getItem("nombreusuario"),
      APELLIDO: localStorage.getItem("apellidousuario"),
      DOSIS: inputdosis.value
    }, function(data) {
      inputdosis.placeholder = data.DOSIS;
    });
   }
});

inpuratio.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
    postEvent("ActualizarRatio", {
      NOMBRE: localStorage.getItem("nombreusuario"),
      APELLIDO: localStorage.getItem("apellidousuario"),
      RATIO: inpuratio.value
    }, function(data) {
      inpuratio.placeholder = data.RATIO;
    });
    }
});
let volveratras = document.getElementById("volveratras");
function volveratra (){
    window.location.href='../paginageneralp/paginageneralp.html'
}
volveratras.addEventListener("click", (volveratra));
