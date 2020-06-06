import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import usersReducer from './reducers/usersReducer';

// Middleware
const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
