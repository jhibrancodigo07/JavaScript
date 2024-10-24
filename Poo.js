class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    valorTotalInventario() {
        return this.precio * this.cantidad;
    }

    mostrarInformacion() {
        console.log(`Información del Producto:
Nombre: ${this.nombre}
Precio: $${this.precio}
Cantidad en inventario:${this.cantidad}
Valor total en inventario: $${this.valorTotalInventario()}
`);
    }
}

// Creación de objetos de productos
let producto1 = new Producto("Camisa", 300, 50);
let producto2 = new Producto("Pantalones", 350, 30);
let producto3 = new Producto("palyeras", 150, 20);
let producto4 = new Producto("tenis", 900, 100);

// Mostrar información de cada producto
producto1.mostrarInformacion();
producto2.mostrarInformacion();
producto3.mostrarInformacion();
producto4.mostrarInformacion();
