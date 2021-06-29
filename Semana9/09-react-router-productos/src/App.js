import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Carrito from './pages/Carrito';
import Productos from './pages/Productos';

const App = () => {
	return (
		<Router>
			<div className="d-flex">
				<Header />
				<main className="container-fluid">
					<Switch>
						<Route path="/productos" component={Productos} />
						<Route path="/carrito" component={Carrito} />
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default App;
