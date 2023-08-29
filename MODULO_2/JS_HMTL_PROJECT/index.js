// alert("Estoy funcionando en JS");


// let titulo = document.getElementById("123");
// setTimeout(()=>{ 
//     console.log(titulo);
//     alert(titulo.innerHTML);
// }, 4000)

// let index = 0;
// let miIntervalo = setInterval(() => {
//     titulo.innerHTML = titulo.innerHTML + "Hello"
//     index ++;
//     if (index === 4) {
//         clearInterval(miIntervalo)
//     }
// }, 2000);


/// Cuantos pares de cartas 

// var carta1 = false;
// var carta1Value = '';
// var carta2 = false;
// var carta2Value = '';
// var parejasDescubiertas = 0;


// function destape(posicion) {
//     let carta = document.getElementById(posicion)
//     carta.style.color = "black";

//     if (carta1 === true) {
//         carta2 = true;
//         carta2Value = carta;
//     } else {
//         carta1 = true;
//         carta1Value = carta;
//     }
//     comparacion();
    
//     setTimeout(()=>{
//         carta.style.color = "blueviolet"
//         carta1 = false;
//         carta2 = false;
//     }, 2000)
// }

// function comparacion () {
//     if(carta1 && carta2) {
//         if(carta1Value.innerHTML === carta2Value.innerHTML) {
//             carta1Value.style.backgroundColor = "green";
//             carta2Value.style.backgroundColor = "green";
//             parejasDescubiertas ++;
//             document.getElementById('puntaje').innerHTML  = parejasDescubiertas;
//         }
//     }
// }
// let aleatorio = Math.floor(Math.random()* 3)
// const dataAleatorio = [[
//     {
//         "premio": 200000,
//         "pregunta": "cual es un tag conocido de HTML?",
//         "OA": "g",
//         "OB": "s",
//         "OC": "a",
//         "OD": "5",
//         "R": "OC"
//     },{
//         "premio": 400000,
//         "pregunta": "cual es un TIPO DE DATO DE JS?",
//         "OA": "object",
//         "OB": "array",
//         "OC": "newman",
//         "OD": "map",
//         "R": "OA"
//     },{},{},{},{},{},{}
// ],[{},{},{},{},{},{}],[{},{},{},{},{},{}]];

// const data = dataAleatorio[0]
// var posicion = 0;
// var seleccionOpcion = ""

// function llenado(posicion) {
//     let a = document.getElementById("OA")
//     a.innerHTML = data[posicion].OA;
//     let b = document.getElementById("OB")
//     b.innerHTML = data[posicion].OB;
//     let c = document.getElementById("OC")
//     c.innerHTML = data[posicion].OC;
//     let d = document.getElementById("OD")
//     d.innerHTML = data[posicion].OD;
//     let pregunta = document.getElementById("pregunta");
//     pregunta.innerHTML = data[posicion].pregunta;
// }

// function seleccion(opcion) {
//     let caja = document.getElementById(opcion)
//     caja.style.backgroundColor = "violet"
//     seleccionOpcion = opcion;
// }

// function siguiente() {
//     if(data[posicion].R === seleccionOpcion) {
//         document.getElementById("premio").innerHTML = data[posicion].premio
//         posicion ++
//         llenado(posicion);
//         reset()
//     } else {
//         alert("Perdiste lo siento");
//     }
// }

// function reset() {
//     let a = document.getElementById("OA")
//     a.style.backgroundColor = "black";
//     let b = document.getElementById("OB")
//     b.style.backgroundColor = "black";
//     let c = document.getElementById("OC")
//     c.style.backgroundColor = "black";
//     let d = document.getElementById("OD")
//     d.style.backgroundColor = "black";
//     seleccionOpcion = "";
// }

// llenado(0);


function controlRaqueta(event) {
    console.log(event)
    const raqueta = document.querySelector(".raqueta");
    if(event.key === "ArrowRight") {
        console.log("Si oprimo flecha derecha");
        const dimension =  parseInt(getComputedStyle(raqueta).left.replace("px","")) + 10;
        console.log(dimension);
        raqueta.style.left = dimension + "px";
    }
    if(event.key === "ArrowLeft") {
        console.log("Si oprimo flecha derecha");
        const dimension =  parseInt(getComputedStyle(raqueta).left.replace("px","")) - 10;
        console.log(dimension);
        raqueta.style.left = dimension + "px";
    }
}