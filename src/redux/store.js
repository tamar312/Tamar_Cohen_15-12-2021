import { createStore, combineReducers } from 'redux';
import WeatherReducer from './reducers/reducer';


const reducer = combineReducers({
    WeatherReducer
});
const store = createStore(reducer);
window.store = store;
export default store;