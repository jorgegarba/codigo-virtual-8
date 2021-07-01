/**
{
  balance: 0,
  mensaje: ""
}

 */
/**
 * El reducer es la función que recibe solicitudes del DISPATCH
 * para cambiar el estado global.
 *
 * @param {*} state Es una copia del estado global antiguo
 * @param {*} action Es el objeto que nos envía el DISPATCH
 * @returns el reducer retorna el nuevo estado global
 */
export const balanceReducer = (state = { balance: 0, message: '' }, action) => {
	switch (action.type) {
		case 'AGREGAR_DINERO':
			return {
				balance: state.balance + action.payload.monto,
				mensaje: state.payload.mensaje
			};
		// en el caso de que ninguna actión coincida con un action
		// específico, se retornará el estado igual al anterior
		default:
			return state;
	}
};