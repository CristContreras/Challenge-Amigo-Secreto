let nombresAmigos=[];
let nombre="";
let mensajeError = "Por favor, inserte un nombre";
let lista = getElementById("listaAmigos");


setFocusById("amigo");

addEventEnter("amigo");


function agregarAmigo(){

    if(esCampoVacio("amigo")){
        alert(mensajeError);
        setFocusById("amigo");
    }else{
        nombre = getValueById("amigo");
        nombresAmigos.push(nombre);
        limpiarCampo("amigo");
        setFocusById("amigo");
        actualizarLista(nombresAmigos);
    }
}

function actualizarLista(nombresAmigos){
   
    lista.innerHTML="";
    for(let i = 0; i < nombresAmigos.length;i++){
        lista.innerHTML += `<li>${nombresAmigos[i]}</li>`;
    }
}

function sortearAmigo(){
    let numeroSorteado = getRandomInt(nombresAmigos.length);
    let nombreSorteado = nombresAmigos[numeroSorteado];
    document.getElementById("resultado").innerHTML=nombreSorteado;
}

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function addEventEnter(id){
    getElementById(id).addEventListener("keydown", function(event){if(event.key==="Enter"){agregarAmigo();}})
}

function getElementById(id){
    return document.getElementById(id);
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
