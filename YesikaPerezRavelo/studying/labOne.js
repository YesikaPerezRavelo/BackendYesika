//Definir una funcion "mostrarLista"
function mostrarLista(lista) {
  if (lista.length > 0) {
    lista.forEach((element) => {
      console.log(element);
    });
    console.log(`La lista tiene ${lista.length} elementos`); ///Muestra uno por uno y cuenta todos los elementos
    console.log("La lista tiene " + lista.length + " elementos"); ///Otra forma de hacerlo
    return;
  }

  console.log("Lista vacia"); //Si la lista esta vacia
}

mostrarLista([]);
mostrarLista(["Hola", "Mundo", "Como", "Estas"]);
