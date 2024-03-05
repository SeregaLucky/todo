import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);
