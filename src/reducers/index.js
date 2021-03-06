import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import people from './people';

const rootReducer = combineReducers({
  people,
  routing,
});

export default rootReducer;
