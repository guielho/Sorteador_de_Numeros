function alterarStatus (id) {
    let gameClicado = document.getElementById (`game-${id}`);
    let imagem = gameClicado.querySelector ('.dashboard__item__img');
    let botao = gameClicado.querySelector ('.dashboard__item__button');
    let confirmaDevolucao;

    if (botao.classList.contains ('dashboard__item__button--return')) {
        confirmaDevolucao = confirm ('Tem certeza que deseja devolver este jogo?');
        if (confirmaDevolucao) {
            botao.textContent = 'Alugar';
            botao.classList.remove ('dashboard__item__button--return');
            imagem.classList.remove ('dashboard__item__img--rented');
        }
        
    } else {
        botao.textContent = 'Devolver';
        botao.classList.add ('dashboard__item__button--return');
        imagem.classList.add ('dashboard__item__img--rented');
    
    }

qtdLocacoes ();

}


function qtdLocacoes () {
    let locados = document.querySelectorAll ('.dashboard__item__button--return');
    let soma = locados.length;
    
    /* define o singular ou plural da mensagem apresentada no alert*/
    let singularPlural = soma > 1? (`Você têm ${soma} jogos alugados`) : (`Você tem ${soma} jogo alugado`);

    alert (singularPlural);

}



