import React from 'react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
	const { platos, cargandoPlatos } = useSelector((state) => state.plato);

	return (
		<main className="container">
			<h1 className="display-4 mt-5">
				Dashboard CodiGo - <span className="text-danger">POS</span>
			</h1>
			<hr />
			<div className="row">
				<div className="col-12">AQUÍ IRÁ EL GRAFICO</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="card bg-dark text-white">
						<div className="card-body">
							<h4 className="card-title">Platos</h4>
							<h5 className="display-4 text-center">
								{cargandoPlatos ? (
									<div class="spinner-border text-light" role="status">
										<span class="sr-only">Loading...</span>
									</div>
								) : (
									platos.length
								)}
							</h5>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card bg-primary text-white">
						<div className="card-body">
							<h4 className="card-title">Mesas</h4>
							<h5 className="display-4 text-center">12</h5>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card bg-primary text-white">
						<div className="card-body">
							<h4 className="card-title">Usuarios</h4>
							<h5 className="display-4 text-center">12</h5>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AdminDashboard;
