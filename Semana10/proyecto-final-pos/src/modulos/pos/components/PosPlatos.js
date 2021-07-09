import React, { useEffect } from 'react';
import PosPlato from './PosPlato';
import { useSelector, useDispatch } from 'react-redux';
import { getPlatosPorCategoriaId } from '../../../redux/actions/platoAction';

const PosPlatos = () => {
	const { idCategoriaSeleccionada } = useSelector((state) => state.categoria);

	// consuman la lista de platos que están en el estado global de la app

	const dispatch = useDispatch();

	// useEffect(() => {
		if (idCategoriaSeleccionada !== -1) {
			dispatch(getPlatosPorCategoriaId(idCategoriaSeleccionada));
		}
	// }, [idCategoriaSeleccionada]);

	return (
		<div className="carta">
			<h3>
				Lista de Platos Categoria: &nbsp;{' '}
				<span className="color-secundario">BEBIDAS</span>
			</h3>

			<div className="carta__platos">
				<PosPlato />
				<PosPlato />
				<PosPlato />
				<PosPlato />
				<PosPlato />
			</div>
		</div>
	);
};

export default PosPlatos;
