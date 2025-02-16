// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let iptAmigo = document.getElementById('amigo');
let ulListaDeAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');
let resultado
let amigos =[]

function agregarAmigo (){
  let elementoAmigo = document.createElement('li');
  elementoAmigo.textContent = iptAmigo.value;
  ulListaDeAmigos.appendChild(elementoAmigo)
  amigos.push(iptAmigo.value);
    console.log(amigos);
}