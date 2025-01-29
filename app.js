let nombresAmigos=[];
let nombre="";
let mensajeError = "Por favor, inserte un nombre";
let lista = getElementById("listaAmigos");
let numeroSorteado=0;
let nombreSorteado="";
let campoNombre = "amigo";

setFocusById(campoNombre);

addEventEnter(campoNombre);


function agregarAmigo(){

    if(esCampoVacio(campoNombre)){
        alert(mensajeError);
        setFocusById(campoNombre);
    }else{
        nombre = getValueById(campoNombre);
        nombresAmigos.push(nombre);
        limpiarCampo(campoNombre);
        setFocusById(campoNombre);
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
    if(nombresAmigos.length>1){
        numeroSorteado = getRandomInt(nombresAmigos.length);
        nombreSorteado = (nombresAmigos[numeroSorteado]).toUpperCase();
        getElementById("resultado").innerHTML=`El amigo secreto es ${nombreSorteado}`;
    }else{
        alert("Debe ingresar al menos 2 nombres.")
    }
    
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
