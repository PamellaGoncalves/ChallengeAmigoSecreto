//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
function sortearAmigo(){
    let min = 0
    let max = amigos.length - 1
    const numeroAleatorio = Math.random(); 
    const numeroNoIntervalo = Math.floor(numeroAleatorio * (max - min + 1)) + min;
    let amigoSorteado = amigos[numeroNoIntervalo]
    let listaResultado = document.getElementById('resultado')
    let li = document.createElement("li")
    li.textContent = amigoSorteado;
    listaResultado.appendChild(li);
}
function adicionarAmigo(){
    let nomedoamigo = document.getElementById('amigo').value
    if(nomedoamigo == ''){
        alert('"Por favor, insira um nome."')
        return
    }
    amigos.push(nomedoamigo)
    document.getElementById('amigo').value = ''
    alert(amigos)
}
