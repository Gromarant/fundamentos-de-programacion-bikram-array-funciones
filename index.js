//Answer: Arrays
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//Answer: Funciones
function suma(a,b) {
  return a+b;
}

function potenciacion(a, b) {
  return a ** b;
}

function separarPalabras(string) {
  return string.split(' ');
}

function repetirString(str, num) {
  return str.repeat(num);
}

function esPrimo(num) {
  if (num === 0 || num === 1 || num === 4) {
    return false;
  };

	for (let i = 2; i < num / 2; i++) {
		if (num % i === 0) {
      return false
    };
	}
  return true;
}

//Answer: Mezclando arrays y funciones
function ordenarArray(arr) {
  return arr.sort()
}

function obtenerPares(arr) {
  return arr.filter( num => num % 2 === 0);
}

function pintarArray(arr) {
  const str = '[' + arr.join(', ') +']';
  return str;
}

function arrayMapi(arr, func) {
  return arr.map((elemento) => func(elemento));
}

function eliminarDuplicados(arr) {
  let newArr = new Set(arr);
  return [...newArr];
}

//Iteraciones 🏰 proyecto 🏰
//Answer: Arrays
const arrayNumerosNeg = [0, -1, -2, -3 , -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo'];
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal' ];
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Answer: Funciones
function multiplicacion(x, y) {
  return x * y;
}

function division (y, z) {
  return y / z;
}

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const arrayFunciones = [function suma(a, b) { return a + b}, function resta(a, b) { return a - b} , function multiplicacion(a, b) { return a * b}];

//Answer: Mezclando arrays y funciones
function ordenarArray2(arr) {
  return arr.sort().reverse()
}

function obtenerImpares(arr) {
  return arr.filter(num => num % 2 !== 0);
}

function sumarArray(arr) {
  return arr.reduce( (a, b) => a + b);
}

function multiplicarArray(arr) {
  return arr.reduce( (a, b) => a * b);
}