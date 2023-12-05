const fs = require("fs/promises");

class ProductManager {
    constructor(fileName) {
    this.fileName = fileName;
    this.productos = [];

    (async () => {
        try {
            if (await fs.access(fileName)) {
            let productos = await fs.readFile(fileName, "utf-8");
            this.productos = JSON.parse(productos);
            }
        } catch (error) {
            console.error("Error al leer el archivo:", error);
        }
        })();
    }

    async saveFile(data) {
        try {
        await fs.writeFile(this.fileName, JSON.stringify(data, null, 2));
        return true;
        } catch (error) {
        console.error("Error al escribir en el archivo:", error);
        return false;
        }
    }

    async addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios. Producto no agregado.");
        return;
    }

    
    if (this.productos.some(producto => producto.code === code)) {
        console.log("Ya existe un producto con el mismo código. Producto no agregado.");
        return;
    }

    const newProduct = {
        id: this.generateId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    };

    this.productos.push(newProduct);

    const respuesta = await this.saveFile(this.productos);

    if (respuesta) {
        console.log("Producto agregado correctamente");
        } else {
        console.log("Hubo un error al agregar el producto");
        }
    }

    getProducts() {
    return this.productos;
  }

    getProductById(id) {
    const product = this.productos.find(producto => producto.id === id);

    if (product) {
        return product;
        } else {
        console.log("Producto no encontrado");
        }
    }

    generateId() {
    const maxId = this.productos.reduce((max, producto) => (producto.id > max ? producto.id : max), 0);
    return maxId + 1;
    }
}

// Pruebas
const manager = new ProductManager("./Productos.json");

manager.addProduct("Funda1", "falsadescripcion1", 10, "/thumbnails/funda1.jpg", "F1", 30);
console.log(manager.getProducts());

manager.addProduct("Funda2", "falsadescripcion2", 15, "/thumbnails/funda2.jpg", "F2", 20);
console.log(manager.getProducts());

const productById = manager.getProductById(1);
console.log("Producto con ID 1:", productById);

const productNotFound = manager.getProductById(3);
