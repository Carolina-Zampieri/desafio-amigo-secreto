//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

/*Capturar o valor do campo de entrada:
Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.

Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.

Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."

Atualizar o array de amigos:
Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().

Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.*/

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    limparInput();
    listaNomes();
}

function limparInput() {
    nome = document.querySelector('input');
    nome.value = '';
}

function listaNomes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}