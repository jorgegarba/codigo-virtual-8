import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminDashboard from './pages/AdminDashboard';

const AdminRouter = () => {
	return (
		<>
			<AdminHeader />
			<Switch>
				<Route path="/admin/dashboard" component={AdminDashboard} />
			</Switch>
		</>
	);
};

export default AdminRouter;
