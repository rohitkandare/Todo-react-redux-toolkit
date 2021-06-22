import todoSaga from './todoSaga'
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    todoSaga
  ]);
}

export default rootSaga
