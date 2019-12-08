//  otra forma de hacer ciclos (o loops) es con WHILE
//  se va a ejecutar el código mientras la condición del while sea verdadera. cuando se falsa, el código se corta
//  yo también le tengo que decir cuándo cortar
//  los while no nos sirven para recorrer arrays
// let numero = 1;

// alert("Va a empezar el while")
// while (numero < 10) {
//     console.log("hola")
//     numero++
//     console.log(numero)
// }

// alert("Terminó el while")

// como podríamos haber resuleto el piedra, papel o tijera con un while:
//  while(puntajeJugador1 < 2 && puntajeJugador2 < 2 ) {

// if (jugador1 === "piedra" && jugador2 === "tijera") {
// alert("Ganó jugaor 1")
// puntajeJugador1++
// }
// }

const alumnasOnline = [
  ["Maria", "Abihaggle", 23],
  ["Noe", "Potrero", 32],
  [("Sol", "Alvarez", 26)]
];

// alta baja modificación
let accion = "";

//  a diferencia del for, con el while no le digo cuántas veces se tiene que ejecutar, ni estoy recorriendo un array que tiene una longitud definida.
// el while sigue hasta que el usuario escriba "SALIR"
while (accion.toUpperCase() !== "SALIR") {
  accion = prompt(
    "Por favor, indique qué acción desea tomar: AGREGAR, EDITAR, BORRAR, SALIR"
  );

  // para borrar todo un array entero
  if (accion.toUpperCase() === "BORRAR") {
    let usuarioABorrar = prompt("Indique qué usuario desea borrar");
    for (let i = 0; i < alumnasOnline.length; i++) {
      for (let j = 0; j < alumnasOnline[i].length; j++) {
        if (alumnasOnline[i][j] === usuarioABorrar) {
          //    para borrar todo un array uso el indice "i"
          alumnasOnline.splice(i, 1);
          alert("Hemos borrado al usuario identificado como" + usuarioABorrar);
        }
      }
    }
  }

  // para modificar un elemento del array adentro del array
  if (accion.toUpperCase() === "EDITAR") {
    let usuarioAEditar = prompt("Indique qué usuario desea editar");

    for (let i = 0; i < alumnasOnline.length; i++) {
      for (let j = 0; j < alumnasOnline[i].length; j++) {
        if (alumnasOnline[i][j] === usuarioAEditar) {
          let datoAModificar = prompt("¿Por qué dato lo querés modificar?");
          alumnasOnline[i][j] = datoAModificar;
        }
      }
    }
  }

  if (accion.toUpperCase() === "AGREGAR") {
    let nombreUsuarioAAgregar = prompt("Indique el nombre del usuario");
    let apellidoUsuarioAAgregar = prompt("Indique el apellido del usuario");
    let edadUsuarioAAgregar = prompt("Indique la edad del usuario");
    let usuarioAAgregar =
      nombreUsuarioAAgregar + "," + apellidoUsuarioAAgregar + "," + edadUsuarioAAgregar;
    alumnasOnline.push(usuarioAAgregar);
  }
  if (accion.toUpperCase() === "SALIR"){
    alert("¡Gracias por visitarnos!");
  }
console.log(alumnasOnline);
}



//  WHILE y FOR se pueden usar casi para lo mismo,
//  PARA RECORRER ARRAYS, SÓLO USAR FOR, NO WHILE
