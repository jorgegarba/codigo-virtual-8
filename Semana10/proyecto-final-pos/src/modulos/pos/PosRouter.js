import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PosPos from './pages/PosPos';
import { useDispatch } from 'react-redux';
import { getMesas } from '../../redux/actions/mesaAction';

const PosRouter = () => {
	const dispatch = useDispatch();

	dispatch(getMesas());

	return (
		<>
			<Switch>
				<Route path="/pos/pos" component={PosPos} />
			</Switch>
		</>
	);
};

export default PosRouter;
