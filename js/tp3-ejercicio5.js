/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas. */

function informacionTexto(cadena){
    if(isNaN(cadena)){
        const cadenaMayuscula = cadena.toUpperCase();
        const cadenaMinuscula = cadena.toLowerCase();
        
        if(cadena === cadenaMayuscula){
            document.writeln(`<li>'${cadena}' está formada sólo por mayúsculas.</li>`);
        }
        else if(cadena === cadenaMinuscula){
            document.writeln(`<li>'${cadena}' está formada sólo por minúsculas.</li>`);
        }
        else{
            document.writeln(`<li>'${cadena}' está formada por mayúsculas y minúsculas.</li>`);
        }
    }else{
        document.writeln(`<li>Error. Ingresa una palabra u oración.</li>`);
    }
}

const cadenaMayuscula = "LUCIANA RUIZ";
const cadenaMinuscula = "luciana ruiz";
const cadenaMayusculaMinuscula = "Luciana Ruiz";

informacionTexto(cadenaMayuscula);
informacionTexto(cadenaMinuscula);
informacionTexto(cadenaMayusculaMinuscula);
informacionTexto(9);

