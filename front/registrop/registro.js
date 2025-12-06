let nombrep =document.getElementById("nombrep")
let apellido =document.getElementById("apellido")
let niño =document.getElementById("nombreh")
let contraseña =document.getElementById("contraseña")
let dosis=document.getElementById("dosis")
let registroBTN=document.getElementById("registroBTN")


connect2Server()
registroBTN.addEventListener("click", () => {
postEvent("registro", {
    NOMBRE: document.getElementById("nombrep").value,
    APELLIDOniño: document.getElementById("apellidoh").value,
    APELLIDO: document.getElementById("apellido").value,
    CONTRASENA: document.getElementById("contraseña").value,
    NOMBREniño:document.getElementById("nombreh").value,
    DOSIS:document.getElementById("dosis").value,
  },registro);});
  function registro(data){
    let cuentacreada=data
if (cuentacreada===true){
  localStorage.setItem ("nombreniño", document.getElementById("nombreh").value);
  localStorage.setItem ("apellidoniño",  document.getElementById("apellidoh").value);
  window.location.href = "../registro/registro.html";
}
else if ( cuentacreada=false){
    alert("vueva a intentar y revise si ya existe el usuario")
}
  }
  let cuenta = document.getElementById("cuenta")
  cuenta.addEventListener("click", function(){
    window.location.href='../main/main_html_front.html'
  })