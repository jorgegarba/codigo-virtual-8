import React from 'react';
import PosMesa from './PosMesa';
import { useSelector } from 'react-redux';

const PosMesas = () => {
	const { mesas, cargandoMesas } = useSelector((state) => state.mesa);

	return (
		<div className="mesas">
			<ul className="mesas__lista">
				{cargandoMesas === true ? (
					<p>Cargando...</p>
				) : (
					mesas.map((objMesa) => {
						return <PosMesa objMesa={objMesa} key={objMesa.mesa_id} />;
					})
				)}
			</ul>
			<div className="mesas__info"></div>
		</div>
	);
};

export default PosMesas;
