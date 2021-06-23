import React from 'react';

const Productos = ({ productos, categoriaSeleccionada }) => {
	// hacer una copia de los productos
	// si la categoriaSeleccionada existe (es diferente de null)
	// filtrar la copia de los productos y mostrar dicha copia

	return (
		<div className="row">
			{productos.map((objProducto) => {
				return (
					<div className="col-md-3" key={objProducto.id}>
						<div className="card">
							<img src={objProducto.imagen} alt="" className="card-img-top" />
							<div className="card-body">
								<h4 className="card-title">{objProducto.nombre}</h4>
								<p className="card-text">{objProducto.descripcion}</p>
								<p className="card-text">{objProducto.precio}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Productos;
