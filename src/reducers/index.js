import squaresReducer from './squares-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  squares: squaresReducer,

});

export default rootReducer;
