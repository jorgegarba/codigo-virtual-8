let linkGoogle = document.getElementById('linkGoogle');
let divCuadrado = document.getElementById('divCuadrado');
let selectPais = document.getElementById('selectPais');
let selectDpto = document.getElementById('selectDpto');
let inputNombre = document.getElementById('inputNombre');
let inputMensaje = document.getElementById('inputMensaje');
let letras = document.getElementById('letras');

let paises = [
	{ id: 12343, nombre: 'Perú' },
	{ id: 12, nombre: 'México' },
	{ id: 13, nombre: 'China' },
	{ id: 19, nombre: 'Argentina' }
];
let departamentos = [
	{ id: 22, nombre: 'Lima', idPais: 12343, stock: true },
	{ id: 23, nombre: 'Puno', idPais: 12343, stock: false },
	{ id: 24, nombre: 'Wujan', idPais: 13, stock: false },
	{ id: 25, nombre: 'Acapulco', idPais: 12, stock: true },
	{ id: 26, nombre: 'Fujian', idPais: 13, stock: false },
	{ id: 27, nombre: 'Buenos Aires', idPais: 19, stock: true },
	{ id: 28, nombre: 'Cordova', idPais: 19, stock: false },
	{ id: 29, nombre: 'Tulum', idPais: 12, stock: true }
];

(() => {
	console.log('asasdasdasdasdas');
	paises.forEach((pais) => {
		let option = document.createElement('option');
		option.value = pais.id;
		option.innerText = pais.nombre;
		selectPais.append(option);
	});
})();

linkGoogle.onclick = (e) => {
	e.preventDefault();
	console.log('Click en linkGoogle');
};

divCuadrado.onclick = (e) => {
	console.log('Click divcuadrado');
	console.log(e);
};

divCuadrado.onmouseover = (e) => {
	console.log(e);
	/**
	 * Se dispara el evento cuando el mouse ingresa al área que ocupa
	 * un elemento
	 */
};
divCuadrado.onmouseout = (e) => {
	console.log(e);
	/**
	 * Se dispara el evento cuando el mouse sale del área que ocupa
	 * un elemento
	 */
};

selectPais.onchange = (e) => {
	selectDpto.innerHTML = `<option value="0">-Seleccione Dpto-</option>`;
	/**
	 * Cada vez que cambie el valor del selectPais,
	 * se debe de cargar la lista de departamentos que le pertenecen
	 * Si el valor del país es 0, se deberá limpiar los options
	 * del selectDpto
	 */
	let idPais = +selectPais.value;
	departamentos.forEach((dpto) => {
		if (dpto.idPais === idPais) {
			let option = document.createElement('option');
			option.value = dpto.id;
			option.innerText = dpto.nombre;
			selectDpto.append(option);
		}
	});
};

inputNombre.onkeyup = (e) => {
	console.log(inputNombre.value);
};

inputMensaje.onkeyup = () => {
	let texto = inputMensaje.value;
	let caracteres = texto.length;
	if (caracteres > 50) {
		inputMensaje.value = inputMensaje.value.substr(0, 49);
	} else {
		letras.innerText = 50 - caracteres;
	}

	/**
	 * Cada vez que se escriba un nuevo caracter en el textarea
	 * deberá de restarse de la cuenta máxima de 50 caracteres.
	 * Cuando la cantidad total llegue a 50 caracteres, no deberán escribirse
	 * más caracteres
	 */
};
