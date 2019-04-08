import { combineReducers } from 'redux';
import citiesReducer from './cities_reducer';
import activeCityReducer from './active_city_reducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
});

export default rootReducer;
