/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener 
números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos 
dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

function numeroAletorio() {
    return Math.floor(Math.random() * 6 + 1);
}

const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

document.writeln(`<table class="tablaDados m-auto">`);
document.writeln(
    `<thead><th class="celdas">Dados</th><th class="celdas">Apariciones</th></thead>`
);

document.writeln(`<tbody>`);

for (let i = 0; i < 50; i++) {
    const dado1 = numeroAletorio();
    const dado2 = numeroAletorio();
    const suma = dado1 + dado2;
    console.log(`Suma: ${dado1} + ${dado2} = ${suma}`);
    apariciones[suma] = apariciones[suma] + 1;
}

document.writeln(`<ul>`);
for (let i = 2; i <= 12; i++) {
    if (apariciones[i] === 0) {
        document.writeln(`<li class="text-info">El número ${i} no salió en el lanzamiento.</li>`);
    } else if (apariciones[i] === 1) {
        document.writeln(`<li class="text-info">El número ${i} aparece ${apariciones[i]} vez.</li>`);
    } else {
        document.writeln(`<li class="text-info">El número ${i} aparece ${apariciones[i]} veces.</li>`);
    }
}
document.writeln(`</ul>`);

for (let i = 2; i <= 12; i++) {
    document.writeln(`<tr>`);
    document.writeln(`<td class="celdas">${i}</td>`);
    document.writeln(`<td class="celdas">${apariciones[i]}</td>`);
    document.writeln(`</tr>`);
}

document.writeln(`</tbody>`);
document.writeln(`</table>`);

