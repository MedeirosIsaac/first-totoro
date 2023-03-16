/*
Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente 

- passo 1- dar um jeito de pegar o elemento html dos botões

- passo 2- dar um jeito de identificar o clique do usuário no botão

- passo 3- desmarcar o botão selecionado anterior

- passo 4- marcar o botão clicando como se tivesse selecionado

- passo 5- esconder a imagem ativa de fundo anterior

- passo 6- fazer aparecer a imagem de fundo correspondente ao botão clicando 
*/

// passo 1
const botoesCarossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2
botoesCarossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log('clicou no botão');

        // passo 3
        desativarBotaoSelecionado();

        // passo 4
        selecionarBotaoCarrossel(botao);

        // passo 5
        esconderImagemAtiva();

        // passo 6
        mostrarImagemDeFundo(indice);
    });
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

