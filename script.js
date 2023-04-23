function guardarNotas() {
  var nota = document.getElementById("nota").value;
  if (nota === "") {
    alert("Por favor, ingrese una nota");
    return;
  }
  var notasGuardadas = localStorage.getItem("notas");
  if (notasGuardadas === null) {
    notasGuardadas = "";
  }
  notasGuardadas += nota + "\n";
  localStorage.setItem("notas", notasGuardadas);
  document.getElementById("nota").value = "";
  mostrarNotasGuardadas();
}

function mostrarNotasGuardadas() {
  var notasGuardadas = localStorage.getItem("notas");
  if (notasGuardadas === null || notasGuardadas === "") {
    document.getElementById("notas-guardadas").innerHTML = "No hay notas guardadas.";
    document.getElementById("descargar").style.display = "none";
    return;
  }
  document.getElementById("notas-guardadas").innerHTML = "<pre>" + notasGuardadas + "</pre>";
  document.getElementById("descargar").style.display = "block";
}

function descargarNotas() {
  var notas = localStorage.getItem("notas");
  var enlace = document.createElement("a");
  enlace.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(notas));
  enlace.setAttribute("download", "notas.txt");
  enlace.style.display = "none";
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
}

mostrarNotasGuardadas();
