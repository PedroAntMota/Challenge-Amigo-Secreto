// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  validarinput();
  actualizarLaLista();
}
function validarinput() {
  const regex = /^[a-zA-Z0-9]+$/;
  const valorinput = document.querySelector("input");
  if (document.querySelector("input").value === "") {
    alert("No ha agregado ningun amigo.");
  } else if (regex.test(valorinput.value)) {
    let nombre = document.getElementById("amigo").value;
    let existe = amigos.some(
      (amigo) => amigo.toLowerCase() === nombre.toLowerCase()
    );
    if (existe) {
      alert("No se permiten nombres repetidos.");
    } else {
      amigos.push(nombre);
      document.getElementById("amigo").value = "";
    }
  } else {
    alert("No se aceptan caracteres especiales, en los nombres.");
  }
}
function limpiar() {
  document.getElementById("amigo").value = "";
  amigos = [];
  document.getElementById("resultado").value = "";
}
function actualizarLaLista() {
  let listamigos = document.getElementById("listaAmigos");
  listamigos.innerHTML = "";
  amigos.forEach(function (amigo) {
    let li = document.createElement("li");
    li.textContent = amigo;
    listamigos.appendChild(li);
  });
}
function sortearAmigo() {
  if (amigos.length == 0) {
    document.getElementById("resultado").textContent =
      "No hay amigos para el sorteo.";
  } else if (amigos.length == 1) {
    alert("Necesita más de un amigo para el sorteo.");
  } else {
    let iamigos = Math.floor(Math.random() * amigos.length);
    let amigosort = amigos[iamigos];
    document.getElementById("resultado").textContent =
      "Amigo Ganador es: " + amigosort;
    limpiar();
  }
}
