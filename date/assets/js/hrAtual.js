
function mostraHora () {

    const data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12:false})

}

console.log(mostraHora());