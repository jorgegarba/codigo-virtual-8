import { getCategorias, getVehiculos } from './servicios.js';
import { create, gebid } from './utils.js';

const selectCategorias = gebid('selectCategorias');
const contenedorVehiculos = gebid('contenedorVehiculos');

const llenarVehiculos = (vehiculos) => {
	vehiculos.forEach((objVehiculo) => {
		const colMd4 = create('div');
		colMd4.classList.add('col-md-4');

		const card = create('div');
		card.classList.add('card');

		const imagen = create('img');
		imagen.classList.add('card-img-top');
		imagen.src = objVehiculo.foto;

		const cardBody = create('div');
		cardBody.classList.add('card-body');

		const titulo = create('h4');
		titulo.classList.add('card-title');
		titulo.innerText = objVehiculo.placa;

		const pColor = create('p');
		pColor.classList.add('card-text');
		pColor.innerHTML = `<strong>Color: </strong> ${objVehiculo.color}`;

		const pCategoria = create('p');
		pCategoria.classList.add('card-text');
		pCategoria.innerHTML = `<strong>Categoria: </strong> ${objVehiculo.categoria_id}`;

		const btnAccion = create('button');
		btnAccion.classList.add('btn', 'btn-primary');
		btnAccion.innerText = 'Click';

		colMd4.append(card);
		card.append(imagen);
		card.append(cardBody);
		cardBody.append(titulo);
		cardBody.append(pColor);
		cardBody.append(pCategoria);
		cardBody.append(btnAccion);

		contenedorVehiculos.appendChild(colMd4 	);
	});
};

const llenarCategorias = (categorias) => {
	let options = '';
	categorias.forEach((objCategoria) => {
		options += `<option value="${objCategoria.id}">${objCategoria.nombre}</option>`;
	});
	selectCategorias.innerHTML = options;
};

getCategorias().then((categorias) => {
	llenarCategorias(categorias);
});

getVehiculos().then((vehiculos) => {
	llenarVehiculos(vehiculos);
});
