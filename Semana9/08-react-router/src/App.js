import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Portafolio from './pages/Portafolio';

const App = () => {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/nosotros" className="nav-link">
									Nosotros
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/portafolio" className="nav-link">
									Portafolio
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contacto" className="nav-link">
									Contacto
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Switch>
				<Route path="/nosotros" component={Nosotros} />
				<Route path="/portafolio" component={Portafolio} />
				<Route path="/contacto" component={Contacto} />
			</Switch>
		</Router>
	);
};

export default App;
