function convertirANumero(valor) {
    try {
        let numero = Number(valor);
        if (isNaN(numero)) {
            throw new Error("El valor no se puede convertir a número.");
        }
        return numero;
    } catch (error) {
        return error.message;
    }
}

console.log(convertirANumero("117")); // 117
console.log(convertirANumero("xyz")); // "El valor no se puede convertir a número."
console.log(convertirANumero("456.78")); // 456.78
console.log(convertirANumero(true)); // 1
console.log(convertirANumero(null)); // 0
//------------------------------------------------------------------------------
function procesarCadena(cadena) {
    try {
        if (cadena == "") {
            throw new Error(" cadena de texto vacía.");
        }
        
        return "Cadena procesada: " + cadena;
    } catch (error) {
        return error.message;
    }
}


console.log(procesarCadena("Nada es Verdad todo esta permitido!")); 
//console.log(procesarCadena("")); 

