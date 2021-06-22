import reducer, {
  initialState,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  IS_EDIT_TODO,
  IS_FORM_ERROR
} from '../todo'
import { AddTodoData, AddTodoExpected, todo , formError} from './testData.json'

describe('ADD_TODO reducers and actions', () => {
  it('AddTodo data should add in properly', () => {
    const state = reducer(
      initialState,
      ADD_TODO(AddTodoData)
    );
    const rootState = { todos: state };
    expect(rootState.todos.data).toStrictEqual(AddTodoExpected);
    expect(rootState.todos.isEditTodo).toBe(false)
  });
});

describe('DELETE_TODO reducers and actions', () => {
  it('todo data should delete in properly', () => {
    const state = reducer(
      initialState,
      DELETE_TODO(todo)
    );
    const rootState = { todos: state };
    expect(rootState.todos.data).toEqual(todo);
  });
});

describe('UPDATE_TODO reducers and actions', () => {
  it('todo data should update in properly', () => {
    const state = reducer(
      initialState,
      UPDATE_TODO(todo)
    );
    const rootState = { todos: state };
    expect(rootState.todos.data).toEqual(todo);
  });
});

describe('IS_EDIT_TODO reducers and actions', () => {
  it('IS_EDIT_TODO should true in properly', () => {
    const state = reducer(
      initialState,
      IS_EDIT_TODO()
    );
    const rootState = { todos: state };
    expect(rootState.todos.isEditTodo).toBe(true)
  });
});

describe('IS_FORM_ERROR reducers and actions', () => {
  it('IS_FORM_ERROR should add error in properly', () => {
    const state = reducer(
      initialState,
      IS_FORM_ERROR(formError)
    );
    const rootState = { todos: state };
    expect(rootState.todos.formError).toEqual(formError);
  });
})
