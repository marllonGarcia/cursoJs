

const numeros = [ 1, 2, 3 ,4 ,5, 6 ];

for (let numero of numeros ) {
    
    if (numero === 4) {
        console.log ('pulei o 4')
        continue;
    }

    console.log(numero);
}


 console.log("########")

for (let numero of numeros ) {
    
    if (numero === 4) {
        console.log ('aqui eu para e sai do laço')
        break;
    }

    console.log(numero);
}