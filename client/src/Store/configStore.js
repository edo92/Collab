import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import user from './Reducers/user'
import app from './Reducers/app'

const rootReducer = combineReducers({
    user,
    app
});

// Creating store and apply thunk redux middleware
const configureStore = () => {
    return createStore( rootReducer,applyMiddleware( thunk ));
    
};

export default configureStore;