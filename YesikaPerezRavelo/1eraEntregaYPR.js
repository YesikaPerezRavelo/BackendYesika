class ProductManager {
  constructor() {
    this.products = [];
    this.idCounter = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        throw new Error(`El código ${code} ya existe`);
      }
    }

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!Object.values(newProduct).every((value) => value !== undefined)) {
      throw new Error("Todos los campos son requeridos");
    }

    this.idCounter++;

    this.products.push({
      ...newProduct,
      id: this.idCounter,
    });
  }

  getProducts() {
    return this.products;
  }

  FoundIt(id) {
    return this.products.find((existingProduct) => existingProduct.id === id);
  }

  getProductById(id) {
    const product = this.FoundIt(id);

    if (!product) {
      throw new Error("No tenemos este servicio");
    }

    console.log(`Producto encontrado: ${JSON.stringify(product)}`);
    return product;
  }
}

const existingProduct = new ProductManager();

console.log(existingProduct.getProducts());

existingProduct.addProduct(
  "Producto de Prueba",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

existingProduct.addProduct(
  "Entrenamientos Personalizados",
  "Me dedico a enseñar todo tipo de técnicas de entrenamiento, yoga, elongación y relajación. Mi meta es que puedas disfrutar de cada una de ellas",
  10000,
  "https://drive.google.com/uc?export=view&id=1VjvOYHQoR7Qpv9mwdKIcw9dVipPcvNbx",
  "abc124",
  5
);

console.log(existingProduct.getProducts());

try {
  console.log(existingProduct.getProductById(1));
  console.log(existingProduct.getProductById(3));

  existingProduct.addProduct(
    "Producto de Prueba2",
    "Este es un producto de prueba2",
    200,
    "Sin imagen2",
    "abc123",
    25
  );
} catch (error) {
  console.error(error.message);
}

try {
  existingProduct.addProduct(
    "Producto de Prueba3",
    "Este es un producto de prueba3",
    200,
    "Sin imagen2"
  );
} catch (error) {
  console.error(error.message);
}

try {
  existingProduct.addProduct(
    "Producto de Prueba",
    "Este es un producto de prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );
} catch (error) {
  console.error(error.message);
}

const fs = require("fs");

const readPackageJson = async () => {
  let packageJson = await fs.promises.readFile("package.json", "utf-8");

  console.log(packageJson.name); //string

  packageJson = JSON.parse(packageJson);

  console.log(packageJson.name); //objeto
};

readPackageJson();
