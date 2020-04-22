import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../root.reducer';
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../root-saga'

const sagaMiddleware = createSagaMiddleware();


const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default { store, persistor };

//pk_test_2lza2EGMcoX0w8BP17e4gOwi00NdNcgChl
