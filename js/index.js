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
    
        const newProduct = {
            ...product,
            lugar: nuevoLanzamiento,
            fecha: nuevaFecha,
            id: this.products[this.products.length - 1].id + 1,
            stock: [],
        };
    
        this.products.push(newProduct);
        }
    }
    
    class Product {
        constructor(
        nombre,
        lugar,
        precio,
        capacidad = 50,
        fecha = new Date().toLocaleDateString()
        ) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.precio = precio;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.stock = [];
        }
    }
    
    //Pruebas
    const manejadorProducts = new ProductManager();
    
    console.log(
        "agregando Producto coder 1 para Argentina, precio: 200, para 50 stock"
    );
    manejadorProducts.agregarProduct(
        new Product("Producto coder 1", "Argentina", 200, 50)
    );
    
    console.log(
        "agregando al Producto con id 1 el stock del elemento con id 2"
    );
    manejadorProducts.agregarElemento(1, 2);
    
    console.log(
        "creando una copia vacía del producto 1 pero en mexico y para el 2024"
    );
    manejadorProducts.ponerProductoEnMuestra(1, "Mexico", "30/11/2024");
    
    console.log(manejadorProducts.getProducts());