import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import AdminRouter from './modulos/admin/AdminRouter';
import AuthRouter from './modulos/auth/AuthRouter';
import CarritoRouter from './modulos/carrito/CarritoRouter';
import CatalogoRouter from './modulos/catalogo/CatalogoRouter';
import HomeRouter from './modulos/home/HomeRouter';
import PrivateRoute from './PrivateRoute';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/catalogo" component={CatalogoRouter} />
					<Route path="/carrito" component={CarritoRouter} />
					<Route path="/auth" component={AuthRouter} />
					<PrivateRoute path="/admin" component={AdminRouter} />
					{/* <Route path="/admin" component={AdminRouter} /> */}
					<Route exact path="/" component={HomeRouter} />
					<Redirect to="/" />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
