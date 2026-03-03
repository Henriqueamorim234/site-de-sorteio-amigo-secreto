let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");
    if (lista.textContent == ''){
    lista.textContent += nomeAmigo.value;
    }else {
        lista.textContent += ', ' + nomeAmigo.value;
    }

    amigos.push(nomeAmigo.value);
    nomeAmigo.value = '';

}

function sortear(){
 embaralha(amigos);
 let sorteio = document.getElementById("lista-sorteio");
 
 for(let i = 0; i < amigos.length; i++){
    if (i == amigos.length - 1){
    sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {    
    sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i+1] + '<br>'; 
 }
}
}

function reiniciar(){
    amigos = [];
    document.getElementById("lista-amigos").textContent = '';
    document.getElementById("lista-sorteio").textContent = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}