const estudiantes = [
    { nombre: "Sultano", nota: 3.0},
    { nombre: "Perano", nota: 2.9 },
    { nombre: "Mandano", nota: 3.7 },
    { nombre: "Mendano", nota: 3.9 },
    { nombre: "Multano", nota: 4.2 },
    { nombre: "Pepe", nota: 4.3 },
    { nombre: "Pedrito", nota: 4.7 },
    { nombre: "Ricardito", nota: 2.1 },
    { nombre: "Fulano", nota: 1.9 },
    { nombre: "Isabelita", nota: 5.0 },
    { nombre: "Laurita", nota: 4.0 },
];

//Hacer un filtro para todos los estudiantes que pasaron el curso >3.0

let pasantes = estudiantes.filter((objetoDeEstudiante) => objetoDeEstudiante.nota>3);

// let pasantesFor = [];
// for (let i = 0 ; i<estudiantes.length; i++) {
//     if(estudiantes[i].note > 3) {
//         pasantesFor.push(estudiantes[i])
//     }
// }

//console.log(estudiantes, pasantes);

//filtro para encontrar solo a "Ricardito"
let filtroRicardito = estudiantes.filter((objetoDeEstudiante) => objetoDeEstudiante.nombre === "Ricardito")


const amigos = [
        { nombre: "Sebas", profesion: "DJ" },
        { nombre: "Andrés", profesion: "Medico" },
        { nombre: "Pedrito", profesion: "Artista" },
        { nombre: "Cata", profesion: "Ingeniera" },
    ];
    
const hayMedico = amigos.some ((amigo) => amigo.profesion === "Medico");
    
console.log(hayMedico);

// reduce
const numeros = [2, 5, 7, 8, 3];

const sumaNumeros = numeros.reduce(
    (acumulador, valorActual) => acumulador + valorActual
);



////
// acumulador = 0 
// valorActual = 2
// acumulador = 2
// valorActual = 5
// acumulador = 7
// valorActual = 7
// acumulador = 14
// valorActual = 8
// acumulador = 22
// valorActual = 3
// acumulador = 25


console.log(sumaNumeros); // 25


//map

const miArreglo = [2, 5, 7, 1, 3, 4];

const nuevoArreglo = [];
for (let numero of miArreglo) {
    nuevoArreglo.push(numero * 2);
}

const nuevoArregloMap = miArreglo.map((numero) => numero*2)

console.log(nuevoArreglo, nuevoArregloMap ); // [ 4, 10, 14, 2, 6, 8 ]