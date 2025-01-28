// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creo la lista
let nombresAmigos=[];
let nombre;
//Parte 2 Funcion agregar amigos
function agregarAmigo(){
    
    nombre=document.getElementById("amigo").value;
    
    if(!document.getElementById("amigo").value=="")
    {
        if(verificarNombre(nombre)){
            nombre = document.getElementById("amigo").value;
            nombresAmigos.push(nombre);
        }
        
    }else{
        alert("Por favor, inserte un nombre");
    }
    
    limpiarCampo("amigo");
}

//Validar entrada
//Actualizar Array 
function verificarNombre(nombre){
    if(nombre===""){
        alert("Por favor, inserte un nombre");
    }else{
        return typeof nombre === "string";
    }
    
}


//limpiar campo
function limpiarCampo(inputID){
    document.getElementById(inputID).value="";
}