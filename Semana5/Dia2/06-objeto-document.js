/**
 * Una de las propiedades más importantes de window,
 * es el objeto "document".
 * que sirve para controlar los elementos internos del DOM
 * - crear etiquetas
 * - eliminar etiquetas
 * - cambiar clases
 * - cambiar estilos
 * - modifgicar textos
 * - capturar valores en los formularios,
 * - etc
 */

console.log(window.document);

/**
 * Propiedades del objeto document
 */

/**
 * document.getElementById("id_de_un_elemento_del_DOM")
 * Obtiene en una variable, la referencia a una etiqueta del DOM
 */

const titulo = document.getElementById('titulo');
console.log(titulo);

/**
 * document.getElementsByClassName("nombre_de_la_clase")
 * Obtiene en una "colección"(no Array) el conjunto de elementos
 * que comparten una misma clase
 */
