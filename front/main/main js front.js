
let btniniciosesion= document.getElementById("registroBTN")
connect2Server()
function cambiardatosdelusuario() {
   
    contrseña = document.getElementById("contraseña").value;
    console.log("contraseña:" + contrseña);
    console.log( "correo electronico:" +gmail);
    const inputratioinsulina= document.getElementById("ratioinsulina");
    const  valorinputratioinsulina= inputratioinsulina.value;
    let ratioinsulina = valorinputratioinsulina;
    console.log("ratio de insulina:" + ratioinsulina);
       const inputnombredeusuario= document.getElementById("nombre");
    const  valorinputnomredeusuario= inputnombredeusuario.value;
    let nombre = valorinputnomredeusuario;
    console.log("ratio de insulina:" + nombre);}
    connect2Server("http://127.0.0.1:5501");

btniniciosesion.addEventListener("click", () => {
postEvent("iniciarsesion", {
  NOMBRE: document.getElementById("NOMBREP").value,
  APELLIDO: document.getElementById("apellido").value,
  CONTRASENA: document.getElementById("CONTRASEÑA").value,
  NOMBREniño: document.getElementById("NOMBREH").value,
  APELLIDOniño: document.getElementById("apellidoh").value
}, comprobaciondedatos);
});
function comprobaciondedatos(data) {
    let logueado = data[0];
    let encontrado = data[1];
    let contra = data[2];
    if (logueado === true && encontrado === true && contra === true) {
        alert("Has iniciado sesión con éxito");
        localStorage.setItem("nombreusuario", document.getElementById("NOMBREP").value)
        localStorage.setItem("apellidousuario", document.getElementById("apellido").value);
        localStorage.setItem("contraseñausuario", document.getElementById("CONTRASEÑA").value);
        localStorage.setItem("nombreniño", document.getElementById("NOMBREH").value);
        localStorage.setItem("apellidoniño", document.getElementById("apellidoh").value);
         window.location.href='../paginageneralp/paginageneralp.html'  
    }
    else if (encontrado === true && contra === false && logueado === false) {
    alert("La contraseña es incorrecta");
}
else if (encontrado === true && contra === true && logueado === false) {
    alert("Has ingresado mal tu nombre o apellido");
}
else if (encontrado === false) {
    alert("No se ha encontrado una cuenta con ese correo");
}

}

 
  



