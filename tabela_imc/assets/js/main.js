

//funcao que tira o padrao do envio 
// pega os dados 

  const form = document.querySelector('.form');
  let resultado = document.querySelector('.resultado');


  form.addEventListener('submit' , function(evento){
      evento.preventDefault();

      const peso = document.getElementById('peso')
      const altura = document.getElementById('altura')
      const imc  = Number(peso.value) / (Number(altura.value) * Number(altura.value))

      

      if (imc < 18.5) {

        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)},você está abaixo do peso.`
      }

      else if (imc < 24.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)},você está com o peso normal.`
        
      }

      else if (imc < 29.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, você está com Sobrepeso.`
      }

      else if (imc < 34.9) {
        resultado.innerHTML =`Seu IMC é ${imc.toFixed(1)}, você está com Obesidade grau 1.`
      }


      else if (imc <= 39.9) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, você está com Obesidade grau 2.`
      }
      else if (imc > 40) {
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(1)}, Você está com Obesidade grau 3.`
      }

      if (imc <= 0 ) {
        resultado.innerHTML = 'Digite Corretamente !'
      }

      
  }
     
  )
