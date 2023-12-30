


function ePasaigem (h,w) {

    let heigth = h ;
    let width = w ; 

    const heigthDefault = 1080;
    const widthDefault = 1920 ;

    if (heigth == heigthDefault && width == widthDefault) {
        return true
    } 

    else{
        return false;
    }
}



console.log(ePasaigem(1080,1920))