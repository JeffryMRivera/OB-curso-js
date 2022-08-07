// //
// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// //
// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     })
//   );
// }

/* Generales
    // Convertir a string
    toString()
    // Obtener tipo de una variable
    typeof x
*/

/* String
    // Cantidad de caracteres
    length;

    // obtener una porcion del string
    slice()
    substring()

    //expresiones regulares regexr.com
    /palabra/g
    // buscar todas las coincidencias en un string
    match(/palabra/g);
    // buscar una palabra en el string
    includes();
    // El texto inicia o termina con
    startsWith()
    endsWith()

    // reemplazar texto
    replace() 

    // concatenar textos
    concat()

    // Convertir a mayusculas y minusculas
    toLowercase();
    toUppercase();

    //limpiar inicio y fin del string
    trim();
    trimStart();
    trimEnd();

    // Obtener una posición de un caracter o un string
    charAt();
    indexOf();
    lastIndexOf();
*/

/* Numeros
    // Obtener valores reales con decimales
    Math.round((0.1 + 0.2)*100/100)
 
    // Convertir a string limitando el número de decimales en x
    toFixed(caracteres)
    
    // Convierte a string Limitando el número de cifras significativas
    toPresicion()

    // Obtener valores númericos a partir de literales
    valueOf()

    // NaN - Not a Number - Infinity
    let a = new Number("adios")
    isNaN(a)

    // Convertir a entero
    parseInt()
    // Convertir a decimal con base
    parseInt('0x3a5b7', 16)
    // Convertir a Decimal
    parseFloat()

    Valores minimos y maximos en js
    let minima_presicion = Number.EPSILON;
    let minimo_valor = Number.MIN_VALUE;
    let maximo_valor = Number.MAX_VALUE;
    
     


*/

/* Arrays

    // Introducir valores al final de un array
    push()

    // Introducir valores al inicio de un array
    unshift()

    // Eliminar valores al final de un array
    pop()

    // Introducir valores al inicio de un array
    shift()

    // Introducir, eliminar o agregar valores al array
    // Eliminar
    splice(posición, cantidad)
    // Agregar
    splice(posición, 0, valores)
    // Modificar
    splice(posición, 1, valores)

    // Concatenar listas
    concat(lista)
    [...lista1, ...lista2]

    // Obtener una porcion de una lista a partir de otra
    slice(inicio, fin)

    // Recorrer una lista
    lista.forEach(valor => {})

    // Buscar un valor en una lista
    lista.find(valor => valor === 90)
    const { edad } = lista.find(obj => obj.edad === 90)

    // Metodos avanzados
    // Crear un array nuevo a partir de otro
    const array2 = lista.map((obj, indice) => obj.edad === 90)
    const array2 = lista.map((obj, indice) => `${obj.edad} 90`)
    
    // Crear un array a partir de otro
    lista.filter(obj => obj.edad > 30)
    lista.filter(obj => obj.nombre !== "Miguel")

    // Obtener un valor a partir de una lista (Suma de todas las edades)
    lista.reduce( (valorAcumulado, valorActual, indice, arregloOriginal) => valorAcumulado + valorActual )

    // Ordenar listas ASC
    lista.sort((a, b) => {
        if ( a < b ) return -1;
        else if ( a > b ) return +1;
        else return 0;
    })
    // Ordenar listas DESC
    lista.sort((a, b) => {
        if ( a < b ) return +1;
        else if ( a > b ) return -1;
        else return 0;
    })

    // Ordenar listas ASC
    lista.sort((a, b) => a - b)
    // Ordenar listas DESC
    lista.sort((a, b) => b - a)

    // Ordenar Objetos
    lista.sort((a, b)) => a.edad - b.edad)

    // Comparar todos los valores de una lista cumplan la condición
    lista.every(valor => typeof valor === "number")
    lista.every(valor => valor > 0)

    // Comparar 2 listas
    const com = ( array1, array2 ) => {
        if(array1.length !== array2.length) return false;
        const res = array1.every( ( valor, i ) => valor === array2[i] );
        return res;
    }

    // true si alguno de los elemetos de una lista cumplen x condición
    lista.some( valor => valor < 0)
    lista.some( valor => valor ===  9)
    lista.some( persona => persona.nombre === "Miguel")

    // Obtener una lista a partir de un objeto iterable
    const lista = Array.from(str);

    // Obtener indices de un array 
    const llaves = lista.keys()
    const arLlaves = Array.from(llaves)


    // Set -> Lista de valores unicos
    let lista = [1 ,2, 3,4, 4]
    let set = new Set(lista); 
    add(valor)
    delete(valor)
    clear()
    has("valor")
    .size
    .values() -> lista de valores iterables
*/

/* Objetos
    Duplicar objetos
    const obj2 = { ...obj }

    Comparar fechas
    > con date
    fecha1.getTime() == fecha2.getTime()

    getDate()
    getMonth()+1
    getFullYear()
    
    toLocaleDateString("es-CO")
*/

/* Librerias
    Winston 
    Axios
    React
    Vue
    three
    eslint
    chalk
    http-server
    Typeit
    Jquery
*/

/* Axios
const axios = require("axios");

axios
  .get("https://pokeapi.co/api/v2/pokemon/jeff")
  .then((response) => {
    console.log(response.data.abilities);
  }) // Success
  .catch((response) => {
    console.log(response);
  }) // Error
  .then(() => {}); // Finaly

  */

let fecha = new Date();
console.log(fecha.toLocaleDateString("es-CO"));
