import axios from 'axios';
import { URL_BACKEND } from '../environments/environments';

export const getProductos = async (pagina) => {
	const url = `${URL_BACKEND}/productos?page=${pagina}&limit=6`;
	const rpta = await axios.get(url);
	return rpta;
};
