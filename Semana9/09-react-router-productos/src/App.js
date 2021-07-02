import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Carrito from './pages/Carrito';
import Productos from './pages/Productos';
import { store } from './redux/store/store';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="d-flex">
					<Header />
					<main className="container-fluid">
						<NavBar />
						<Switch>
							<Route path="/productos" component={Productos} />
							<Route path="/carrito" component={Carrito} />
						</Switch>
					</main>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
