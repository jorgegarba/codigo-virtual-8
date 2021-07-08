import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { mesaReducer } from '../reducers/mesaReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	mesa: mesaReducer
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
