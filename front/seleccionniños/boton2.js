
const segundo1 = document.getElementById("1segundo");
const segundo2 = document.getElementById("2segundo");
const segundo3 = document.getElementById("3segundo");
const segundo4 = document.getElementById("4segundo");

let atras2 = document.getElementById ("atras");
let seguir2 = document.getElementById ("seguir");

let indice2 = 0;
function paginasmostrar2 () {
if (indice2 === 0) {
    atras2.style.display= "none"
    seguir2.style.display = "block"
    segundo1.style.display= "block"
    segundo2.style.display= "none"
    segundo3.style.display= "none"
    segundo4.style.display= "none"
}
else if (indice2 === 1) {
    atras2.style.display= "block"
    segundo1.style.display= "none"
    segundo2.style.display= "block"
    segundo3.style.display= "none"
    segundo4.style.display= "none"
}
else if (indice2 === 2) {
    segundo1.style.display= "none"
    segundo2.style.display= "none"
    segundo3.style.display= "block"
    segundo4.style.display= "none"
}
else if (indice2 === 3) {
    seguir2.style.display = "none"
    segundo1.style.display= "none"
    segundo2.style.display= "none"
    segundo3.style.display= "none"
    segundo4.style.display= "block"
}}
    atras2.addEventListener ("click", () => {
    indice2--;
paginasmostrar2()})
    seguir2.addEventListener ("click", () => {
    indice2 ++;
    paginasmostrar2()})
paginasmostrar2 ();




