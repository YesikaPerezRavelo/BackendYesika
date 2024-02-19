//- Se creará una instancia de la clase “ProductManager”

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

class ProductManager {
  constructor() {
    this.products = [];
    this.idCounter = 0;
  }

  //El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
  //The static keyword defines a static method or field for a class, or a static initialization block,this will help to increase the ids from 0 to ...as many products we have

  addProduct(title, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        throw new Error(`El codigo ${code} ya existe`);
        break;
      }
    }

    //required fields
    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (!Object.values(newProduct).every(undefined)) {
      //For new ID
      ProductManager.id++;

      this.products.push({
        ...newProduct,

        id: ProductManager.id,
      });
    } else {
      console.log("Todos los campos son requeridos");
    }
  }

  getProduct() {
    return this.products;
  }

  // FoundIt(id) {
  //   return this.products.find((existingProduct) => existingProduct.id === id);
  // }

  FoundIt(id) {
    return this.products.find((existingProduct) => existingProduct.id === id);
  }

  //Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

  //create FoundIt to simplify fuction
  //Make this into a conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.
  getProductById(id) {
    !this.FoundIt(id)
      ? console.log("No tenemos este servicio")
      : console.log(this.FoundIt(id));
  }
}

//Testing

const existingProduct = new ProductManager();

//-Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(existingProduct.getProduct());

//-Se llamará al método “addProduct” con los campos:
//title: “producto prueba”
//description:”Este es un producto prueba”
//price:200,
//thumbnail:”Sin imagen”
//code:”abc123”,
//stock:25

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
  "Me dedicó a enseñar todo tipo de técnicas de entrenamiento, yoga, elongación y relajación. Mi meta es que puedas disfrutar de cada una de ellas",
  10000,
  "https://drive.google.com/uc?export=view&id=1VjvOYHQoR7Qpv9mwdKIcw9dVipPcvNbx",
  "abc124",
  5
);

//check availability by Id
console.log(existingProduct.getProduct());

console.log(existingProduct.getProductById(1));

console.log(existingProduct.getProductById(3));

//Make an error on purpose because the code is the same as the first product
existingProduct.addProduct(
  "Producto de Prueba2",
  "Este es un producto de prueba2",
  200,
  "Sin imagen2",
  "abc123",
  25
);

//Make an error on purpose when the object doesn´t have all of the fields
existingProduct.addProduct(
  "Producto de Prueba3",
  "Este es un producto de prueba3",
  200,
  "Sin imagen2"
);
