
 const paragrafos =  document.querySelector('.container') ;

const ps = paragrafos.querySelectorAll('p') ;

const estilosBody = getComputedStyle (document.body) ; 
const backgroundColorBody = estilosBody.backgroundColor ;
const estiloContainer =  getComputedStyle(paragrafos) ;

const backgroundColorContainer = estiloContainer.backgroundColor ;




for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody ;
    p.style.color = backgroundColorContainer ; 
    
}
