import { put, takeEvery } from 'redux-saga/effects'
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../reducers/todo'

function* sagaForAddTodos(action: any) {
    try {
        yield put(ADD_TODO(action.data))
    }
    catch (e) {
        console.log(e)
    }
}

function* sagaForUpdateTodos(action: any) {
    try {
        yield put(DELETE_TODO(action.data))
    }
    catch (e) {
        console.log(e)
    }
}

function* sagaForDeleteTodos(action: any) {
    try {
        yield put(UPDATE_TODO(action.data))
    }
    catch (e) {
        console.log(e)
    }
}

function* todoSaga() {
    yield takeEvery(ADD_TODO, sagaForAddTodos)
    yield takeEvery(UPDATE_TODO, sagaForUpdateTodos)
    yield takeEvery(DELETE_TODO, sagaForDeleteTodos)
}
export default todoSaga
