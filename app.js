// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];
let nombres = document.getElementById("amigo");
let actualizarLista = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");



function agregarAmigo(){
    if(nombres.value == ""){
        alert("Por favor inserte un nombre")

    }else{
   
    listaNombres.push(nombres.value);
    actualizarLista.innerHTML+=`<li>${nombres.value}</li>`;
    limpiarCaja();
    }   
}

function limpiarCaja(){
document.getElementById("amigo").value='';  
}

function sortearAmigo(){
  if(listaNombres.length == 0){
    alert("No hay amigos disponibles para sortear! Agrega al menos un nombre")
  }else{
  let random = Math.floor(Math.random()*listaNombres.length);
  let amigoSecreto = listaNombres[random];
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
  }
}

function reiniciar(){
  limpiarCaja();
  actualizarLista.innerHTML='';
  ulResultado.innerHTML='';
  listaNombres = [];

}
