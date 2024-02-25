const fs = require("fs");

class ProductsManager {
  constructor() {
    this.path = "products.json";
    try {
      const data = fs.readFileSync(this.path, "utf-8");
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
    this.id = 0;
  }

  data() {
    console.log(this.products);
  }

  async addProduct(title, description, price, thumbnail, code, stock) {
    const maxId = this.products.reduce(
      (max, product) => (product.id > max ? product.id : max),
      0
    );

    const newId = maxId + 1;

    const addNewProduct = {
      id: newId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(addNewProduct);
    console.log("Product agregado:", addNewProduct);

    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products, null, "\t")
    );
  }

  async getProducts() {
    try {
      const readFile = await fs.promises.readFile(this.path, "utf-8");
      const productsObj = JSON.parse(readFile);
      return productsObj;
    } catch (error) {
      console.error("Error al obtener productos", error);
      return;
    }
  }

  async getProductById(id) {
    try {
      const productId = parseInt(id);
      const product = this.products.find((product) => product.id === productId);
      if (product) {
        console.log(`El producto con el id ${id} fue encontrado:`, product);
        return product;
      } else {
        console.error(`El producto con id ${id} no fue encontrado`);
        return null;
      }
    } catch (error) {
      console.error("Error buscando producto", error);
      return null;
    }
  }

  async deleteProduct(id) {
    const deleteForId = this.products.findIndex((product) => product.id === id);
    if (deleteForId === -1) {
      console.error("Producto no encontrado");
      return;
    }
    this.products.splice(deleteForId, 1);

    await new Promise((resolve) => setTimeout(resolve, 100));

    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.products, null, "\t")
    );
    console.log(`El producto con el id ${id} fue borrado correctamente`);
  }

  async updateProduct(
    id,
    { title, description, price, thumbnail, code, stock }
  ) {
    const findId = this.products.findIndex((product) => product.id === id);
    if (findId === -1) return console.error("No encontrado");

    const updateProduct = {
      ...this.products[findId],
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products[findId] = updateProduct;

    try {
      setTimeout(async () => {
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(this.products, null, "\t")
        );
        console.log("El producto actualizado correctamente:", updateProduct);
      }, 200);
    } catch (error) {
      console.error("Error escribiendo archivo", error);
    }
  }
}

const products = new ProductsManager();
products.data();

products.addProduct(
  "Titulo4",
  "Description4",
  "400",
  "Imagen4",
  "abc124",
  "40"
);

products.addProduct(
  "Titulo5",
  "Description5",
  "500",
  "Imagen5",
  "abc125",
  "50"
);

products.getProducts();

products.getProductById(2);
products.getProductById(6);

products.deleteProduct(5);

products.updateProduct(4, {
  title: "Producto4",
  description: "Descripcion4 ACTUALIZADA",
  price: 800,
  thumbnail: "Imagen4",
  code: "abc124",
  stock: 30,
});
