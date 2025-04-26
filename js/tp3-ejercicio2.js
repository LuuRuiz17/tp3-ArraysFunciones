/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un 
arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes 
acciones:

1. Mostrar la longitud del arreglo.
2. Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
3. Añade en última posición la ciudad de París.
4. Escribe por pantalla el elemento que ocupa la segunda posición.
5. Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Input: [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’,
‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
Output: El arreglo de ciudades tiene 10 elementos:
- Elemento primer posición: Nueva York, Estados Unidos.
*/

const ciudades = [];

function mostrarArray(titulo) {
    document.writeln(`<h5 class="subtitulo"><b>🚀 ${titulo}</b></h5>`);
    if (ciudades.length === 0) {
        return;
    }
    document.writeln(`<ul>`)
    for (let i = 0; i < ciudades.length; i++) {
        document.writeln(`<li class = "ms-3">ciudades[${i + 1}]: ${ciudades[i]}</li>`);
    }
    document.writeln(`</ul>`);
}

document.writeln(`<h2 class="titulo">Array de Ciudades</h2>`);

do {
    const ciudad = prompt(`Ingresa el nombre de una ciudad: `);
    ciudades.push(ciudad);
} while (confirm("¿Deseas agregar otra ciudad?"));

document.writeln(`<b><h5 class= "subtitulo">🚀 Longitud del Arreglo de Ciudades:</b</h5> ${ciudades.length}<br>`);

if (!ciudades[0]) {
    document.writeln("<h5 class = 'subtitulo'>🚀 El array no tiene elementos.</h5>");
} else {
    document.writeln(`<h5 class= "subtitulo">🚀 Elemento de la primera posición del array: ${ciudades[0]}</h5>`);
}

if (!ciudades[2]) {
    document.writeln("<h5 class = 'subtitulo'>🚀 El array no incluye un elemento que ocupe la tercera posición.</h5>");
}
else {
    document.writeln(`<h5 class= "subtitulo">🚀 Elemento de la tercera posición del array: ${ciudades[2]}</h5>`);
}

if (!ciudades[ciudades.length - 1]) {
    document.writeln("<h5 class = 'subtitulo'>🚀 El array no incluye un elemento que ocupe la última posición.</h5>");
}
else {
    document.writeln(`<h5 class= "subtitulo">🚀 Elemento de la última posición del array: ${ciudades[ciudades.length - 1]}</h5>`);
}

ciudades.push("'Paris, Francia'");
mostrarArray(`Array con la ciudad "Paris" agregada al final: `);

if (!ciudades[1]) {
    document.writeln("<h5 class = 'subtitulo'>🚀 El array no incluye un elemento que ocupe la segunda posición.</h5>");
} else {
    document.writeln(`<h5 class= "subtitulo">🚀 Elemento de la segunda posición del array: ${ciudades[1]}</h5>`);
}

if (ciudades[1]) {
    ciudades[1] = "Barcelona";
}
mostrarArray("Array con la segunda posición reemplazada por Barcelona");