import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/watcher';

const sagaMiddleware = createSagaMiddleware()
export default configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger]
})
sagaMiddleware.run(rootSaga)
