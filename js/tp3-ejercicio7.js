// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la 
// tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numero = parseInt(prompt("Ingresa un número: "));

document.writeln(`<table class="tablaDados m-auto">`);
document.writeln(
    `<thead><th class="celdas">Multiplicación 🤓</th><th class="celdas">Resultado 🤓</th></thead>`
);

document.writeln(`<tbody>`);

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    document.writeln(`<tr>`);
    document.writeln(`<td class="celdas">${numero} x ${i}</td>`);
    document.writeln(`<td class="celdas">${resultado}</td>`);
    document.writeln(`</tr>`);
}

document.writeln(`</tbody>`);
document.writeln(`</table>`);
