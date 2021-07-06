import { URL_BACKEND } from '../../environments/environments';
import { START_LOADING_LOGIN } from '../types/types';
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
		console.log(response);
	};
};
