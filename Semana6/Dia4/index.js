"use strict";

const URL = "https://60c29003917002001739d2f9.mockapi.io/api/v1";

const btnCrearCategoria = document.querySelector("#btnCrearCategoria");
const inputId = document.querySelector("#inputId");
const btnBuscar = document.querySelector("#btnBuscar");
const btnActualizar = document.querySelector("#btnActualizar");
const inputEliminar = document.querySelector("#inputEliminar");
const btnEliminar = document.querySelector("#btnEliminar");

//  ** GET /api/v1/categoria => Obtener todas las categorias con Async await
const getCategorias = async () => {
  const response = await axios.get(`${URL}/categoria`);
  console.log(response.data);
};

// ** POST /api/v1/categoria => Crear un categoria usando el metodo post
const storeCategoria = async () => {
  const data = {
    nombre: "Muebles",
    sku: "MUEBLES",
  };
  //** Nuestros POST recive 2 parametors 1 es la URL y el segundo es la data */
  //** const post(url, data) => { }
  const response = await axios.post(`${URL}/categoria`, data);
  console.log(response);
};

btnCrearCategoria.onclick = () => storeCategoria();

//** GET by ID */ /api/v1/categoria/:id
const getCategoriaById = async (id) => {
  // ** https://60c29003917002001739d2f9.mockapi.io/api/v1/categoria/100
  const response = await axios.get(`${URL}/categoria/${id}`);
  console.log(response.data);
};

btnBuscar.onclick = () => {
  //** Aca capturo el valor de mi input y se lo paso a mi funcion */
  const id = inputId.value;
  getCategoriaById(id);
};

btnActualizar.onclick = () => {
  // ** Voy a llamar la función updateCategoria
  updateCategoria(102);
};

//** PUT  /api/v1/categoria/:id = 102*/
const updateCategoria = async (id) => {
  const data = {
    nombre: "Licuadora Update",
    sku: "LICUADORA UPDATE",
  };
  const response = await axios.put(`${URL}/categoria/${id}`, data);
  console.log(response);
};

btnEliminar.onclick = () => {
  // ** voy a llamar deleteCategoria(id)
  const id = inputEliminar.value;
  deleteCategoria(id);
};

//** DELETE /api/v1/categoria/:id */
const deleteCategoria = async (id) => {
  // ** DELETE es el metodo predeterminado para eliminar objetos los
  // ** Recive el id del objeto que queremos eliminar
  // ** https://60c29003917002001739d2f9.mockapi.io/api/v1/categoria/100
  const response = await axios.delete(`${URL}/categoria/${id}`);
  console.log(response);
};

getCategorias();
