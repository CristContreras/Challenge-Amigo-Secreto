// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creo la lista
let nombresAmigos=[];
let nombre="";
let mensajeError = "Por favor, inserte un nombre";

//Parte 2 Funcion agregar amigos
function agregarAmigo(){
//     //Forma 1
//     //Capturar el valor
//     nombre = document.getElementById("amigo").value;
//     //Validad la entrada
//     if(nombre===""){
//         alert("Por favor, inserte un nombre");
//     }
//     //Actualizar array
//     nombresAmigos.push(nombre);
//     //limpiar entrada
//     document.querySelector("#amigo").value="";


// //forma 2
//     if(document.getElementById("amigo").value===""){
//         alert("Por favor, inserte un nombre");
//     }else{
//         nombresAmigos.push(document.getElementById("amigo").value);
//         document.getElementById("amigo").value=="";
//     }

//forma 3
    if(esCampoVacio("amigo")){
        alert(mensajeError);
        setFocusById("amigo");
    }else{
        nombre = getValueById("amigo");
        nombresAmigos.push(nombre);
        limpiarCampo("amigo");
        setFocusById("amigo");
    }
}

function getValueById(id){
    return document.getElementById(id).value;
}

function setValueById(id, value){
    document.getElementById(id).value=value;
}

function setFocusById(id){
    document.getElementById(id).focus();
}

function limpiarCampo(id){
    setValueById(id, "");
}
function esCampoVacio(id){
    return getValueById(id)==="";
}