import React from 'react';
import { useDispatch } from 'react-redux';

const Botones = () => {
	const dispatch = useDispatch();

	const agregar10lucas = () => {
		dispatch({
			type: 'AGREGAR_DINERO',
			payload: {
				monto: 10,
				mensaje: 'Agregando 10 luquitas'
			}
		});
	};

	const restar10lucas = () => {
		dispatch({
			type: 'RESTAR_DINERO',
			payload: {
				monto: 10,
				mensaje: 'Restando 10 lucrecias'
			}
		});
	};

	return (
		<div>
			<button onClick={agregar10lucas}>Agregar 10 lucas</button>
			<button onClick={restar10lucas}>Restar 10 lucas</button>
		</div>
	);
};

export default Botones;
