//Scopes

let i = 1;

function test() {
  if (true) {
    let j = 2;

    console.log(i);
    console.log(j);
  }
  console.log(i);
  //   console.log(j); genera un error

  //Note that trying to log the value of `j`
  //outside its block will result in an error since `j` is declared with `let` and is scoped to the block where it's defined.
}

test();

/////////////////////////////////////////////////Mutación en const

// re asignación de variable
//Const

// const a = 1;

// a = 0; no se puede reasignar el valor de una constante

const text = "Hola";
//text += "Mundo"; genera error (constante)
console.log(text);

const number = 1;
//number += 1; genera error (constante)
console.log(number);

///////////////////////////////////////////////////////////////////////////Mutación en arrays
////////array 0,1, 2, 4
const array = [1, 2, 3, 4];
console.log(array);

array[0] = 10; //ingresando a la primera posicion
console.log(array);

///Agrego elemento en array posicion 5
array.push(25);
console.log(array);

///Modificar un numero en el array
array[2] = "Hola mundo";
console.log(array);

///reasignación total va dar un error
///array ="String";

//Para tomar el ultimo elemento de un array
console.log("Ultimo elemento: ", array[array.lenght - 1]); ////me esta dando undefined

console.log("Finalizacion del codigo");
