/**
 * SENTENCIA break vs continue
 * break => interrumpir todas las iteraciones que quedan
 * por darse en una estructura repetitiva
 */

let numeros = [3, 545, 3, -5, 34, 90, 2, 90, 0];
/**
 * Ejercicio: imprimir los números positivos hasta encontrar un número
 * negativo
 */

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 0) {
    console.log(numeros[i]);
  } else {
    break;
  }
}

