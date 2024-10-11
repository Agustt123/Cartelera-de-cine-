const CarritoCompra = require('./index');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('El carrito se inicializa vacío', () => {
        expect(carrito.productos).toEqual([]);
    });

    test('Agregar un producto al carrito', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
        expect(carrito.productos.length).toBe(1);
    });

    test('Calcular el total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
        expect(carrito.calcularTotal()).toBe(30);
    });

    test('Aplicar descuento al total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
        expect(carrito.aplicarDescuento(10)).toBe(27); // 10% de descuento
    });

    test('Aplicar descuento al total de la compra (sin decimales)', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
        expect(carrito.aplicarDescuento(20)).toBe(24); // 20% de descuento
    });

    test('Aplicar descuento al total de la compra (descuento máximo)', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
        expect(carrito.aplicarDescuento(50)).toBe(15); // 50% de descuento (descuento máximo)
    });
});
