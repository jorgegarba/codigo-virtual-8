import React from 'react';
import Footer from './Footer';
import Receta from './Receta';
import Header from './Header';

const App = () => {
	let titulo = <h1>Recetas</h1>;

	return (
		<div>
			<Header texto="El logo de la app" fecha="17/06/2021" />
			<hr />
			<main>
				{titulo}
				<Receta />
				<hr />
				<Receta />
			</main>
			<Footer />
		</div>
	);
};

export default App;
