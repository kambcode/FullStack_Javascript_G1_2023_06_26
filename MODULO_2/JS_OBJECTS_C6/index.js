//console.log("Hola mi primer ejecucion");
/// Loops - ciclos
// for
// let numeros = [2, 7, 10, 8, 5, 3, 2, 7, 10, 8, 5, 3];
// let conteoPares = 0;
// let conteoImpares = 0;

// for (let index=0; index < numeros.length; index++) {
//     //console.log(numeros[index]);
//     if(numeros[index] % 2 === 0) {
//         // par
//         //conteoPares = conteoPares + 1;
//         conteoPares ++;
//     } else {
//         // impar
//         conteoImpares++;
//     }
// }
// console.log("Tengo ", conteoPares, " numeros pares");
// console.log("Tengo ", conteoImpares, " numeros impares");

// let servidor = "<meta charset='UTF-8'><meta name='description' content='Free Web tutorials'><meta name='keywords' content='HTML, CSS, JavaScript, React, Git, SASS, NODE.JS'><meta name='author' content='John Doe'><meta name='viewport' content='width=device-width, initial-scale=1.0'>"
// let arreglo = servidor.split("keywords")
// let content = arreglo[1].split(">")
// let lista = content[0].split("content=")
// let palabras = lista[1];
// let palabrasArray = palabras.replaceAll("'","").split(", ")
// console.log(palabrasArray);


// let estudiantes = ['Sultano', 'Perano', 'Pedrito','Mendano'];
// let i = 0;
// while(estudiantes[i] != 'Mendano'){
//     i ++;
// }
// console.log(i)
// let compraAlcohol = false;
// let edadHijoRoberto = 10;
// //
// while (!compraAlcohol) {
//     edadHijoRoberto ++;
//     console.log("Edad hijo roberto", edadHijoRoberto);
//     if(edadHijoRoberto >= 18) {
//         //compraAlcohol = true;
//         console.log("Compra alcohol aprovada");
//     } else {
//         console.log("Compra alcohol denegada");
//     }
// }

// for of
// const escuderias = ["Mercedes", "ReBull", "Ferrari", "AstonMartin"];

// for (const escuderia of escuderias) {
//     console.log(`|${escuderia}|`);
// }
// Obj

let alumno = {
    nombre: "Andres",
    apellido: "Lopez",
    edad: "20",
    setNombre: function (nombre) {
        this.nombre = nombre
    }, 
    getNombre: function () {
        return this.nombre
    }
};

// let alumnos = [alumno, alumno, alumno, alumno]

// alumno.setNombre("Roberto");

// console.log(alumno.getNombre());
// Loops in objects
for (const key in alumno) {
    console.log(`Property Name: ${key} | Property Value: ${alumno[key]}`);
}

Object.keys(alumno).map(key => console.log(key))
