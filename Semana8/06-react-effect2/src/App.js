import React, { useEffect, useState } from 'react';
import Categorias from './components/Categorias';
import Header from './components/Header';
import Productos from './components/Productos';

import { getCategorias } from './services/categorias';
import { getProductos } from './services/productos';
const App = () => {
	const [categorias, setCategorias] = useState([]);
	const [productos, setProductos] = useState([]);
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

	const seleccionarCategoria = (id) => {
		setCategoriaSeleccionada(id);
	};

	useEffect(() => {
		getCategorias().then((rpta) => {
			getProductos().then((rpta2) => {
				setCategorias(rpta.data);
				setProductos(rpta2.data);
			});
		});
		// const traerTodo = async () => {
		// 	let rpta1 = await getCategorias();
		// 	let rpta2 = await getProductos();
		// 	setCategorias(rpta1.data);
		// 	setProductos(rpta2.data);
		// };
		// traerTodo();
	}, []);

	return (
		<>
			<Header />
			<main className="container">
				<div className="row">
					<div className="col-md-3">
						<Categorias
							categorias={categorias}
							seleccionarCategoria={seleccionarCategoria}
						/>
					</div>
					<div className="col-md-9">
						<Productos
							productos={productos}
							categoriaSeleccionada={categoriaSeleccionada}
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default App;
