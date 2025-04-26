/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función 
para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
Ejemplo: */

const base = parseInt(prompt(`Ingresa la base del rectángulo: `));
const altura = parseInt(prompt(`Ingresa la altura del rectángulo: `));

const calcularPerimetro = (base , altura) => {
    return (2 * (base + altura));
}

document.writeln(`<li>El perímetro del rectángulo de base ${base} y altura ${altura} es ${calcularPerimetro(base , altura)}.</li>`);