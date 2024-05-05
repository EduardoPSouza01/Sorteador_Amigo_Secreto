let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value.toUpperCase();
    let lista = document.getElementById('lista-amigos');

    if(amigo == ''){
        alert('Informe o nome do amigo');
        return;
    }
    if(amigos.includes(amigo)){
        alert('O nome ja consta na lista de Sorteio!!');
    }else{
        amigos.push(amigo);
        if (lista.textContent == '') {
            lista.textContent = amigo;
        } else {
            lista.textContent = lista.textContent + ', ' + amigo;
        }
    }

    amigo.value = '';
}

function sortear() {

    if(amigos.length < 4){
        alert('Adcione pelo menos 4 amaigos!');
    }else{
        embaralha(amigos);
        let sorteio = document.getElementById('lista-sorteio');
    
        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->  ' + amigos[0] + '<br>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->  ' + amigos[i + 1] + '<br>';
            }
        }
    }
}

function remover(){
    let amigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

    document.getElementById('lista-sorteio').innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        if(amigos[i] === amigo){
            amigos.splice(i, 1);
            break;
        }
    }
    lista.textContent = amigos.join(', ');
    document.getElementById('nome-amigo').value = '';
}


function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

