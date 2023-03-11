import rootReducer from "./reducer";
import loaderReducer from './loaderReducer'
// ACA PARA PODER CONSULTAR LA API TRAIGO applyMiddleware y compose
// Esto es para poder trabajar con peticiones asincronas
import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';

/*  PARA PODER HACER LLAMADOS A LA API sin darle reponsablidad al reducer */
import ThunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    rootReducer: rootReducer,
    loaderReducer: loaderReducer,
})
//const store = createStore (rootReducer, composeEnhancer(applyMiddleware(ThunkMiddleware)));
const store = createStore (reducers, composeEnhancer(applyMiddleware(ThunkMiddleware)));
export default store;