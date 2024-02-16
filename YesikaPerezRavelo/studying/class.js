class Person {
  constructor(name, lastName, age) {
    this.name = name; ///atributos
    this.lastName = lastName;
    this.age = age;
  }

  static species = "Humano"; ///atributo estatico

  getFullName() {
    ///template string
    return `${this.name} ${this.lastName}`;
  }

  getSpecies() {
    return `Aunque no lo creas soy un ${Person.species}`;
  }
}

const person_1 = new Person("Joaco", "Cejas", 29);
const person_2 = new Person("Jose", "Godoy", 33);

console.log(person_1.getFullName()); //para imprimirlo hay que hacerlo un console log
console.log(person_2.getFullName());

console.log(person_1.getSpecies());
console.log(person_2.getSpecies());
