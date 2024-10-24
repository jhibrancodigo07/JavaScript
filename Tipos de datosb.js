let string = "Hello, World!";
console.log(string.charAt(7)); // "w"
//devuelve el caracter asignado comenzando por el 0//

let str = "Hello, World!";
let arr = str.split(", ");
console.log(arr); // ["Hello", "World!"]
// split  Divide una cadena en un array de subcadenas//

let str2 = "Hello, World!";
console.log(str.indexOf("World")); // 7
//Devuelve el índice de la primera aparición de una subcadena//

//--------------------------------------------------------------------------
//metodos de array

let arr2 = [1, 2, 3];
arr2.push(4);
console.log(arr2); // [1, 2, 3, 4]
//Añade uno o más elementos al final del array.

let arr3 = [1, 2, 3];
let last = arr.pop();
console.log(last); // 3
console.log(arr3); // [1, 2]
//Elimina el último elemento del array y lo devuelve

let arr4 = [1, 2, 3];
let str3 = arr.join("-");
console.log(str3); // "1-2-3"
//Une todos los elementos de un array en una cadena.
//--------------------------------------------------------------------------------
//metodos de objeto 

let obj = { nombre: "Erick", edad: 25 };
console.log(obj.hasOwnProperty("nombre")); // true
// devuelve un booleano 

let obj1 = { nombre: "Erick", edad: 25 };
console.log(Object.keys(obj1)); // ["nombre", "edad"]
//devuelve un array con los nombres de las propiedades enumerables de un objeto.

let obj2 = { nombre: "Erick", edad: 25 };
console.log(Object.values(obj2)); // ["Erick", 25]
//devuelve un array con los valores de las propiedades enumerables de un objeto.

//-------------------------------------------------------------------------------
let str6 = "Hola";
let str4 = "Cristiano Ronaldo";
let num1 = 7
let concatenado = str6 + " " + str4 + " " + num1; // "Hola Crsitiano Ronaldo 7"
console.log(concatenado); // siuuuuuu

//-----------------------------------------------------------------------------

let array = [1, 2, 3, 4, 5];
array.push(6);
array.push(7);
array[0] = 10;
console.log(array); // [10, 2, 3, 4, 5, 6, 7]

let objeto = {
nombre: "wero",
edad: 25,
ocupacion: "nini"
};
objeto.edad = 25;
objeto.ocupacion = "nini";
console.log(objeto); 


