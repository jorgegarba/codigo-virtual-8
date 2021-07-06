import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
	const { cargando, autenticado } = useSelector((state) => state.auth);

	if (cargando) {
		return <div>CARGANDO...</div>;
	} else {
		if (autenticado) {
			return <Route path={props.path} component={props.component} />;
		} else {
			return <Redirect to={'/'} />;
		}
	}
};

export default PrivateRoute;
