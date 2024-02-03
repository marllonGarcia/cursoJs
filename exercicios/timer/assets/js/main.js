
//   pegar os segundos e formatar

function criarHoraDosSegundos(segundos) {

    const data= new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
    hour12:false,
    timeZone: 'GMT' }) ;
}

// manipulando o Dom
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciarRelogio () {
    timer = setInterval( function() {
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000);

}


iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciarRelogio();
    relogio.classList.remove('pausado');
} );


pausar.addEventListener('click' , function(event){
  clearInterval(timer);
  relogio.classList.add('pausado');
})

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('pausado');
    
})