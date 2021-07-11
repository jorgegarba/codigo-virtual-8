import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import PosRouter from './modulos/pos/PosRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AuthRouter from './modulos/auth/AuthRouter';
import AdminRouter from './modulos/admin/AdminRouter';
import PrivateRoute from './PrivateRoute';
const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/pos" component={PosRouter} />
					<Route path="/auth" component={AuthRouter} />
					<PrivateRoute path="/admin" component={AdminRouter} />
					<Redirect to="/pos/pos" />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
