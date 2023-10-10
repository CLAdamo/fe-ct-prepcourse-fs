/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arregloPadre = [];
   for (const key in objeto) {
     let arregloHijo = [];
     arregloHijo.push(key, objeto[key]);
     arregloPadre.push(arregloHijo);
   }
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   let newString = string.split('');
   for (let i = 0; i < newString.length; i++) {
       let repeticion = 0;
       newString.forEach(element => {
           if (newString[i] === element){
               repeticion++;
           }; 
       });
       objeto[newString[i]] = repeticion;
    }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let newString = string.split('');
   let stringOrdenado = [];
   for (i = 0; i < newString.length; i++){
      if (newString[i] === newString[i].toUpperCase()){
         stringOrdenado.push(newString[i]);
      }
   }
   for (i = 0; i < newString.length; i++){
      if (newString[i] !== newString[i].toUpperCase()){
         stringOrdenado.push(newString[i]);
      }
   }
   string = stringOrdenado.join('');
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

let newString = frase.split(' ');
let stringInvertido = [];
for (let i = 0; i < newString.length; i++){
    let newStringInvertido = 0;
    newStringInvertido = newString[i].split('').reverse().join('');
    stringInvertido.push(newStringInvertido);
}
return stringInvertido.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let capicua = numero.toString();
   if (numero == capicua.split('').reverse().join('')){
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let newString = [];
   for (i = 0; i < string.length; i++){
      if (string[i] != 'a' && string[i] != 'b' && string[i] != 'c'){
         newString.push(string[i]);
      }
   }
   let stringFinal = newString.join('');
   return stringFinal;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let newString = arrayOfStrings.sort((a, b) => a.length - b.length)
   return newString;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let nuevoArreglo = [];
   for (i = 0; i < array1.length; i++){
      array2.forEach(element => {
         if (array1[i] === element){
            nuevoArreglo.push(array1[i]);
         };
      });
   }
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
