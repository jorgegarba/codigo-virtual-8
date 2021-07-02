import React from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
	const { carrito } = useSelector((state) => state);

	return (
		<div className="row">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">
					<div class="row w-100">
						<div className="col text-end">
							<button className="btn btn-success">
								Carrito ({carrito.productos.length})
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
