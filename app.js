//Permite utilizar la tecla Enter para agregar un nombre.
getElementById(campoNombre).addEventListener("keydown", function (event) { if (event.key === "Enter") { agregarAmigo(); } })

//Funciones simplificadas
const getElementById = id => document.getElementById(id);
const getValueById = id => getElementById(id).value;
const setValueById = (id, value) => getElementById(id).value = value;
const setFocusById = id => getElementById(id).focus();

//Funciones para testear el nombre ingresado
const contieneNumeros = nombre => /\d/.test(nombre);
const esNombreVacio = nombre => nombre.trim() === "";
const contieneCaracteresEspeciales = nombre => /[^A-Za-z\s]/.test(nombre);
const contieneLetras = nombre => /^[A-Za-z\s]+$/.test(nombre.trim());

//Devuelve un número random
const getRandomInt = max => Math.floor(Math.random() * max);

const mostrarMsjErrorNombre = (mensaje, campo) => {
    alert(mensaje);
    limpiarCampo(campo);
    return false;
}

//Variables Globales
let nombresAmigos = [];
let nombre = "";
let listaElement = getElementById("listaAmigos");
let resultadoElement = getElementById("resultado");
let numeroSorteado = 0;
let nombreSorteado = "";
const campoNombre = "amigo";
let mensajeError = "";

setFocusById(campoNombre);


function agregarAmigo() {
    nombre = getValueById(campoNombre);
    if (esNombreValido(nombre)) {
        nombresAmigos.push(nombre);
        limpiarCampo(campoNombre);
        actualizarLista(nombresAmigos);
    }
}

function reiniciarTodo() {
    limpiarCampo(campoNombre);
    nombresAmigos.splice(0, nombresAmigos.length);
    listaElement.innerHTML = "";
    resultadoElement.innerHTML = "";
}

function esNombreValido(nombre) {

    if (contieneNumeros(nombre)) {
        mensajeError = "Error el nombre no debe contener números.";
        return mostrarMsjErrorNombre(mensajeError, campoNombre);
    } else if (contieneCaracteresEspeciales(nombre)) {
        mensajeError = "Error debe contener solo letras."
        return mostrarMsjErrorNombre(mensajeError, campoNombre);
    } else if (esNombreVacio(nombre)) {
        mensajeError = "Error el nombre no puede ser vacío."
        return mostrarMsjErrorNombre(mensajeError, campoNombre);
    }
    return true;
}

function actualizarLista(nombresAmigos) {
    listaElement.innerHTML = "";
    for (let i = 0; i < nombresAmigos.length; i++) {
        listaElement.innerHTML += `<li>${nombresAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (nombresAmigos.length > 1) {
        numeroSorteado = getRandomInt(nombresAmigos.length);
        nombreSorteado = (nombresAmigos[numeroSorteado]).toUpperCase();
        resultadoElement.innerHTML = `El amigo secreto es ${nombreSorteado}`;
    } else {
        alert("Debe ingresar al menos 2 nombres.");
        limpiarCampo(campoNombre);
    }
}

function limpiarCampo(id) {
    setValueById(id, "");
    setFocusById(id);
}

