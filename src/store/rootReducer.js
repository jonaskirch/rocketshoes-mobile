import { combineReducers } from 'redux';

import cart from './modules/cart/reducer';

const reducers = combineReducers({
  cart,
});

export default reducers;
