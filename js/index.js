class ProductManager {
    #precioBaseGanancia = 0.15;
    
        constructor() {
        this.products = [];
        }
    
        getProducts() {
        return this.products;
        }
        
        
        agregarProducto(products) {
        products.precio += products.precio * this.#precioBaseGanancia;
    
        if (this.products.length === 0) {
            products.id = 1;
        } else {
            // Autoincremental
            Product.id = this.products[this.products.length - 1].id + 1;
        }
    
        this.products.push(product);
        }
    
        agregarElemento(idProduct, idElemento) {
        const product = this.products.find((product) => product.id === idProduct);
    
        if (!product) {
            return "No existe el producto";
        }
    
        if (!product.title.includes(idElemento)) {
            evento.title.push(idElemento);
        } else {
            return "El elemento ya existe";
        }
        }
    
        ponerProductoEnMuestra(idProduct, nuevoLanzamiento, nuevaFecha) {
        const product = this.products.find((product) => product.id === idProduct);
    
        if (!product) {
            return "El producto no existe";
        }
    
        const productoNuevo = {
            ...product,
            lugar: nuevoLanzamiento,
            fecha: nuevaFecha,
            id: this.products[this.products.length - 1].id + 1,
            stock: [],
        };
    
        this.products.push(productoNuevo);
        }
    }
    
    class Product {
        constructor(
        nombre,
        descripcion,
        precio,
        imagen,
        capacidad = 50,
        fecha = new Date().toLocaleDateString()
        ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.stock = [];
        }
    }
    
    //Pruebando
    const prueba = new ProductManager();
    
    console.log(
        "agregando Producto funda 1 para Argentina, precio: 2000, 50 stock"
    );
    prueba.agregarProduct(
        new Product("Producto funda 1", "Argentina", 2000, 50)
    );
    
    console.log(
        "agregando al Producto con id 1 el stock del elemento con id 2"
    );
    prueba.agregarElemento(1, 2);
    
    console.log(
        "creando una copia vacía del producto 1 para España y para el 2023"
    );
    prueba.ponerProductoEnMuestra(1, "España", "23/12/2023");
    
    console.log(prueba.getProducts());