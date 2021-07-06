import { START_LOADING_LOGIN } from '../types/types';

const initialState = {
	usuId: null,
	usuNom: null,
	token: null,
	autenticado: false,
	cargando: false
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_LOADING_LOGIN:
			return {
				...state,
				cargando: true
			};

		default:
			return state;
	}
};
