let diagnosticos = [];

document.getElementById("btnAgregar").addEventListener("click", agregarDiagnostico);
document.getElementById("btnMostrar").addEventListener("click", mostrarDiagnosticos);

function agregarDiagnostico() {
    const input = document.getElementById("inputDiagnostico");
    const texto = input.value.trim();

    if (texto === "") {
        diagnosticos.push(texto);
        input.value = "";
        alert("Diagnóstico agregado correctamente.");
    } else {
        alert("Por favor, escribe un diagnóstico.");
    }
}

function mostrarDiagnosticos() {
    const contenedor = document.getElementById("listaDiagnosticos");
    contenedor.innerHTML = "";

    if (diagnosticos.length === 0) {
        contenedor.innerHTML = "<p>No hay diagnósticos cargados.</p>";
        return;
    }

    diagnosticos.forEach(d => {
        const p = document.createElement("p");
        p.textContent = d;
        contenedor.appendChild(p);
    });
}

