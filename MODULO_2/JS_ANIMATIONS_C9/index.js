const pelota = document.querySelector('.pelota');
let sentido = 1;

setInterval(() => {
    let coordenada = parseInt(getComputedStyle(pelota).left.replace("px",""));
    if(coordenada >= 1100) {
        sentido = -1;
        
    }
    if(coordenada <= 0) {
        sentido = 1;
        let banda = document.querySelector(".banda-izquierda");
        banda.style.display = "block";
        setTimeout(()=> {
            banda.style.display = "none";
        }, 1500);
    }
    let factor = 5*(sentido);
    let resultado = coordenada + factor;
    pelota.style.left = resultado + "px";
    console.log(coordenada, resultado, factor);
}, 10);