// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego numero secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica el numero del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function intentoDeUsuario() {
  let numeroUsu = parseInt(document.getElementById("numeroUsu").value);
  if (numeroUsu === numeroSecreto) {
    asignarTexto(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó.
    if (numeroUsu > numeroSecreto) {
      asignarTexto("p", "El número secreto es menor");
    } else {
      asignarTexto("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

function asignarTexto(element, text) {
  let titulo = document.querySelector(element);
  titulo.innerHTML = text;
}

function generarNumero() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //Si el numero generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function limpiarCaja() {
  document.querySelector("#numeroUsu").value = "";
}

function condicionesIniciales() {
  asignarTexto("h1", "Juego del número secreto!");
  asignarTexto("p", `Indica un número del 1 al 10`);
  numeroSecreto = generarNumero();
  intentos = 1;
  console.log(numeroSecreto);
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

// asignarTexto("h1", "Juego numero secreto");
// asignarTexto("p", "Indica el numero del 1 al 10");
condicionesIniciales();
