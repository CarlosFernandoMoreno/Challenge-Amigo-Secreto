// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let iptAmigo = document.getElementById("amigo");
let ulListaDeAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");
let resultado;
let amigos = [];
let min;
let max;
function agregarAmigo() {
  if (iptAmigo.value == "") {
    alert("no debes dejar este campo vacio");
    return;
  }
  let elementoAmigo = document.createElement("li");
  elementoAmigo.textContent = iptAmigo.value;
  ulListaDeAmigos.appendChild(elementoAmigo);
  amigos.push(iptAmigo.value);
  return;
}
function sortearAmigo() {
  min = Math.ceil(0);
  max = Math.floor(amigos.length - 1);
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  if (document.getElementById("ganador")) {
    ganador.textContent = `Tu amigo secreto es ${amigos[number]}`;
    ulResultado.appendChild(ganador);
    return;
  } else {
    let ganador = document.createElement("p");
    ganador.setAttribute("id", "ganador");
    ganador.textContent = `Tu amigo secreto es ${amigos[number]}`;
    ulResultado.appendChild(ganador);
    return;
  }
}
