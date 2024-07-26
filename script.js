//O que vai monitorar toda a página-o que vai esperar pelo evento
document.body.addEventListener('keyup', (event) => {
    playsound(event.code.toLowerCase());
});

//função para tocar o som das teclas
function playsound(sound) {
    //selecionando a teclaa e o som, completando com a variável
    let audioElement = document.querySelector(`#s_${sound}`);

    //função para selecionar a tecla na tela do usuário
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);


    //condição para verificar se achou o audio
    if(audioElement) {

        //função para zerar o audio para tocar mais rápido
        audioElement.currentTime = 0;

        //função para tocar o som
        audioElement.play();
    }

    //fução para encontrar a tecla e mudando o scc dela
    if(keyElement) {
        
        //função para mudar a estilização do elemento
        keyElement.classList.add('active');

        //função que vai retirar a classe da tecla
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

//Função para o evento do botão de Tocar
document.querySelector('.composer button').addEventListener('click', () => {
    
    //função para saber qual som foi tocado
    let song = document.querySelector('#input').value;

    //função para verificar se ele tocou alguma coisa
    if(song !== '') {

        //função para transformar cada letra em um array
        let sonArray = song.split('');
        playComposition(sonArray);
    }
});

//função para tornar o que for digitado para tocar na bateria
function playComposition(sonArray) {

    //função para colocar Time entre as letras para tocar no mesmo ritmo que for digitado
    let await = 0;

    //loop para varificar cada letra antes de tocar
    for(let songItem of sonArray) {
        setTimeout(() => {

            //função para tocar o que for escrito
            playsound(`key${songItem}`);
        }, await);

        //função para adicionar mais milisegundos
        await += 250;        
    }
}