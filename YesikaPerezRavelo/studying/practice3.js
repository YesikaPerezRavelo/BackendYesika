class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  getProducts() {
    return this.products;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    // Check if the code already exists
    const codeExists = this.products.some((product) => product.code === code);

    if (codeExists) {
      throw new Error("Código de producto repetido");
    }

    const id = this.nextId++;

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

// Create an instance of ProductManager
const manager = new ProductManager();

// Get initial products (should be an empty array)
console.log(manager.getProducts()); // []

// Use a loop to add multiple products
for (let i = 0; i < 5; i++) {
  manager.addProduct({
    title: `Producto ${i + 1}`,
    description: `Este es el producto ${i + 1}`,
    price: 100 + i,
    thumbnail: `Imagen ${i + 1}`,
    code: `abc${i}`,
    stock: 10 + i,
  });
}

// Get products after adding (should include the new products with unique IDs)
console.log(manager.getProducts());
