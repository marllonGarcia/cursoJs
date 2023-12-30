// Escreva uma função que recebe 2 numeros e retorne o maior deles

 function maiorNumero (num1, num2) {

    const numA = num1 ;
    const numB = num2 ;

    if (numA > numB) {
         console.log(numA);
    }
    
    else if (numB > numA) {
         console.log(numB);
    }

    
    else if (numA == numB) {
     console.log('Valores iguas.');
    }

    else{
      console.log('Digite um valor válido !');
    }
 
}

console.log(maiorNumero())