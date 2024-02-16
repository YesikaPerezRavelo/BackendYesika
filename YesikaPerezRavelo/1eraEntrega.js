//Se creará una instancia de la clase “ProductManager”
//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

class ProductManager {
  constructor() {
    this.products = [];
  }

  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  getProducts() {
    return this.products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    // Verificar si el código ya existe
    const existingProduct = this.products.find(
      (product) => product.code === code
    );

    if (existingProduct) {
      throw new Error("Código de producto repetido");
    }

    const id = this.generateId();
    const newProduct = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);

    return newProduct;
  }

  getProductById(productId) {
    const product = this.products.find((product) => product.id === productId);

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    return product;
  }
}

// Crear instancia de ProductManager
const manager = new ProductManager();

// Obtener productos iniciales (debería ser un arreglo vacío)
console.log(manager.getProducts()); // []

// Agregar un nuevo producto
const newProduct = manager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

// Obtener productos después de agregar (debería incluir el nuevo producto)
console.log(manager.getProducts()); // [newProduct]

// Intentar agregar un producto con el mismo código (debería arrojar un error)
try {
  manager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
} catch (error) {
  console.error(error.message); // Código de producto repetido
}

// Obtener un producto por su ID (debería devolver el nuevo producto)
const productId = newProduct.id;
console.log(manager.getProductById(productId)); // newProduct
