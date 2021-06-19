import React, { useState } from 'react';
import Carrito from './components/Carrito';
import Producto from './components/Producto';

import { products } from './data/products';

const App = () => {
	const [canasta, setCanasta] = useState([]);

	return (
		<>
			<main className="container">
				<Carrito canasta={canasta} />

				<div className="row">
					<div className="col-12">
						<h1 className="display-5">Tienda app</h1>
					</div>
				</div>
				{/* Contenedore de los productos */}
				<div className="row">
					{products.map((objProducto, i) => {
						return <Producto prod={objProducto} key={i} />;
					})}
				</div>
			</main>
		</>
	);
};

export default App;
