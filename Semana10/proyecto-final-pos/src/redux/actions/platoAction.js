import { URL_BACKEND } from '../../environments/environments';
import {
	FIN_CARGANDO_PLATOS_POR_CATEGORIA,
	INICIO_CARGANDO_PLATOS_POR_CATEGORIA,
	SET_PLATOS_POR_CATEGORIA
} from '../types/types';
import axios from 'axios';

const setCargandoPlatosPorCategoria = () => {
	return {
		type: INICIO_CARGANDO_PLATOS_POR_CATEGORIA
	};
};

const setFinCargandoPlatosPorCategoria = () => {
	return {
		type: FIN_CARGANDO_PLATOS_POR_CATEGORIA
	};
};

export const getPlatosPorCategoriaId = (categoriaId) => {
	return async (dispatch) => {
		dispatch(setCargandoPlatosPorCategoria());

		const endpoint = `${URL_BACKEND}/categoria/${categoriaId}/platos`;
		const response = await axios.get(endpoint);
		dispatch({
			type: SET_PLATOS_POR_CATEGORIA,
			payload: response.data.content.Platos
		});

		dispatch(setFinCargandoPlatosPorCategoria());
	};
};
