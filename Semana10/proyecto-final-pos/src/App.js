import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PosRouter from './modulos/pos/PosRouter';

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/pos" component={PosRouter} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
