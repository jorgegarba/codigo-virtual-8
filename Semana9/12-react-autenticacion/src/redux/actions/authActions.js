import { URL_BACKEND } from '../../environments/environments';
import {
	FINISH_LOADING_LOGIN,
	SET_SUCCESS_LOGIN,
	START_LOADING_LOGIN
} from '../types/types';
import axios from 'axios';

export const login = (correo, password) => {
	return async (dispatch) => {
		dispatch({ type: START_LOADING_LOGIN });

		const endpoint = `${URL_BACKEND}/login`;
		const data = JSON.stringify({
			correo: correo,
			password: password
		});

		const response = await axios.post(endpoint, data, {
			headers: {
				'Content-type': 'application/json'
			}
		});

		if (response.status === 200) {
			const token = response.data.token;
			const payloadToken = token.split('.')[1];
			// atob() sirve para decodificar strings basados en el algoritmo base64
			// btoa() sirver para codificar un string en base64
			const payloadTokenDecoed = atob(payloadToken);
			const payloadJSON = JSON.parse(payloadTokenDecoed);
			localStorage.setItem('token', token);
			dispatch({
				type: SET_SUCCESS_LOGIN,
				payload: {
					usuId: payloadJSON.usu_id,
					usuNom: payloadJSON.usu_nom,
					usuTipo: payloadJSON.usu_tipo,
					token: token,
					autenticado: true
				}
			});
			dispatch({ type: FINISH_LOADING_LOGIN });
		}
	};
};

export const loginLocalStorage = () => {
	return async (dispatch) => {
		let token = localStorage.getItem('token');
		if (token) {
			const endpoint = `${URL_BACKEND}/verificar`;
			const response = await axios.post(endpoint, null, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if (response.status === 200) {
				const payloadToken = token.split('.')[1];
				// atob() sirve para decodificar strings basados en el algoritmo base64
				// btoa() sirver para codificar un string en base64
				const payloadTokenDecoed = atob(payloadToken);
				const payloadJSON = JSON.parse(payloadTokenDecoed);
				dispatch({
					type: SET_SUCCESS_LOGIN,
					payload: {
						usuId: payloadJSON.usu_id,
						usuNom: payloadJSON.usu_nom,
						usuTipo: payloadJSON.usu_tipo,
						token: token,
						autenticado: true
					}
				});
				dispatch({ type: FINISH_LOADING_LOGIN });
			} else {
				// TO DO: Renovar el token si era un token caducado
				// TO DO: Eliminar el token en caso de que era
				// un token inválido
				dispatch({ type: FINISH_LOADING_LOGIN });
			}
		} else {
			dispatch({ type: FINISH_LOADING_LOGIN });
		}
	};
};
