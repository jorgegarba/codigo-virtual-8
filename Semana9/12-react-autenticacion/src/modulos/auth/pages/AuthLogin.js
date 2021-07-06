import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/authActions';

const AuthLogin = () => {
	const [formulario, setFormulario] = useState({
		correo: '',
		password: ''
	});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setFormulario({
			...formulario,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formulario);
		dispatch(login(formulario.correo, formulario.password));
	};

	return (
		<main className="container-fluid">
			<div className="row justify-content-center mt-5">
				<div className="col-md-6">
					<div className="card shadow">
						<div className="card-body">
							<form onSubmit={handleSubmit}>
								<div>
									<label htmlFor="" className="form-label">
										Email
									</label>
									<input
										type="email"
										className="form-control"
										value={formulario.correo}
										onChange={handleChange}
										name="correo"
									/>
								</div>
								<div>
									<label htmlFor="" className="form-label">
										Contraseña
									</label>
									<input
										type="password"
										className="form-control"
										value={formulario.password}
										onChange={handleChange}
										name="password"
									/>
								</div>
								<div className="mt-3 text-end">
									<button type="submit" className="btn btn-primary">
										Iniciar Sesión
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AuthLogin;
