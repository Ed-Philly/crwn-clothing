import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../root.reducer';
import { persistStore } from 'redux-persist'

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };

//pk_test_2lza2EGMcoX0w8BP17e4gOwi00NdNcgChl
