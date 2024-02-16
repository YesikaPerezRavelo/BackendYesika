//Se creará una instancia de la clase “ProductManager”

class ProductManager {
  constructor() {
    this.products = [];
  }

  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  //Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

  getProducts() {
    return this.products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    // Verificar si el código ya existe
    const codeExists = this.products.some((product) => product.code === code);

    if (codeExists) {
      throw new Error("Código de producto repetido");
    }

    // Se llamará al método “addProduct” con los campos: title: “producto prueba” description:”Este es un producto prueba” price:200, thumbnail:”Sin imagen”code:”abc123”,stock:25

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

// Ejemplo de uso:
const manager = new ProductManager();
console.log(manager.getProducts()); // []

const newProduct = manager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

console.log(manager.getProducts()); // [newProduct]

// Intentar agregar producto con el mismo código
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

// Obtener producto por ID
const productId = newProduct.id;
console.log(manager.getProductById(productId)); // newProduct
