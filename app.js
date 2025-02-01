//Funciones simplificadas
const getElementById=id=>document.getElementById(id);
const getValueById=id=>getElementById(id).value;
const setValueById=(id, value)=>getElementById(id).value=value;
const setFocusById = id => getElementById(id).focus();

//Funciones para testear el nombre ingresado
const contieneNumeros = nombre => /\d/.test(nombre);
const esNombreVacio = nombre => nombre.trim() === "";
const contieneCaracteresEspeciales = nombre => /[^A-Za-z\s]/.test(nombre);
const contieneLetras = nombre => /^[A-Za-z\s]+$/.test(nombre.trim());


let nombresAmigos = [];
let nombre = "";
let listaElement = getElementById("listaAmigos");
let resultadoElement = getElementById("resultado");
let numeroSorteado = 0;
let nombreSorteado = "";
const campoNombre = "amigo";

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


// function contieneNumeros(nombre) {
//     return /\d/.test(nombre);
// }

// function esNombreVacio(nombre) {
//     return nombre.trim() === "";
// }
// function contieneCaracteresEspeciales(nombre) {
//     return /[^A-Za-z\s]/.test(nombre);
// }
// function contieneLetras(nombre) {
//     return /^[A-Za-z\s]+$/.test(nombre.trim());
// }


function esNombreValido(nombre) {
    
    const mostrarMsjErrorNombre = (mensaje, campo) => {
        alert(mensaje);
        limpiarCampo(campo);
        return false;
    }

    if(contieneNumeros(nombre)){
        mensajeError = "Error el nombre no debe contener números.";
        return mostrarMsjErrorNombre(mensajeError, campoNombre);
    }else if(contieneCaracteresEspeciales(nombre)){
        mensajeError = "Error debe contener solo letras."
        return mostrarMsjErrorNombre(mensajeError, campoNombre);
    }else if(esNombreVacio(nombre)){
        mensajeError = "Error el nombre no puede ser vacío."
        return mostrarMsjErrorNombre(mensajeError, campoNombre);
    }
    
    return true;
    
    // let mensajeError = contieneNumeros(nombre) ? "Error el nombre no debe contener números." : contieneCaracteresEspeciales(nombre) ? "Error debe contener solo letras." : esNombreVacio(nombre) ? "Error el nombre no puede ser vacío" : null;
    // return contieneLetras(nombre) ? true : (alert(mensajeError), limpiarCampo(campoNombre), false);

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

//Funcion para generar un numero andom
const getRandomInt = max => Math.floor(Math.random()*max);

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

//Permite utilizar la tecla Enter para agregar un nombre.
document.getElementById(campoNombre).addEventListener("keydown", function (event) { if (event.key === "Enter") { agregarAmigo(); } })



//  function getElementById(id) {
//      return document.getElementById(id);
//  }

// function getValueById(id) {
//     return getElementById(id).value;
// }

// function setValueById(id, value) {
//     getElementById(id).value = value;
// }

// function setFocusById(id) {
//      getElementById(id).focus();
//  }



function limpiarCampo(id) {
    setValueById(id, "");
    setFocusById(id);
}

