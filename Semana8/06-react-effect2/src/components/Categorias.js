import React from 'react';

const Categorias = ({ categorias, seleccionarCategoria }) => {
	return (
		<ul className="list-group">
			{categorias.map((cat) => {
				return (
					<li
						className="list-group-item"
						key={cat.id}
						onClick={() => {
							seleccionarCategoria(cat.id);
						}}
					>
						{cat.nombre}
					</li>
				);
			})}
		</ul>
	);
};

export default Categorias;
