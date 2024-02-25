import { promises as fs } from "fs";

class ProductManager {
  constructor() {
    this.patch = "./products.txt";
    this.products = [];
  }

  static id = 0;

  addProduct = async (title, description, price, thumbnail, code, stock) => {
    ProductManager.id++;
    let newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ProductManager.id,
    };

    // console.log(newProduct);

    this.products.push(newProduct);

    await fs.writeFile(this.patch, JSON.stringify(this.products));
  };

  productsReadFile = async () => {
    let responseObj = await fs.readFile(this.patch, "utf-8");
    return JSON.parse(responseObj);
  };

  getProducts = async () => {
    let responseReadFile = await this.productsReadFile();
    return console.log(responseReadFile);
  };

  getProductsById = async (id) => {
    let responseFilterId = await this.productsReadFile();
    if (!responseFilterId.find((product) => product.id === id)) {
      console.log("Producto no encontrado");
    } else {
      console.log(responseFilterId.find((product) => product.id === id));
    }
  };

  deleteProductsById = async (id) => {
    let responseFilterId = await this.productsReadFile();
    let productFilter = responseFilterId.filter(
      (products) => products.id != id
    );
    await fs.writeFile(this.patch, JSON.stringify(productFilter));
    console.log("Producto eliminado");
  };

  updateProducts = async ({ id, ...product }) => {
    await this.deleteProductsById(id);
    let lastProduct = await this.productsReadFile();

    let productModification = [{ ...product, id }, ...lastProduct];
    await fs.writeFile(this.patch, JSON.stringify(productModification));
  };
}

const products = new ProductManager();

// products.addProduct("Producto1", "Descripcion1", 200, "Imagen1", "abc123", 25);

// products.addProduct("Producto2", "Descripcion2", 100, "Imagen2", "abc124", 20);

// products.addProduct("Producto3", "Descripcion3", 300, "Imagen3", "abc125", 30);

// products.getProducts();

// products.getProductsById(4);

// products.deleteProductsById(2);

products.updateProducts({
  title: "Producto3",
  description: "Descripcion3",
  price: 800,
  thumbnail: "Imagen3",
  code: "abc125",
  stock: 30,
  id: 3,
});
