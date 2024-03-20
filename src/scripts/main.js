document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-questions]');

    const sectionHero = document.querySelector('.hero');
    const alturaHero = sectionHero.clientHeight; // clienteHeight = SERVE para saber a altura de um elemento //

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero){
            ocultaHeader(); 
        }else{
            exibeHeader()
        }
    });

    function exibeHeader(){
        const header = document.querySelector('header');
            header.classList.remove('header--is-hidden');  
    }

    function ocultaHeader(){
        const header = document.querySelector('header');
            header.classList.add('header--is-hidden');  
    }

    // Seção de atrações, programação das abas //
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const botaoVal = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${botaoVal}]`)
            escondeTabs();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        });
    }

    // Seção FAQ, acordion. //
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
});

function abreOuFechaResposta(elemento){
    const question = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(question);
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}

function escondeTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}