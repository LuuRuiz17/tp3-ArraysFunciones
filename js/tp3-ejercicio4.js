/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado
una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la 
función. */

function parImpar(num1) {
    if (!isNaN(num1)) {
        if (num1 % 2 === 0) {
            document.writeln(`El número ${num1} es par.`);
        } else {
            document.writeln(`El número ${num1} es impar.`);
        }
    } else {
        document.writeln(`No ingresaste un número.`);
    }
}

const numero = parseInt(prompt("Ingresa un número: "));

parImpar(numero);
