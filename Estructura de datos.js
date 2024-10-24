let productos = ["Manzanas", "Leche", "Pan", "Huevos"];
console.log("Productos iniciales:", productos);

productos.push("Queso", "Cereal");
console.log("Lista con productos adicionales:", productos);

productos.pop();
console.log("Lista después de eliminar el último producto:", productos);

console.log("Lista de productos:");
productos.forEach(producto => console.log("- " + producto));
//---------------------------------------------------------------

let estudiante = {
    nombre: "Anya",
    edad: 22,
    carrera: "Ingeniería en Control y autimatización",
    promedio: 9.5
};

console.log("Información del estudiante:", estudiante);

estudiante.semestre = "8° semestre";
estudiante.universidad = "Universidad Rosario Castellanos";

console.log("Información actualizada del estudiante:", estudiante);

let claves = Object.keys(estudiante);
let valores = Object.values(estudiante);

console.log("Claves del  estudiante:", claves);
console.log("Valores del  estudiante:", valores);
