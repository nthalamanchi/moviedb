import { legacy_createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducer';


export default legacy_createStore(rootReducer,applyMiddleware(thunk));
