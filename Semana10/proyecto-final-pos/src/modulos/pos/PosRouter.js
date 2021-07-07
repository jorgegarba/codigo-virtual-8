import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PosPos from './pages/PosPos';

const PosRouter = () => {
	return (
		<>
			<Switch>
				<Route path="/pos/pos" component={PosPos} />
			</Switch>
		</>
	);
};

export default PosRouter;
